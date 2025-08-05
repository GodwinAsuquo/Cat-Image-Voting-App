import { useMutation, useQuery } from 'react-query';
import { getCatImages, createVote, getUserVotes } from '../api/cats.service';
import { toast } from 'react-hot-toast';

export const useGetCatImages = (limit?: number) => {
  return useQuery({
    queryKey: ['catImages', limit],
    queryFn: () => getCatImages(limit),
    onError: () => {
      toast.error('Failed to load cat images');
    },
  });
};

export const useCreateVote = () => {
  return useMutation({
    mutationFn: ({ imageId, subId, value }: { imageId: string; subId: string; value: number }) =>
      createVote(imageId, subId, value),
  });
};

export const useGetUserVotes = (subId: string) => {
  return useQuery({
    queryKey: ['userVotes', subId],
    queryFn: () => getUserVotes(subId),
    enabled: !!subId,
    onError: () => {
      toast.error('Failed to load your votes');
    },
  });
};
