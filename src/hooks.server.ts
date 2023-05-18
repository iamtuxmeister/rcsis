import { SvelteKitAuth } from '@auth/sveltekit';
import AzureAd from '@auth/core/providers/azure-ad';
import GitHub from '@auth/core/providers/github';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import {
	AZURE_AD_CLIENT_ID,
	AZURE_AD_TENANT_ID,
	AZURE_AD_CLIENT_SECRET,
	AUTH_SECRET,
	GITHUB_ID,
	GITHUB_SECRET
} from '$env/static/private';
import { prisma } from '$lib/server/prisma';

export const handle = SvelteKitAuth({
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	adapter: PrismaAdapter(prisma),
	providers: [
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET }),
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		AzureAd({
			clientId: AZURE_AD_CLIENT_ID,
			clientSecret: AZURE_AD_CLIENT_SECRET,
			tenantId: AZURE_AD_TENANT_ID
		})
	],
	secret: AUTH_SECRET,
	trustHost: true
});
