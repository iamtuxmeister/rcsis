import NextAuth from 'next-auth';
import { encode, decode } from 'next-auth/jwt';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import Cookies from 'cookies';
import { randomUUID } from 'crypto';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import { connectDB } from '@/util/database';

const getAdapter = (req, res) => ({
	...MongoDBAdapter(connectDB),
	async getSessionAndUser(sessionToken) {
		let db = (await connectDB).db('YOURDBNAME');
		const userAndSession = await db.collection('sessions').findOne({
			sessionToken: sessionToken
		});
		console.log('SESSION USER :', sessionToken, userAndSession);
		if (!userAndSession) return null;

		//insert session data whatever you like
		const { user, ...session } = userAndSession;
		console.log('USER', user);
		return { user: user, session: session };
	}
});

const session = {
	// strategy: "database",
	maxAge: 30 * 24 * 60 * 60, // 30 days
	updateAge: 24 * 60 * 60 // 24 hours
};

export const authOptions = (req, res) => {
	const adapter = getAdapter(req, res);
	return {
		providers: [
			CredentialsProvider({
				name: 'Credentials',
				credentials: {
					email: { label: 'email', type: 'text' },
					password: { label: 'password', type: 'password' }
				},

				async authorize(credentials, req) {
					try {
						let client = (await connectDB).db('YOURDBNAME');
						const user = await client
							.collection('USERCOLLECTION')
							.findOne({ email: credentials.email });
						console.log('Authorize User Credentials: ', user);
						if (user !== null) {
							const res = await bcrypt.compare(credentials.password, user.password);
							if (res === true) {
								let userAccount = {
									id: user._id.toString(),
									name: user.username, //name & email properties are required (strange)
									email: user.email
								};
								console.log('UserAccount created: ', userAccount);
								return userAccount;
							} else {
								console.log('Wrong password');
								return null;
							}
						} else {
							return null;
						}
					} catch (err) {
						console.log('authorize error :', err);
					}
				}
			})
		],

		callbacks: {
			session({ session, user }) {
				console.log('SESSION callback', session, user);
				if (session.user) {
					session.user.id = user.id;
				}
				return session;
			},
			async signIn({ user }) {
				if (
					req.query.nextauth?.includes('callback') &&
					req.query.nextauth?.includes('credentials') &&
					req.method === 'POST'
				) {
					if (user && 'id' in user) {
						const sessionToken = randomUUID();
						const sessionExpiry = new Date(Date.now() + session.maxAge * 1000);
						await adapter.createSession({
							sessionToken: sessionToken,
							userId: user.id,
							user: {
								name: user.name,
								email: user.email
							},
							expires: sessionExpiry
							// userAgent: req.headers["user-agent"] ?? null,
						});
						const cookies = new Cookies(req, res);
						cookies.set('next-auth.session-token', sessionToken, {
							expires: sessionExpiry
						});
					}
				}
				return true;
			}
		},

		//needs to override default jwt behavior when using Credentials
		jwt: {
			encode(params) {
				if (
					req.query.nextauth?.includes('callback') &&
					req.query.nextauth?.includes('credentials') &&
					req.method === 'POST'
				) {
					const cookies = new Cookies(req, res);
					const cookie = cookies.get('next-auth.session-token');
					if (cookie) return cookie;
					else return '';
				}
				// Revert to default behaviour when not in the credentials provider callback flow
				return encode(params);
			},
			async decode(params) {
				if (
					req.query.nextauth?.includes('callback') &&
					req.query.nextauth?.includes('credentials') &&
					req.method === 'POST'
				) {
					return null;
				}
				// Revert to default behaviour when not in the credentials provider callback flow
				return decode(params);
			}
		},
		adapter,
		session
	};
};
export default async function auth(req, res) {
	// Do whatever you want here, before the request is passed down to `NextAuth`
	return await NextAuth(req, res, authOptions(req, res));
}
