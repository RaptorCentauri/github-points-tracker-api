const getUser = async () => {
	const {
		data: { login },
	} = await octokit.rest.users.getAuthenticated();
	
	return login;
};