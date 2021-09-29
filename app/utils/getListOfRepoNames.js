const getListOfRepoNames = async () => {
	const { data: repolist } = await octokit.rest.repos.listForAuthenticatedUser();
	let names = repolist.map((repo)=> repo.name );
	return names;
};