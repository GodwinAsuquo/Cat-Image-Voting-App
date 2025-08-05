import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useCatStore } from '@/stores/catStore';

const CatDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const selectedCat = useCatStore((state) => state.selectedCat);

  if (!selectedCat || selectedCat.id !== id) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-400 mb-4">Cat not found</p>
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 mx-auto px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Gallery</span>
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-6 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors"
      >
        <ArrowLeft size={20} />
        <span>Back</span>
      </button>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <img
          src={selectedCat.url}
          alt="Cat"
          className="w-full h-auto max-h-[600px] object-contain bg-gray-100 dark:bg-gray-700"
        />

        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Cat Details</h1>

          <div className="space-y-2">
            <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
              <span className="text-gray-600 dark:text-gray-400">Image ID:</span>
              <span className="font-mono text-sm text-black dark:text-white">{selectedCat.id}</span>
            </div>

            <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
              <span className="text-gray-600 dark:text-gray-400">Dimensions:</span>
              <span className="text-black dark:text-white">
                {selectedCat.width} x {selectedCat.height}
              </span>
            </div>

            {selectedCat.breeds && selectedCat.breeds.length > 0 && (
              <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Breed Information</h2>
                {selectedCat.breeds.map((breed) => (
                  <div key={breed.id} className="space-y-3">
                    <h3 className="text-lg font-medium">{breed.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{breed.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium">Origin:</span> {breed.origin}
                      </div>
                      <div>
                        <span className="font-medium">Life Span:</span> {breed.life_span} years
                      </div>
                      <div>
                        <span className="font-medium">Weight:</span> {breed.weight.metric} kg
                      </div>
                      <div>
                        <span className="font-medium">Temperament:</span> {breed.temperament}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatDetails;
