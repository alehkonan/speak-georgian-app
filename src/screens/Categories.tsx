import { useTranslation } from 'react-i18next';
import { generatePath } from 'react-router-dom';
import { paths } from 'src/app/paths';
import { useGetCategories } from 'src/cache/category/useGetCategories';
import { langMap } from 'src/i18n';
import { CardContainer } from 'src/shared/components/CardContainer';
import { CategoryCard } from 'src/shared/components/CategoryCard';
import { ErrorCard } from 'src/shared/components/ErrorCard';
import { type Breadcrumb, Screen } from 'src/shared/components/Screen';

export const CategoriesScreen = () => {
	const { t, i18n } = useTranslation();
	const { data: categories, isLoading, error, refetch } = useGetCategories();

	const code = langMap.get(i18n.language)?.code || 'en';

	const breadcrumbs: Breadcrumb[] = [
		{ label: t('categories.title'), path: '/' },
	];

	return (
		<Screen breadcrumbs={breadcrumbs} isLoading={isLoading} saveScrollPosition>
			{error ? (
				<ErrorCard error={error} onRetry={refetch} />
			) : (
				<CardContainer>
					{categories?.map((category) => (
						<CategoryCard
							key={category.id}
							path={generatePath(paths.category, {
								id: String(category.id),
							})}
							pictureUrl={category.picture_url}
							title={category[`name_${code}`] || category.name_en}
						/>
					))}
					<CategoryCard
						path={generatePath(paths.category, {
							id: 'undefined',
						})}
						title={t('categories.withoutCategory')}
					/>
				</CardContainer>
			)}
		</Screen>
	);
};
