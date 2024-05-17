import { EOrderType } from '../sorting.types';

export const recent = (data: Array<any>, order: EOrderType) => {
	return order === EOrderType.ASC
		? data.sort((elementOne, elementTwo) =>
				elementOne.date > elementTwo.date ? 1 : -1
		  )
		: data.sort((elementOne, elementTwo) =>
				elementOne.date < elementTwo.date ? 1 : -1
		  );
};
