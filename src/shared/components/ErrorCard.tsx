import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from '@nextui-org/react';

type Props = {
  error: Error;
  onRetry?: () => void;
  isRetrying?: boolean;
};

export const ErrorCard = ({ error, onRetry, isRetrying }: Props) => {
  return (
    <div>
      <Card className="border border-red-300" shadow="sm">
        <CardHeader className="pb-0">
          <p className="text-xl font-semibold text-red-500">Error</p>
        </CardHeader>
        <CardBody>
          <p className="font-mono text-sm">{error.message}</p>
        </CardBody>
        {onRetry && (
          <CardFooter className="justify-end pt-0">
            <Button
              color="danger"
              isLoading={isRetrying}
              variant="bordered"
              onClick={onRetry}
            >
              Retry
            </Button>
          </CardFooter>
        )}
      </Card>
    </div>
  );
};
