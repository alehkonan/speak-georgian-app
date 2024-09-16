import { createFileRoute } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { CardContainer } from 'src/components/CardContainer';
import { CategoryCard } from 'src/components/CategoryCard';
import { type Breadcrumb, Screen } from 'src/components/Screen';
import { langMap } from 'src/i18n';
import { getCategories } from 'src/supabase/category/getCategories';

export const Route = createFileRoute('/_layout/category/')({
	component: CategoriesScreen,
	loader: getCategories,
});

function CategoriesScreen() {
	const { t, i18n } = useTranslation();
	const categories = Route.useLoaderData();

	const code = langMap.get(i18n.language)?.code || 'en';

	const breadcrumbs: Breadcrumb[] = [
		{ label: t('categories.title'), path: { to: '/' } },
	];

	return (
		<Screen breadcrumbs={breadcrumbs} saveScrollPosition>
			<CardContainer>
				{categories.map((category) => (
					<CategoryCard
						key={category.id}
						path={{ to: '/category/$id', params: { id: `${category.id}` } }}
						pictureUrl={category.picture_url}
						title={category[`name_${code}`] || category.name_en}
					/>
				))}
				<CategoryCard
					path={{ to: '/category/$id' }}
					title={t('categories.withoutCategory')}
				/>
			</CardContainer>
		</Screen>
	);
}
