import type { Actions, PageServerLoad } from './$types';
import { prisma } from '$lib/server/prisma';
import { error, fail } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ params }) => {
	const fetchArticle = async () => {
		const article = await prisma.article.findUnique({
			where: { id: Number(params.articleId) }
		});

		if (!article) {
			throw error(404, 'Article not found');
		}
		return article;
	};
	return {
		article: fetchArticle()
	};
};

export const actions: Actions = {
	updateArticle: async ({ request }) => {
		const { id, title, content } = Object.fromEntries(await request.formData()) as {
			id: string;
			title: string;
			content: string;
		};
		try {
			await prisma.article.update({ where: { id: Number(id) }, data: { title, content } });
		} catch (err) {
			console.error(err);
			return fail(500, { message: 'Could not create the article.' });
		}
		return { status: 201 };
	}
};
