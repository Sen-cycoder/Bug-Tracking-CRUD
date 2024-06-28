// model.ts

import * as Sequelize from 'sequelize';

export interface ISong extends Sequelize.Model {
  id: number;
  title: string;
  artist?: string;
  album?: string;
  genre?: string;
  release_date?: Date;
  duration?: number;
}

export interface ICreateSongRequest {
  title: string;
  artist?: string;
  album?: string;
  genre?: string;
  release_date?: Date;
  duration?: number;
}

// No specific interface needed for getting songs or by ID since Sequelize provides methods for those directly.
