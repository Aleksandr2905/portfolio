import { useEffect, useState, Dispatch, SetStateAction } from "react";

function useLocalStorage<T>(
  key: string,
  defData: T
): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState<T>(() => {
    const localData = localStorage.getItem(key);
    return localData ? (localData as T) : defData;
  });

  useEffect(() => {
    localStorage.setItem(key, state as string);
  }, [key, state]);

  return [state, setState];
}

export default useLocalStorage;
