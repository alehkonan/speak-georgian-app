import { BreadcrumbItem, Breadcrumbs, Spinner } from '@nextui-org/react';
import { PropsWithChildren } from 'react';

export type Breadcrumb = {
  path: string;
  label?: string;
};

type Props = {
  isLoading?: boolean;
  breadcrumbs?: Breadcrumb[];
};

export const Screen = ({
  children,
  isLoading,
  breadcrumbs,
}: PropsWithChildren<Props>) => {
  return (
    <div className="flex h-full flex-col overflow-hidden">
      <main className="flex-1 overflow-auto sm:order-1">
        {isLoading ? <Spinner /> : children}
      </main>
      {breadcrumbs && (
        <Breadcrumbs
          className="px-4 py-2 sm:pt-5"
          color="warning"
          variant="solid"
        >
          {breadcrumbs.map(({ label, path }) => (
            <BreadcrumbItem key={path} href={path}>
              {label}
            </BreadcrumbItem>
          ))}
        </Breadcrumbs>
      )}
    </div>
  );
};