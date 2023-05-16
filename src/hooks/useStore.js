import { useEffect } from 'react';

import useForceUpdate from './useForeceUpdate';

export default function useStore(store) {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    store.subscribe(forceUpdate);

    return () => store.unsubscribe(forceUpdate);
  }, [forceUpdate]);

  return store;
}
