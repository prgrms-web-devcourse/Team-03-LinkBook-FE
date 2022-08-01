import { RefObject, useEffect, useRef, useState } from 'react';

const useGetWidth = (): [number, RefObject<HTMLDivElement>] => {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) setWidth(ref.current.offsetWidth);
  }, [ref.current]);

  return [width, ref];
};

export default useGetWidth;
