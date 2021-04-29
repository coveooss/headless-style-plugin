import { Result, ResultTemplatesHelpers } from '@coveo/headless';
import { fileTypeIcons } from './file-type-icons';
import { objectTypeIcons } from './object-type-icons';

export const getDefaultIcon = (result: Result) => {
	const fileTypeValue = ResultTemplatesHelpers.getResultProperty(result, 'filetype') as string;
	const objectTypeValue = ResultTemplatesHelpers.getResultProperty(result, 'objecttype') as string;

	const fileType = fileTypeIcons[fileTypeValue?.toLowerCase()];
	const objectType = objectTypeIcons[objectTypeValue?.toLowerCase()];
	return objectType || fileType || 'custom';
};

export const getDefaultIconPath = (result: Result) =>
	`https://staticdev.cloud.coveo.com/atomic/latest/assets/${getDefaultIcon(result)}.svg`;
