// modules/playlists/schema.ts

import * as Sequelize from 'sequelize';
import { IFavourites } from './model';
import { sequelize } from '../../config/database/sql'; // Adjust import path based on your project structure

export const FavouritesSchema = sequelize.define<IFavourites>(
  'favourites',
  {
    sr_no: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    p_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    id: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: false, // Optional: Adds createdAt and updatedAt fields
  },
);
