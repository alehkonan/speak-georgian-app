import { Accordion, AccordionItem } from '@nextui-org/react';
import { ChevronsLeftRight } from 'lucide-react';
import { useGetRules } from 'src/cache/rule/useGetRules';
import { Screen } from 'src/shared/components/Screen';

export const RulesScreen = () => {
	const { data: rules } = useGetRules();

	if (!rules?.length) return null;

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
};
