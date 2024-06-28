// getAllSongs.ts

import { SongSchema } from '@modules/song/schema'; // Adjust import path based on your project structure
import { ISong } from '@modules/song/model'; // Adjust import path based on your project structure

export const getAllSongs = async (): Promise<ISong[]> => {
  const songs = await SongSchema.findAll({ raw: true });
  return songs;
};
