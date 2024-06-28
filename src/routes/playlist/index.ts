// songRouter.ts

// songRouter.ts

import { Router } from 'express';
import { playlistController } from '@controllers/index';

const playlistRouter = Router();

// // GET all songs
// songRouter.get('/', songController.getAllSongs);

// GET song by ID
// songRouter.get('/:id', songController.getSongById);
// songRouter.get('/', songController.getAllSong);
// songRouter.post('/new', songController.createSong);
// songRouter.delete('/delete/:id', songController.deleteSongById);
// songRouter.put('/update/:id', songController.updateSongById);
playlistRouter.get('/', playlistController.getAllPlaylist);
playlistRouter.get('/newPlaylist', playlistController.addPlaylist);
// // POST create a new song
// songRouter.post('/', songController.createSong);

export { playlistRouter };
