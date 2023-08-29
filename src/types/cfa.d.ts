export interface ICard {
	id: string;
	user: {
		id: string,
		company: string,
		name: string,
		surname: string,
		middelname: string,
		location: string,
		registry: string,
		beneficial_owner: string
	};
	company: {
		id: string,
		name: string
	};
	count:	number;
	approved: boolean;
	price:	number;
	date_release: Date;
	payment_method: {
		id: string,
		name: string
	};
	subject: string;
	moderated: boolean;
	token: string;
};

export type ListCardType = ICard[]
