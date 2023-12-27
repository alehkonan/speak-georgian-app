import {
  type PersistedClient,
  type Persister,
} from '@tanstack/react-query-persist-client';
import { get, set, del } from 'idb-keyval';

const idbKey: IDBValidKey = 'cache';

export const idbPersister: Persister = {
  persistClient: (client: PersistedClient) => set(idbKey, client),
  restoreClient: () => get<PersistedClient>(idbKey),
  removeClient: () => del(idbKey),
};
