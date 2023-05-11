export const load = async ({ fetch, params }) => {
	const fetchUser = async (id: unknown) => {
		const userReq = await fetch(`https://dummyjson.com/users/${id}`);
		const userData = await userReq.json();
		return userData;
	};
	return {
		user: fetchUser(params.studentId)
	};
};
