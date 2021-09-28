import express from 'express';
import config from './config.js';
import apiRoutes from './routes/index.js';

const app = new express();
app.use(`/api`, apiRoutes);



app.listen(config.port, () => {
	console.log(`Server running on port: ${config.port}`);
});
