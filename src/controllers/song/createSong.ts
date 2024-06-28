// createSongController.ts

import { Request, Response } from 'express';
import { controller } from '@config/controller/controller'; // Adjust import path based on your project structure
import { SongSchema } from '@modules/song/schema'; // Adjust import path based on your project structure
import { ISong } from '@modules/song/model'; // Adjust import path based on your project structure

/**
 * Controller function to create a new song
 * @param req Request object containing song details in body
 * @param res Response object to send back the created song data or error
 */
export const createSong = controller(async (req: Request, res: Response): Promise<void> => {
  const songDetails: ISong = req.body;

  const newSong = await SongSchema.create({
    title: songDetails.title,
    artist: songDetails.artist,
    album: songDetails.album,
    genre: songDetails.genre,
    release_date: songDetails.release_date,
    duration: songDetails.duration,
  });

  if (!newSong) {
    res.status(500).json({ error: 'Failed to create song' });
    return;
  }

  res.status(201).json(newSong);
});
