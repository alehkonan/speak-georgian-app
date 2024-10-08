import { DevTool } from '@hookform/devtools';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input, Select, SelectItem } from '@nextui-org/react';
import { createFileRoute } from '@tanstack/react-router';
import { useId, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useGetCategories } from 'src/cache/category/useGetCategories';
import { useUploadImage } from 'src/cache/storage/useImageQuery';
import { useAddWord } from 'src/cache/word/useAddWord';
import { FileInput } from 'src/components/FileInput';
import { Screen } from 'src/components/Screen';
import { type WordForm, WordFormSchema } from 'src/supabase/schemas/word';

export const Route = createFileRoute('/_layout/(private)/new-word')({
	component: NewWordScreen,
});

function NewWordScreen() {
	const { t } = useTranslation();
	const formId = useId();
	const { data: categories } = useGetCategories();
	const { mutateAsync: uploadImage, isPending } = useUploadImage();
	const { mutateAsync: addWord, isPending: isAdding } = useAddWord();
	const form = useForm<WordForm>({ resolver: zodResolver(WordFormSchema) });
	const [image, setImage] = useState<File>();

	const onSubmit = async (word: WordForm) => {
		if (image) {
			const picture_url = await uploadImage({
				category: form.getValues().category_id,
				image,
			});
			await addWord({ ...word, picture_url });
		} else {
			await addWord(word);
		}
		form.reset();
		setImage(undefined);
	};

	return (
		<Screen>
			<form
				className="grid gap-2 self-start rounded-xl bg-white p-4 shadow"
				id={formId}
				noValidate
				onSubmit={form.handleSubmit(onSubmit, console.warn)}
			>
				<Input
					enterKeyHint="next"
					errorMessage={form.formState.errors.name_ka?.message}
					label={t('word.georgianWord')}
					lang="ka"
					isRequired
					{...form.register('name_ka')}
				/>
				<Input
					enterKeyHint="next"
					errorMessage={form.formState.errors.name_en?.message}
					label={t('word.englishTranslation')}
					isRequired
					{...form.register('name_en')}
				/>
				<Input
					enterKeyHint="next"
					errorMessage={form.formState.errors.transcription_en?.message}
					label={t('word.englishTranscription')}
					{...form.register('transcription_en')}
				/>
				<Input
					enterKeyHint="next"
					errorMessage={form.formState.errors.name_ru?.message}
					label={t('word.russianTranslation')}
					lang="ru"
					{...form.register('name_ru')}
				/>
				<Select
					items={categories || []}
					label={t('word.category')}
					{...form.register('category_id')}
				>
					{(category) => (
						<SelectItem key={category.id}>{category.name_en}</SelectItem>
					)}
				</Select>
				<FileInput
					accept="image/*"
					enterKeyHint="next"
					label={t('word.selectImage')}
					selectedFile={image}
					onSelectFile={setImage}
				/>
			</form>
			{import.meta.env.DEV && <DevTool control={form.control} />}
			<Button
				className="self-end"
				color="primary"
				form={formId}
				isLoading={isPending || isAdding}
				type="submit"
			>
				{t('word.add')}
			</Button>
		</Screen>
	);
}
