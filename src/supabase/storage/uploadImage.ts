import { supabaseClient } from '../client';

type Params = {
	image: File;
	category?: number;
};

export const uploadImage = async ({ image, category }: Params) => {
	const { data, error } = await supabaseClient.storage
		.from('pictures')
		.upload(category ? `${category}/${image.name}` : image.name, image, {
			upsert: true,
		});

	if (error) throw error;

	const {
		data: { publicUrl },
	} = supabaseClient.storage.from('pictures').getPublicUrl(data.path);

	return publicUrl;
};
