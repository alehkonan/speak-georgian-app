import debounce from 'lodash/debounce';
import { type UIEvent, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

export const useRestoreScrollPosition = (enabled?: boolean) => {
	const { pathname } = useLocation();

	const saveToLocalStorage = useCallback(
		debounce((pn: string, pos: number) => {
			sessionStorage.setItem(pn, String(pos));
		}, 50),
		[],
	);

	const elementRef = useCallback(
		(elem: HTMLDivElement | null) => {
			if (!elem || !enabled) return;
			const position = Number(sessionStorage.getItem(pathname));
			if (Number.isNaN(position)) return;

			elem.scrollTo({ top: position });
		},
		[enabled, pathname],
	);

	const onScroll = useCallback(
		({ currentTarget }: UIEvent) => {
			if (!enabled) return;
			saveToLocalStorage.cancel();
			const { scrollTop } = currentTarget;
			saveToLocalStorage(pathname, scrollTop);
		},
		[enabled, pathname, saveToLocalStorage],
	);

	return {
		elementRef,
		onScroll,
	};
};
