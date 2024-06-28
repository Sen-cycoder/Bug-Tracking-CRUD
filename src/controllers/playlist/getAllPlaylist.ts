import { Request, Response } from 'express';
import { controller } from '@config/controller/controller'; // Adjust import path based on your project structure
import { PlaylistSchema } from '@modules/playlist/schema'; // Adjust import path based on your project structure

/**
 * Controller function to get all songs
 * @param req Request object (not used in this function)
 * @param res Response object to send back the list of songs or error
 */
export const getAllPlaylist = controller(async (req: Request, res: Response): Promise<void> => {
  const playlist = await PlaylistSchema.findAll();

  res.json(playlist);
});
