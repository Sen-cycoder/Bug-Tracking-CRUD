// Example query to find all songs for a playlist from the favorites table

// Adjust import path based on your project structure
import { FavouritesSchema } from '@modules/favourites/schema'; // Adjust import path based on your project structure
import { IFavourites } from '@modules/favourites/model';
import { SongSchema } from '@modules/song/schema'; // Adjust import path based on your project structure
import { ISong } from '@modules/song/model';

export const getSongByPlaylist = async (p_id: number): Promise<any[]> => {
  const songs = await FavouritesSchema.findAll({
    where: { p_id },
    include: [{ model: SongSchema }],
  });

  return songs.map((favorite: any) => favorite.song); // Assuming 'song' is the alias for the joined SongSchema
};
