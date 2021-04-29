import { writable } from 'svelte/store';

export enum Styles {
	tailwind = 'tailwind',
	vapor = 'vapor',
	rainbow = 'rainbow',
	none = 'none'
}

export const style = writable<Styles>(Styles.tailwind);
