import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { useGetFavoriteWords } from 'src/cache/favorite/useGetFavoriteWords';
import { langMap } from 'src/i18n';
import { CardContainer } from 'src/components/CardContainer';
import { ErrorCard } from 'src/components/ErrorCard';
import { Screen } from 'src/components/Screen';
import { WordCard } from 'src/components/WordCard';

export const Route = createFileRoute('/_layout/(private)/favorites')({
	component: () => {
		const { t, i18n } = useTranslation();
		const { data, error, isLoading, refetch } = useGetFavoriteWords();
		const { code = 'en' } = langMap.get(i18n.language) || {};

		return (
			<Screen isLoading={isLoading}>
				<CardContainer isEmpty={!data?.length}>
					{error && <ErrorCard error={error} onRetry={refetch} />}
					{data?.map((word) => (
						<WordCard
							key={word.id}
							categoryId={word.category_id}
							id={word.id}
							isFavorite={word.is_favorite}
							isLearned={word.is_learned}
							pictureUrl={word.picture_url}
							speechPart={word.speech_part}
							transcription={word.transcription_en}
							translation={word[`name_${code}`] || t('noTranslation')}
							word={word.name_ka}
						/>
					))}
				</CardContainer>
			</Screen>
		);
	},
});
