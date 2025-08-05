import axiosInstance from '@/lib/axios';
import { GET_CAT_IMAGES, VOTES } from '../apiUrls';
import { CatImage, Vote, VoteResponse } from '@/types';

export const getCatImages = async (limit: number = 10): Promise<CatImage[]> => {
  const response = await axiosInstance.get(`${GET_CAT_IMAGES}?limit=${limit}`);
  return response.data;
};

export const createVote = async (imageId: string, subId: string, value: number): Promise<VoteResponse> => {
  const response = await axiosInstance.post(VOTES, {
    image_id: imageId,
    sub_id: subId,
    value,
  });
  return response.data;
};

export const getUserVotes = async (subId: string): Promise<Vote[]> => {
  const response = await axiosInstance.get(`${VOTES}?sub_id=${subId}`);
  return response.data;
};
