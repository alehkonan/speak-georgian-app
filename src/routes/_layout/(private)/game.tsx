import { Button } from '@nextui-org/react';
import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GameCard } from 'src/components/GameCard';
import { Screen } from 'src/components/Screen';

export const Route = createFileRoute('/_layout/(private)/game')({
	component: GameScreen,
});

function GameScreen() {
	console.log('game screen');

	const { t } = useTranslation();
	const [isStarted, setStarted] = useState(false);

	return (
		<Screen>
			{isStarted ? (
				<div className="grid h-full grid-rows-[1fr_auto] items-center self-center">
					<GameCard />
					<Button color="primary" onClick={() => setStarted(false)}>
						{t('game.stop')}
					</Button>
				</div>
			) : (
				<Button
					className="self-end"
					color="primary"
					onClick={() => setStarted(true)}
				>
					{t('game.start')}
				</Button>
			)}
		</Screen>
	);
}
