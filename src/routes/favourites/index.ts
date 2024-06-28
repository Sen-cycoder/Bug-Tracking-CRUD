import { Router } from 'express';
import { favouritesController } from '@controllers/index';

const favouritesRouter = Router();

// // GET all songs
// songRouter.get('/', songController.getAllSongs);

// GET song by ID
// songRouter.get('/:id', songController.getSongById);
// songRouter.get('/', songController.getAllSong);
// songRouter.post('/new', songController.createSong);
// songRouter.delete('/delete/:id', songController.deleteSongById);
// songRouter.put('/update/:id', songController.updateSongById);
favouritesRouter.get('/:p_id', favouritesController.getSongByPlaylist);
// // POST create a new song
// songRouter.post('/', songController.createSong);

export { favouritesRouter };
