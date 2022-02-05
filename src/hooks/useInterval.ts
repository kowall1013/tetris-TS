import { useEffect, useRef } from 'react';

export function useInterval(callback: () => void, delay: number | null) {
  const saveCallback = useRef<null | (() => void)>(null);
  useEffect(() => {
    saveCallback.current = callback
  }, [callback])

  useEffect(() => {
    function tick(): void {
      if(saveCallback.current) saveCallback.current();
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => {
        clearInterval(id);
      };
    }
  }, [delay])
}