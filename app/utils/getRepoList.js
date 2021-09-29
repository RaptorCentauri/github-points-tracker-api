import octokit from './authenticateUser.js';

const getRepoList = async () => {
	const { data: repolist } = await octokit.rest.repos.listForAuthenticatedUser();
	console.log(repolist);
};

export default getRepoList;