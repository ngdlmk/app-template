import {useState, useEffect} from 'react';
import {del} from 'utils/apiClient';

interface UseFetchOptions {
  withAuthToken?: boolean;
}

interface UseFetchResult<T> {
  data: T | null;
  isLoading: boolean;
  error: string;
}

function useDelete<T>(
  path: string,
  {withAuthToken = false}: UseFetchOptions = {},
): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await del<T>(path, withAuthToken);
        setData(response);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [path, withAuthToken]);

  return {data, isLoading, error};
}

export default useDelete;
