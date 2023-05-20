import type { Actions, PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async () => {
	const fetchArticles = async () => {
		const articleData = await prisma.article.findMany({ orderBy: [{ id: 'desc' }], take: 10 });
		return articleData;
	};
	return {
		articles: fetchArticles()
	};
};

export const actions: Actions = {
	createArticle: async ({ request }) => {
		const { title, content } = Object.fromEntries(await request.formData()) as {
			title: string;
			content: string;
		};
		try {
			const retvar = await prisma.article.create({
				data: { title: title, content: content }
			});
			console.log(retvar);
		} catch (err) {
			console.error(err);
			return fail(500, { message: 'Could not create the article.' });
		}
		return { status: 201 };
	},
	deleteArticle: async ({ url }) => {
		const id = url.searchParams.get('id');
		if (!id) {
			return fail(400, { message: 'Invalid Request' });
		}
		try {
			await prisma.article.delete({
				where: { id: Number(id) }
			});
		} catch (err) {
			return fail(500, { message: 'Could not delete the article.' });
		}
		return { status: 200 };
	}
};
