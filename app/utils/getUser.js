import octokit from './authenticateUser.js';


const getUser = async () => {
	const {
		data: { login },
	} = await octokit.rest.users.getAuthenticated();
	
	return login;
};

export default getUser;