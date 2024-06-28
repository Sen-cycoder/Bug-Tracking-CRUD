// createSong.ts

import { PlaylistSchema } from '@modules/playlist/schema'; // Adjust import path based on your project structure
import { IPlaylist } from '@modules/playlist/model'; // Adjust import path based on your project structure

/**
 * Service function to create a new song
 * @param playlistDetails Object containing song details to be created
 * @returns Promise resolving to the created song object
 */
export const addPlaylist = async (playlistDetails: IPlaylist): Promise<IPlaylist> => {
  const newPlaylist: IPlaylist = await PlaylistSchema.create({
    name: playlistDetails.name,
    artist: playlistDetails.description,
  });

  return newPlaylist;
};
