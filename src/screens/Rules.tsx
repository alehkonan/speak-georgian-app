import {
  Card,
  CardBody,
  CardHeader,
  Code,
  Divider,
  Input,
} from '@nextui-org/react';
import { Search } from 'lucide-react';
import { Screen } from 'src/shared/components/Screen';

const warning = 'This screen is development process...';

// TODO move data to database
const rules = [
  {
    title: 'Person indicator in verb',
    statements: [
      {
        description: 'ვ is the indicator of the first person.',
        example: `ვხატავ`,
      },
      {
        description: 'There is no indicator for 2 person.',
        example: `ხატავ`,
      },
      {
        description: 'For 3 person ს is added to the end of the word',
        example: `ხატავს`,
      },
    ],
  },
  {
    title: 'Word order and case markers',
    statements: [
      {
        description:
          'The most common and neutral word order is Subject-Object-Verb.',
        example: `დავითი თამარს ხედავს`,
      },
    ],
  },
];

export const RulesScreen = () => {
  return (
    <Screen>
      <div className="grid auto-rows-min gap-2">
        {rules.map(({ title, statements }) => (
          <Card key={title}>
            <CardHeader className="font-bold">{title}</CardHeader>
            <Divider />
            <CardBody>
              {statements.map(({ description, example }) => (
                <div key={description}>
                  <p>{description}</p>
                  <Code>{example}</Code>
                </div>
              ))}
            </CardBody>
          </Card>
        ))}
        <p className="text-sm italic text-gray-400">{warning}</p>
      </div>
      <Input
        className="self-end"
        placeholder="Search the rule"
        size="sm"
        startContent={<Search />}
        variant="flat"
        isClearable
      />
    </Screen>
  );
};
