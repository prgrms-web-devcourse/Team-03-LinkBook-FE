import axios from '.';
import { TagType } from '../types';
import { TAGS } from './url';

export const getTag = async () => {
  const res = await axios.get(`${TAGS}`);

  return res as unknown as TagType;
};
