import {atom} from 'jotai';
import {atomWithStorage, createJSONStorage} from 'jotai/utils';
import {MMKV} from 'react-native-mmkv';

const storage = new MMKV();

function getItem<T>(key: string): T | null {
  const value = storage.getString(key);
  return value ? JSON.parse(value) : null;
}

function setItem<T>(key: string, value: T): void {
  storage.set(key, JSON.stringify(value));
}

function removeItem(key: string): void {
  storage.delete(key);
}

function clearAll(): void {
  storage.clearAll();
}

const atomWithMMKV = <T>(key: string, initialValue: T) =>
  atomWithStorage<T>(
    key,
    initialValue,
    createJSONStorage<T>(() => ({
      getItem,
      setItem,
      removeItem,
      clearAll,
    })),
  );

export const myAtom = atomWithMMKV('my-atom-key', 'value');
export const userAtom = atomWithMMKV<{username: string; age: number}>('user', {
  username: 'ngdlmk',
  age: 34,
});
export const activePageAtom = atom<{pageId: string}>({pageId: '1'});
