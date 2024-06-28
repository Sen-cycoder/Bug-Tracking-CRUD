// deleteSongByIdController.ts

// deleteSongByIdController.ts

import { Request, Response } from 'express';
import { controller } from '@config/controller/controller'; // Adjust import path based on your project structure
import { SongSchema } from '@modules/song/schema'; // Adjust import path based on your project structure

/**
 * Controller function to delete a song by ID
 * @param req Request object containing song ID in params
 * @param res Response object to send back success or error message
 */
export const deleteSongById = controller(async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  // Find the song by ID
  const song = await SongSchema.findByPk(id);

  if (!song) {
    res.status(404).json({ error: 'Song not found' });
    return;
  }

  // Delete the song
  await song.destroy();

  res.status(200).json({ message: 'Song deleted successfully' });
});
