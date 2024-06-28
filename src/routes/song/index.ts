// songRouter.ts

// songRouter.ts

import { Router } from 'express';
import { songController } from '@controllers/index';

const songRouter = Router();

// // GET all songs
// songRouter.get('/', songController.getAllSongs);

// GET song by ID
songRouter.get('/:id', songController.getSongById);
songRouter.get('/', songController.getAllSong);
songRouter.post('/new', songController.createSong);
songRouter.delete('/delete/:id', songController.deleteSongById);
songRouter.put('/update/:id', songController.updateSongById);

// // POST create a new song
// songRouter.post('/', songController.createSong);

export { songRouter };
