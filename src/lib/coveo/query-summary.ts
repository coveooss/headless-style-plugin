import { buildQuerySummary } from '@coveo/headless';
import { searchEngine } from './search-engine';
import { writable } from 'svelte/store';

export const querySummaryController = buildQuerySummary(searchEngine);
export const querySummaryState = writable(querySummaryController.state);
querySummaryController.subscribe(() => querySummaryState.set(querySummaryController.state));
