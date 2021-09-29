const getRepoStats = async (owner, repo) => {
	const data = await octokit.rest.repos.get({
		owner,
		repo
	});
	
	return data.data;
};