import { Octokit } from '@octokit/core';
import { restEndpointMethods} from "@octokit/plugin-rest-endpoint-methods";
import config from '../config.js';

const MyOctokit = Octokit.plugin(restEndpointMethods);
const octokit = new MyOctokit({ auth: `${config.githubAuthToken}` });


export default octokit;
