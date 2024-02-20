import {useState, useEffect} from 'react';
import {MMKV} from 'react-native-mmkv';

// Initialize MMKV storage
const storage = new MMKV();

const useFetchWithAuth = (url: string, options: any = {}) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const token = storage.getString('authToken');
        const modifiedOptions = {...options, headers: {...options.headers}};

        // Include the authToken in the request headers
        if (token) {
          modifiedOptions.headers.Authorization = `Bearer ${token}`;
        }

        const response = await fetch(url, modifiedOptions);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        setData(json);
      } catch (error: any) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [options, url]);

  return {data, isLoading};
};

export default useFetchWithAuth;
