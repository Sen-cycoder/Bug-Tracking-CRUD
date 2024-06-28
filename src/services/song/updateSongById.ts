// updateSongById.ts

import { SongSchema } from '@modules/song/schema'; // Adjust import path based on your project structure
import { ISong } from '@modules/song/model'; // Adjust import path based on your project structure

/**
 * Service function to update a song by its ID
 * @param id ID of the song to update
 * @param updatedSongData Updated song data
 * @returns Promise resolving to the updated song object or null if not found
 */
export const updateSongById = async (
  id: string,
  updatedSongData: Partial<ISong>,
): Promise<ISong | null> => {
  const song = await SongSchema.findByPk(id);

  if (!song) {
    return null;
  }

  await song.update({
    title: updatedSongData.title || song.title,
    artist: updatedSongData.artist || song.artist,
    album: updatedSongData.album || song.album,
    genre: updatedSongData.genre || song.genre,
    release_date: updatedSongData.release_date || song.release_date,
    duration: updatedSongData.duration || song.duration,
  });

  return song;
};
