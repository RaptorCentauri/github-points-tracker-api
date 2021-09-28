//SETUP INDEX FILE
import Router from "express";

const router = new Router();

router.get(`/commits`, async (req,res) => {
	res.send(`Commit Route`);
});

export default router;