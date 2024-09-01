import {
	Button,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Image,
	Spinner,
} from '@nextui-org/react';
import shuffle from 'lodash/shuffle';
import { GripHorizontal } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useUser } from 'src/auth/useUser';
import { useGetGameWord } from 'src/cache/game/useGetGameWord';
import { useSetWordLearned } from 'src/cache/statistic/useSetWordLearned';
import { useUpdateWordStatistic } from 'src/cache/statistic/useUpdateStatistic';
import { ErrorCard } from './ErrorCard';
import { Swiper } from './Swiper';
import { WordStatistic } from './WordStatistic';

export const GameCard = () => {
	const { t } = useTranslation();
	const user = useUser();
	const [answer, setAnswer] = useState<string>();
	const { data: gameWord, refetch, error, isFetching } = useGetGameWord();
	const { mutate: updateStatistic } = useUpdateWordStatistic();
	const { mutate: setWordAsLearned } = useSetWordLearned();

	const options = useMemo(() => {
		if (!gameWord) return [];
		return shuffle([gameWord.name_en, ...gameWord.variants]);
	}, [gameWord]);

	const handleOption = (option: string) => {
		setAnswer(option);
		if (user && gameWord) {
			updateStatistic({
				userId: user.id,
				wordId: gameWord?.id,
				isRightAnswer: option === gameWord.name_en,
			});
		}

		setTimeout(() => {
			setAnswer(undefined);
			refetch();
		}, 1000);
	};

	if (isFetching) return <Spinner />;
	if (error) return <ErrorCard error={error} onRetry={refetch} />;
	if (!gameWord || !user) return null;

	return (
		<Swiper
			delta={50}
			leftElement={t('game.skip')}
			rightElement={t('game.alreadyKnow')}
			onRightSwipe={() => {
				setWordAsLearned(
					{ userId: user.id, wordId: gameWord.id },
					{ onSuccess: () => refetch() },
				);
			}}
			onLeftSwipe={refetch}
		>
			<Card className="pointer-events-none" shadow="sm">
				<div className="absolute right-0 m-1 opacity-50">
					<WordStatistic wordId={gameWord?.id} />
				</div>
				<CardHeader className="justify-center pb-0">
					<p className="text-xl font-semibold">{gameWord?.name_ka}</p>
				</CardHeader>
				<CardBody className="gap-4">
					<Image
						className="aspect-video w-full max-w-md self-center object-cover"
						draggable={false}
						src={gameWord.picture_url || undefined}
						removeWrapper
					/>
					<div className="inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-2">
						{options.map((option) => (
							<Button
								key={option}
								color={
									answer === option
										? option === gameWord?.name_en
											? 'success'
											: 'danger'
										: 'default'
								}
								className="pointer-events-auto bg-white"
								disabled={Boolean(answer)}
								variant="bordered"
								onClick={() => handleOption(option)}
							>
								{option}
							</Button>
						))}
					</div>
				</CardBody>
				<CardFooter className="justify-center">
					<GripHorizontal />
				</CardFooter>
			</Card>
		</Swiper>
	);
};
