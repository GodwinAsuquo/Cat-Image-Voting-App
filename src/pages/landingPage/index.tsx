import { useEffect } from 'react';
import { RefreshCw } from 'lucide-react';
import { CatCard } from '@/components/shared/CatCard';
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';
import { useGetCatImages } from '@/services/query/useCats';
import { useCatStore } from '@/stores/catStore';
import { generateSubId } from '@/utils/generateSubId';

const LandingPage = () => {
  const { data: cats, isLoading, refetch, isRefetching } = useGetCatImages(12);
  const { setCats, subId, setSubId } = useCatStore();

  useEffect(() => {
    if (!subId) {
      const newSubId = generateSubId();
      setSubId(newSubId);
    }
  }, [subId, setSubId]);

  useEffect(() => {
    if (cats) {
      setCats(cats);
    }
  }, [cats, setCats]);

  const handleRefresh = () => {
    refetch();
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Cat Gallery</h1>
        <button
          onClick={handleRefresh}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors cursor-pointer"
        >
          <RefreshCw size={20} />
          <span>{isRefetching ? 'Refreshing...' : 'Refresh'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cats?.map((cat) => (
          <CatCard key={cat.id} cat={cat} />
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
