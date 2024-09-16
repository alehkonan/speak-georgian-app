import { Button } from '@nextui-org/react';
import {
	type ChangeEvent,
	type ComponentPropsWithRef,
	forwardRef,
	useState,
} from 'react';
import { twJoin } from 'tailwind-merge';
import { getCanAcceptFile } from '../utils/files';

type Props = Omit<
	ComponentPropsWithRef<'input'>,
	'className' | 'type' | 'children' | 'onChange' | 'multiple'
> & {
	label: string;
	onSelectFile: (file?: File) => void;
	selectedFile?: File;
};

export const FileInput = forwardRef<HTMLInputElement, Props>(
	({ label, selectedFile, onSelectFile, accept, ...props }, ref) => {
		const [canDrop, setCanDrop] = useState(false);

		const onChange = (e: ChangeEvent<HTMLInputElement>) => {
			onSelectFile(e.target.files?.item(0) || undefined);
		};

		return (
			<div
				className={twJoin([
					'flex items-center gap-2',
					'rounded-xl border border-dashed p-2',
					canDrop && 'border-black border-2',
				])}
				onDragOver={(e) => {
					e.preventDefault();
					setCanDrop(true);
				}}
				onDrop={(e) => {
					e.preventDefault();
					setCanDrop(false);
					const file = e.dataTransfer.files.item(0);
					if (!getCanAcceptFile(accept, file?.type)) return;
					onSelectFile(file || undefined);
				}}
				onDragLeave={() => setCanDrop(false)}
			>
				<Button as="label" size="lg">
					{label}
					<input
						ref={ref}
						accept={accept}
						className="hidden"
						type="file"
						onChange={onChange}
						{...props}
					/>
				</Button>
				<p>{selectedFile?.name}</p>
			</div>
		);
	},
);

FileInput.displayName = 'FileInput';
