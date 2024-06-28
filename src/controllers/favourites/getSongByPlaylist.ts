// controllers/favoritesController.ts

import { Request, Response } from 'express';
import { controller } from '@config/controller/controller'; // Adjust import path based on your project structure
import { FavouritesSchema } from '@modules/favourites/schema'; // Adjust import path based on your project structure
import { SongSchema } from '@modules/song/schema'; // Adjust import path based on your project structure
import { ISong } from '@modules/song/model'; // Adjust import path based on your project structure

/**
 * Controller function to get songs by playlist ID from favorites table
 * @param req Request object containing playlist ID in params
 * @param res Response object to send back the songs or error message
 */
export const getSongByPlaylist = controller(async (req: Request, res: Response): Promise<void> => {
  const { p_id } = req.params;

  // Find all favorites for the given playlist ID
  const favourites = await FavouritesSchema.findAll({
    where: { p_id },
  });

  // Extract song IDs from favourites
  const songIds = favourites.map((favorite) => favorite.id);

  // Find songs corresponding to the extracted IDs
  const songs = await SongSchema.findAll({
    where: { id: songIds },
  });

  res.json(songs);
});
