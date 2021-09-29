const getRepoList = async () => {
	const { data: repolist } = await octokit.rest.repos.listForAuthenticatedUser();
	console.log(repolist);
};