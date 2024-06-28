// modules/playlists/schema.ts

import * as Sequelize from 'sequelize';
import { IPlaylist } from './model';
import { sequelize } from '../../config/database/sql'; // Adjust import path based on your project structure

export const PlaylistSchema = sequelize.define<IPlaylist>(
  'playlists',
  {
    p_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: false, // Optional: Adds createdAt and updatedAt fields
  },
);

export default PlaylistSchema;
