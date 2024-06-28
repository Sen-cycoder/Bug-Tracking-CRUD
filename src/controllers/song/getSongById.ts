// getSongById.ts

import { Request, Response } from 'express';
import { controller } from '@config/controller/controller';
import { SongSchema } from '@modules/song/schema'; // Adjust the import path based on your project structure
// Adjust the import path based on your project structure

/**
 * Handler function to get a song by ID
 * @param req Request object containing song ID in params
 * @param res Response object to send back the song data or error
 */
export const getSongById = controller(async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  const song = await SongSchema.findByPk(id);

  if (!song) {
    res.status(404).json({ error: 'Song not found' });
    return;
  }

  res.json(song);
});

// Export the wrapped controller function
