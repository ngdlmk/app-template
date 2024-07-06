import {useState} from 'react';
import {put} from 'utils/apiClient';

interface UseFetchResult<ResponseType, BodyType> {
  data: ResponseType | null;
  isLoading: boolean;
  error: string;
  mutateRequest: (body: BodyType) => void;
}

function usePut<ResponseType, BodyType>(
  path: string,
  withAuthToken = false,
): UseFetchResult<ResponseType, BodyType> {
  const [data, setData] = useState<ResponseType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const mutateRequest = async (body: BodyType) => {
    setIsLoading(true);
    try {
      const response = await put<ResponseType>(path, body, withAuthToken);
      setData(response);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {data, isLoading, error, mutateRequest};
}

export default usePut;
