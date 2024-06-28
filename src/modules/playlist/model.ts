// modules/playlists/model.ts

import * as Sequelize from 'sequelize';
// Adjust import path based on your project structure

export interface IPlaylist extends Sequelize.Model {
  p_id: number;
  name: string;
  description?: string;
}

export interface ICreatePlaylistRequest {
  name: string;
  description?: string;
}
