import { Chip } from '@nextui-org/react';
import type { LucideProps } from 'lucide-react';
import type { FC } from 'react';
import { twJoin } from 'tailwind-merge';

type Props = {
	isVisible?: boolean;
	Icon: FC<LucideProps>;
	text: string | null;
};

export const WordChip = ({ isVisible = true, Icon, text }: Props) => {
	return (
		<Chip
			className={twJoin(['bg-white ', !isVisible && 'invisible'])}
			radius="sm"
			variant="flat"
		>
			<Icon className="inline-block" size={16} /> {text}
		</Chip>
	);
};
