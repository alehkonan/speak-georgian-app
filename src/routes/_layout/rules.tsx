import { Accordion, AccordionItem } from '@nextui-org/react';
import { createFileRoute } from '@tanstack/react-router';
import { ChevronsLeftRight } from 'lucide-react';
import { getRules } from 'src/supabase/rules/getRules';
import { Screen } from 'src/components/Screen';

export const Route = createFileRoute('/_layout/rules')({
	loader: () => getRules(),
	component: RulesScreen,
});

function RulesScreen() {
	const rules = Route.useLoaderData();

	return (
		<Screen>
			<Accordion selectionMode="multiple" variant="splitted">
				{rules?.map(({ title, statements }) => (
					<AccordionItem
						key={title}
						indicator={<ChevronsLeftRight size={16} />}
						title={title}
					>
						<div className="grid gap-2">
							{statements.map(({ description, example }) => (
								<div key={description}>
									<p>{description}</p>
									<p className="whitespace-pre-wrap italic text-gray-600">
										{example}
									</p>
								</div>
							))}
						</div>
					</AccordionItem>
				))}
			</Accordion>
		</Screen>
	);
}
