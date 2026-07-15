import '@tanstack/react-query';

type QueryKeyDomain = 'category' | 'favorite' | 'game' | 'statistic' | 'rule';

type QueryKey = [QueryKeyDomain, ...ReadonlyArray<unknown>];

declare module '@tanstack/react-query' {
	interface Register {
		queryKey: QueryKey;
		mutationKey: QueryKey;
	}
}
