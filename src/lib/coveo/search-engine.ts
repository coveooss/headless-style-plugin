import { HeadlessEngine, searchAppReducers } from '@coveo/headless';

export const searchEngine = new HeadlessEngine({
	configuration: HeadlessEngine.getSampleConfiguration(),
	reducers: searchAppReducers
});
