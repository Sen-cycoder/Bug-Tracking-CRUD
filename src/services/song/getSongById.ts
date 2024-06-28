import { SongSchema } from '@modules/song/schema';
import { ISong } from '@modules/song/model';

export const getSongById = async (id: string): Promise<ISong | null> => {
  const condition = {
    id: id,
  };
  const whereCond = { where: condition, raw: true };
  const songDetails = await SongSchema.findOne(whereCond);
  return songDetails;
};
