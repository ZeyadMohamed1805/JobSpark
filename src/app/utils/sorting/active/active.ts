import { EOrderType } from '../sorting.types';

export const active = (data: Array<any>, order: EOrderType) => {
	return order === EOrderType.ASC
		? data.sort((elementOne, elementTwo) =>
				elementOne.reviewCount / elementOne.applicantCount <
				elementTwo.reviewCount / elementTwo.applicantCount
					? 1
					: -1
		  )
		: data.sort((elementOne, elementTwo) =>
				elementOne.reviewCount / elementOne.applicantCount >
				elementTwo.reviewCount / elementTwo.applicantCount
					? 1
					: -1
		  );
};
