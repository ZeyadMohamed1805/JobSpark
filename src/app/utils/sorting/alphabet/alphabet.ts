import { EOrderType } from '../sorting.types';

export const alphabet = (data: Array<any>, order: EOrderType) => {
	return order === EOrderType.ASC
		? data.sort((elementOne, elementTwo) =>
				elementOne.title > elementTwo.title ? 1 : -1
		  )
		: data.sort((elementOne, elementTwo) =>
				elementOne.title < elementTwo.title ? 1 : -1
		  );
};
