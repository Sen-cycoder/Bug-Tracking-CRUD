import * as Sequelize from 'sequelize';
// Adjust import path based on your project structure

export interface IFavourites extends Sequelize.Model {
  sr_no: number;
  p_id: number;
  id?: number;
}

export interface ICreateFavouriteRequest {
  p_id: number;
  id?: number;
}
