// createSongController.ts

import { Request, Response } from 'express';
import { controller } from '@config/controller/controller'; // Adjust import path based on your project structure
import { PlaylistSchema } from '@modules/playlist/schema'; // Adjust import path based on your project structure
import { IPlaylist } from '@modules/playlist/model'; // Adjust import path based on your project structure

/**
 * Controller function to create a new song
 * @param req Request object containing song details in body
 * @param res Response object to send back the created song data or error
 */
export const addPlaylist = controller(async (req: Request, res: Response): Promise<void> => {
  const playlistDetails: IPlaylist = req.body;

  const newPlaylist = await PlaylistSchema.create({
    name: playlistDetails.name,
    artist: playlistDetails.description,
  });

  if (!newPlaylist) {
    res.status(500).json({ error: 'Failed to create song' });
    return;
  }

  res.status(201).json(newPlaylist);
});
