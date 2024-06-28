// createSong.ts

import { SongSchema } from '@modules/song/schema'; // Adjust import path based on your project structure
import { ISong } from '@modules/song/model'; // Adjust import path based on your project structure

/**
 * Service function to create a new song
 * @param songDetails Object containing song details to be created
 * @returns Promise resolving to the created song object
 */
export const createSong = async (songDetails: ISong): Promise<ISong> => {
  const newSong: ISong = await SongSchema.create({
    title: songDetails.title,
    artist: songDetails.artist,
    album: songDetails.album,
    genre: songDetails.genre,
    release_date: songDetails.release_date,
    duration: songDetails.duration,
  });

  return newSong;
};
