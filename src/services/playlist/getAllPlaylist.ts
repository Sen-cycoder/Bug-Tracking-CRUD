import { PlaylistSchema } from '@modules/playlist/schema'; // Adjust import path based on your project structure

import { IPlaylist } from '@modules/playlist/model';

export const getAllPlaylist = async (): Promise<IPlaylist[]> => {
  const playlist = await PlaylistSchema.findAll({ raw: true });
  return playlist;
};
