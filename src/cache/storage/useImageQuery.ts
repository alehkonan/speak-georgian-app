import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { uploadImage } from 'src/api/storage/uploadImage';

export const useUploadImage = () => {
	return useMutation({
		mutationFn: uploadImage,
		onSuccess: (_, { image }) => {
			toast.success(`${image.name} has been uploaded to storage`);
		},
	});
};
