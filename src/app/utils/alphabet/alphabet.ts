import { EOrderType } from './alphabet.types';

export const alphabet = (data: Array<any>, order: EOrderType) => {
	return order === EOrderType.ASC
		? data.sort((elementOne, elementTwo) =>
				elementOne.name > elementTwo.name ? 1 : -1
		  )
		: data.sort((elementOne, elementTwo) =>
				elementOne.name < elementTwo.name ? 1 : -1
		  );
};
