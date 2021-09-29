import dotenv from 'dotenv';
dotenv.config();

const config = {
	port: process.env.PORT || 5000,
	githubAuthToken: process.env.GITHUB_AUTH_TOKEN,
};

export default config;