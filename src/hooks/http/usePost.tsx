import {useState, useEffect} from 'react';
import {post} from 'utils/apiClient';

interface UseFetchResult<T> {
  data: T | null;
  isLoading: boolean;
  error: string;
}

function usePost<T>(
  path: string,
  body: any = {},
  withAuthToken = false,
): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await post<T>(path, body, withAuthToken);
        setData(response);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [path, body, withAuthToken]);

  return {data, isLoading, error};
}

export default usePost;
