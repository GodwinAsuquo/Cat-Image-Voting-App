import { useEffect } from 'react';
import { useGetUserVotes } from '@/services/query/useCats';
import { useCatStore } from '@/stores/catStore';
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';
import { ThumbsUp, ThumbsDown } from 'lucide-react';

const MyVotes = () => {
  const { subId, setMyVotes, myVotes } = useCatStore();
  const { data: votes, isLoading } = useGetUserVotes(subId);

  useEffect(() => {
    if (votes) {
      setMyVotes(votes);
    }
  }, [votes, setMyVotes]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!myVotes || myVotes.length === 0) {
    return (
      <div className="text-center py-12">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">My Votes</h1>
        <p className="text-gray-600 dark:text-gray-400">You haven't voted on any cats yet!</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">My Votes</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {myVotes.map((vote) => (
          <div key={vote.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            {vote.image && <img src={vote.image.url} alt="Cat" className="w-full h-48 object-cover" />}
            <div className="p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(vote.created_at).toLocaleDateString()}
                </span>
                <div className={`flex items-center gap-1 ${vote.value === 1 ? 'text-green-500' : 'text-red-500'}`}>
                  {vote.value === 1 ? <ThumbsUp size={20} /> : <ThumbsDown size={20} />}
                  <span className="font-semibold">{vote.value === 1 ? '+1' : '-1'}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyVotes;
