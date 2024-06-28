// modules/songs/schema.ts

import * as Sequelize from 'sequelize';
import { ISong } from './model';
import { sequelize } from '../../config/database/sql';

export const SongSchema = sequelize.define<ISong>(
  'songs',
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    artist: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    album: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    genre: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    release_date: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    duration: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  },
);
