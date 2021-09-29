//SETUP INDEX FILE
import Router from "express";
import config from '../config.js';

import { Octokit } from '@octokit/core';
import { restEndpointMethods} from "@octokit/plugin-rest-endpoint-methods";


const MyOctokit = Octokit.plugin(restEndpointMethods);
const octokit = new MyOctokit({ auth: `${config.githubAuthToken}` });


const router = new Router();


const getUser = async () => {
	const {
		data: { login },
	} = await octokit.rest.users.getAuthenticated();
	
	return login;
};


const getRepoList = async () => {
	const { data: repolist } = await octokit.rest.repos.listForAuthenticatedUser();
	console.log(repolist);
};

const getListOfRepoNames = async () => {
	const { data: repolist } = await octokit.rest.repos.listForAuthenticatedUser();
	let names = repolist.map((repo)=> repo.name );
	return names;
};

const getRepoStats = async (owner, repo) => {
	const data = await octokit.rest.repos.get({
		owner,
		repo
	});
	
	return data.data;
};








router.get(`/commits`, async (req,res) => {
	await getListOfRepoNames();


	res.send(`Commit Route`);
});

export default router;

