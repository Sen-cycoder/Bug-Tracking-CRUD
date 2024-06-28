// deleteSong.ts

import { SongSchema } from '@modules/song/schema'; // Adjust import path based on your project structure

/**
 * Service function to delete a song by its ID
 * @param id ID of the song to delete
 * @returns Promise indicating success or failure of deletion
 */
export const deleteSongById = async (id: string): Promise<boolean> => {
  const deletedCount = await SongSchema.destroy({
    where: {
      id: id,
    },
  });

  return deletedCount > 0;
};
