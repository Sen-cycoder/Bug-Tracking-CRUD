// v1Router.ts

import { Router } from 'express';
import { authRouter } from './auth'; // Adjust path based on your project structure
import { userRouter } from './user'; // Adjust path based on your project structure
import { songRouter } from './song';
import { playlistRouter } from './playlist';
import { favouritesRouter } from './favourites'; // Adjust path based on your project structure

const v1Router = Router();

v1Router.use('/auth', authRouter);
v1Router.use('/user', userRouter);
v1Router.use('/songs', songRouter);
v1Router.use('/playlist', playlistRouter);
v1Router.use('/fav', favouritesRouter); // Mount songRouter under /songs route

export { v1Router };
