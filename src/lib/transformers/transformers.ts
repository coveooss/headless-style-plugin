export interface StyleState {
	class: string;
}

export interface AttributeState {
	attributes: Record<string, string>;
}

export interface EventState {
	events: Record<string, (event: Event) => void>;
}

export type TransformerFactory<T, U extends T> = (config: {
	mapper: ClassMapper;
}) => (initialState: T) => U;

export type ClassMapper = (...values: Array<string | boolean | undefined>) => string;
