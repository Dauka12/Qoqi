import { useDidMountEvents } from '@/hooks';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import firebase from '@/services/firebase';

const useEvent = (id) => {
  // get and check if product exists in store
  const storeEvent = useSelector((state) => state.events.items.find((item) => item.id === id));

  const [event, setEvent] = useState(storeEvent);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const didMountEvents = useDidMountEvents(true);

  useEffect(() => {
    (async () => {
      try {
        if (!event || event.id !== id) {
          setLoading(true);
          const doc = await firebase.getSingleEvent(id);

          if (doc.exists) {
            const data = { ...doc.data(), id: doc.ref.id };

            if (didMountEvents) {
              setEvent(data);
              setLoading(false);
            }
          } else {
            setError('Event not found.');
          }
        }
      } catch (err) {
        if (didMountEvents) {
          setLoading(false);
          setError(err?.message || 'Something went wrong.');
        }
      }
    })();
  }, [id]);

  return { event, isLoading, error };
};

export default useEvent;
