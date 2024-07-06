import {useState} from 'react';
import {get} from 'utils/apiClient';
interface UseFetchResult<ResponseType> {
  data: ResponseType | null;
  isLoading: boolean;
  error: string;
  mutateRequest: () => void;
}

function useGet<ResponseType>(
  path: string,
  withAuthToken = false,
): UseFetchResult<ResponseType> {
  const [data, setData] = useState<ResponseType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');

  const mutateRequest = async () => {
    setIsLoading(true);
    try {
      const response = await get<ResponseType>(path, withAuthToken);
      setData(response);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return {data, isLoading, error, mutateRequest};
}

export default useGet;
