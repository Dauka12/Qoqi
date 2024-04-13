import { useEffect, useState } from 'react';

const useDidMountEvents = (initState = false) => {
  const [didMountEvents, setDidMountEvents] = useState(initState);

  useEffect(() => {
    setDidMountEvents(true);

    return () => {
      setDidMountEvents(false);
    };
  }, []);

  return didMountEvents;
};

export default useDidMountEvents;
