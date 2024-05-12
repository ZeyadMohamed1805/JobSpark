import { EOrderType } from '../sorting.types';

export const companySize = (data: Array<any>, order: EOrderType) => {
	return order === EOrderType.ASC
		? data.sort((elementOne, elementTwo) =>
				elementOne.company.size > elementTwo.company.size ? 1 : -1
		  )
		: data.sort((elementOne, elementTwo) =>
				elementOne.company.size < elementTwo.company.size ? 1 : -1
		  );
};
