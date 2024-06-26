import type {
	PersistedClient,
	Persister,
} from '@tanstack/react-query-persist-client';
import { del, get, set } from 'idb-keyval';

const idbKey: IDBValidKey = 'cache';

export const idbPersister: Persister = {
	persistClient: (client: PersistedClient) => set(idbKey, client),
	restoreClient: () => get<PersistedClient>(idbKey),
	removeClient: () => del(idbKey),
};
