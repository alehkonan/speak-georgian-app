import { BreadcrumbItem, Breadcrumbs, Spinner } from '@nextui-org/react';
import {
	type NavigateOptions,
	type RegisteredRouter,
	useNavigate,
} from '@tanstack/react-router';
import type { PropsWithChildren } from 'react';
import { useRestoreScrollPosition } from '../hooks/useRestoreScrollPosition';

export type Breadcrumb = {
	path: NavigateOptions<RegisteredRouter>;
	label?: string;
};

type Props = {
	isLoading?: boolean;
	breadcrumbs?: Breadcrumb[];
	saveScrollPosition?: boolean;
};

export const Screen = ({
	children,
	isLoading,
	breadcrumbs,
	saveScrollPosition,
}: PropsWithChildren<Props>) => {
	const navigate = useNavigate();
	const { elementRef, onScroll } = useRestoreScrollPosition(saveScrollPosition);

	return (
		<div className="flex h-full flex-col overflow-hidden">
			<main
				ref={elementRef}
				className="flex-1 overflow-auto sm:order-1"
				onScroll={onScroll}
			>
				<div className="mx-auto grid min-h-full max-w-5xl gap-3 p-5 pt-10">
					{isLoading ? (
						<Spinner className="justify-self-center p-5" />
					) : (
						children
					)}
				</div>
			</main>
			{breadcrumbs && (
				<Breadcrumbs
					className="px-4 py-2 sm:pt-5"
					color="warning"
					variant="solid"
				>
					{breadcrumbs.map(({ label, path }) => (
						<BreadcrumbItem key={path.to} onPress={() => navigate(path)}>
							{label}
						</BreadcrumbItem>
					))}
				</Breadcrumbs>
			)}
		</div>
	);
};
