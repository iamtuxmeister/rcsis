export const load = async () => {
	const fetchUsers = async () => {
		const userReq = await fetch('https://dummyjson.com/users?limit=30&skip=5');
		const userData = await userReq.json();
		return userData.users;
	};
	return {
		users: fetchUsers()
	};
};
