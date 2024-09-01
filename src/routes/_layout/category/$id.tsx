import { createFileRoute } from '@tanstack/react-router';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetCategories } from 'src/cache/category/useGetCategories';
import { useGetCategoryWords } from 'src/cache/category/useGetCategoryWords';
import { langMap } from 'src/i18n';
import { CardContainer } from 'src/components/CardContainer';
import { ErrorCard } from 'src/components/ErrorCard';
import { type Breadcrumb, Screen } from 'src/components/Screen';
import { WordCard } from 'src/components/WordCard';

export const Route = createFileRoute('/_layout/category/$id')({
	component: CategoryWords,
});

function CategoryWords() {
	const { t, i18n } = useTranslation();
	const { id } = Route.useParams();
	const categoryId = Number(id);

	const categoryQuery = useGetCategories();
	const wordsQuery = useGetCategoryWords(categoryId);
	const { code = 'en' } = langMap.get(i18n.language) || {};

	const breadcrumbs = useMemo<Breadcrumb[]>(() => {
		const category = categoryQuery.data?.find(({ id }) => id === categoryId);

		return [
			{ path: { to: '/' }, label: t('categories.title') },
			{
				path: { to: '/category/$id' },
				label: category?.name_en ?? t('categories.withoutCategory'),
			},
		];
	}, [categoryQuery.data, t, categoryId]);

	return (
		<Screen breadcrumbs={breadcrumbs} isLoading={wordsQuery.isLoading}>
			{wordsQuery.error && (
				<ErrorCard error={wordsQuery.error} onRetry={wordsQuery.refetch} />
			)}
			<CardContainer isEmpty={!wordsQuery.data?.length}>
				{wordsQuery.data?.map((word) => (
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
}
