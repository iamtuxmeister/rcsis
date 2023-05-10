export const load = async () => {
	const fetchComments = async () => {
		const commentsReq = await fetch('https://dummyjson.com/comments');
		const commentData = await commentsReq.json();
		return commentData.comments;
	};
	return { comments: fetchComments() };
};
