// updateSongByIdController.ts

import { Request, Response } from 'express';
import { controller } from '@config/controller/controller'; // Adjust import path based on your project structure
import { SongSchema } from '@modules/song/schema'; // Adjust import path based on your project structure
import { ISong } from '@modules/song/model'; // Adjust import path based on your project structure

/**
 * Controller function to update a song by ID
 * @param req Request object containing song ID in params and updated song data in body
 * @param res Response object to send back updated song data or error message
 */
export const updateSongById = controller(async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const updatedSongData: Partial<ISong> = req.body;

  let song = await SongSchema.findByPk(id);

  if (!song) {
    res.status(404).json({ error: 'Song not found' });
    return;
  }

  await song.update({
    title: updatedSongData.title || song.title,
    artist: updatedSongData.artist || song.artist,
    album: updatedSongData.album || song.album,
    genre: updatedSongData.genre || song.genre,
    release_date: updatedSongData.release_date || song.release_date,
    duration: updatedSongData.duration || song.duration,
  });

  song = await SongSchema.findByPk(id); // Refresh song data after update

  res.json(song);
});
