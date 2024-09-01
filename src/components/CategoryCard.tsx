import { Card, CardBody, Chip, Image } from '@nextui-org/react';
import {
	type NavigateOptions,
	type RegisteredRouter,
	useNavigate,
} from '@tanstack/react-router';

type Props = {
	title: string;
	pictureUrl?: string | null;
	path: NavigateOptions<RegisteredRouter>;
};

export const CategoryCard = ({ title, pictureUrl, path }: Props) => {
	const navigate = useNavigate();

	return (
		<Card shadow="sm" disableRipple isPressable onPress={() => navigate(path)}>
			<CardBody className="p-0">
				<Chip className="absolute z-20 m-1" variant="faded">
					{title}
				</Chip>
				<Image
					alt={title}
					className="aspect-square object-cover"
					src={pictureUrl || undefined}
					removeWrapper
				/>
			</CardBody>
		</Card>
	);
};
