import { useEffect, useState } from 'react';

const initialTime = 10;

const useCount = () => {
  const [count, setCount] = useState(initialTime);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active && count > 0) {
      const timeout = setTimeout(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [active, count]);

  const start = () => {
    if (count > 0) {
      setActive(true);
    }
  };

  const stop = () => {
    setActive(false);
  };

  const reset = () => {
    setActive(false);
    setCount(initialTime);
  };

  return { count, start, stop, reset, active };
};

export default useCount;
