import { CatImage } from '@/types';
import { ThumbsUp, ThumbsDown, Info } from 'lucide-react';
import { useCatStore } from '@/stores/catStore';
import { useCreateVote } from '@/services/query/useCats';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useQueryClient } from 'react-query';

interface CatCardProps {
  cat: CatImage;
}

export const CatCard = ({ cat }: CatCardProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { userVotes, subId, setUserVote } = useCatStore();
  const { mutate: vote, isLoading } = useCreateVote();
  const [score, setScore] = useState<number | null>(null);

  const hasVoted = userVotes[cat.id] !== undefined;
  const userVote = userVotes[cat.id];

  const handleVote = (value: number) => {
    if (hasVoted || isLoading) return;

    vote(
      { imageId: cat.id, subId, value },
      {
        onSuccess: () => {
          setUserVote(cat.id, value);
          setScore(value);
          queryClient.invalidateQueries(['userVotes']);
          toast.success(value === 1 ? 'Upvoted! 🐱' : 'Downvoted 😿');
        },
        onError: () => {
          toast.error('Failed to submit vote');
        },
      }
    );
  };

  const handleImageClick = () => {
    useCatStore.getState().setSelectedCat(cat);
    navigate(`/cat/${cat.id}`);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
      <div className="relative cursor-pointer group" onClick={handleImageClick}>
        <img src={cat.url} alt="Cat" className="w-full h-64 object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-center justify-center">
          <Info className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <button
              onClick={() => handleVote(1)}
              disabled={hasVoted || isLoading}
              className={`cursor-pointer disabled:cursor-not-allowed p-2 rounded-lg transition-colors ${
                userVote === 1
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 hover:bg-green-100 dark:hover:bg-green-900'
              } ${hasVoted && userVote !== 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <ThumbsUp size={20} />
            </button>

            <button
              onClick={() => handleVote(-1)}
              disabled={hasVoted || isLoading}
              className={`cursor-pointer disabled:cursor-not-allowed p-2 rounded-lg transition-colors ${
                userVote === -1
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 hover:bg-red-100 dark:hover:bg-red-900'
              } ${hasVoted && userVote !== -1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <ThumbsDown size={20} />
            </button>
          </div>

          {(hasVoted || score !== null) && (
            <div className="text-sm font-semibold">
              {score !== null ? (
                <span className={score === 1 ? 'text-green-500' : 'text-red-500'}>{score === 1 ? '+1' : '-1'}</span>
              ) : (
                <span className="text-gray-500 dark:text-gray-400">Voted</span>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
