import express from 'express';

import { addShow,getNowPlayingMovies } from '../controllers/showController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const showRouter = express.Router();

showRouter.get('/now-playing', getNowPlayingMovies);
showRouter.post('/add',  authMiddleware, addShow);

export default showRouter;