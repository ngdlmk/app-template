import {MMKV} from 'react-native-mmkv';
import Config from 'react-native-config';

const storage = new MMKV();

const getAuthToken = (): string | null => storage.getString('authToken');

interface RequestOptions {
  method: string;
  headers: Record<string, string>;
  body?: string;
}

const apiClient = async <T>(
  method: 'POST' | 'GET' | 'PUT' | 'DELETE',
  path: string,
  body: any = null,
  withAuthToken: boolean = false,
): Promise<T> => {
  const token = getAuthToken();
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (token && withAuthToken) {
    headers.Authorization = `Bearer ${token}`;
  }

  const options: RequestOptions = {
    method,
    headers,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const response = await fetch(`${Config.BASE_URL}/${path}`, options);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const get = <T>(
  path: string,
  withAuthToken: boolean = false,
): Promise<T> => apiClient<T>('GET', path, null, withAuthToken);
export const post = <T>(
  path: string,
  body: any,
  withAuthToken: boolean = false,
): Promise<T> => apiClient<T>('POST', path, body, withAuthToken);
export const put = <T>(
  path: string,
  body: any,
  withAuthToken: boolean = false,
): Promise<T> => apiClient<T>('PUT', path, body, withAuthToken);
export const del = <T>(
  path: string,
  withAuthToken: boolean = false,
): Promise<T> => apiClient<T>('DELETE', path, null, withAuthToken);
