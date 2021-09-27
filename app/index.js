import express from 'express';
import config from './config.js';

const app = new express();

app.listen(config.port, () => {
	console.log(`Server running on port: ${config.port}`);
});
