import React from 'react'
import classes from './Card.module.css'
import dayjs from 'dayjs';
import { getNumberWithSpaces } from '../../utils/number';

interface ICardProps {
	username: string;
	subject: string;
	releaseDate: Date;
	price: number;
}

export const Card = ({ username, subject, releaseDate, price }: ICardProps) => {
	const priceWithSpace = getNumberWithSpaces(price);

	return (
		<div className={classes.card}>
			<div className={classes.card_content}>
				<div className={classes.image} />
				<span className='title-h6'>{priceWithSpace} РУБ</span>
				<div className={classes.card_info}>
					<svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
						<path d="M22.5 23.625V21.375C22.5 20.1815 22.0259 19.0369 21.182 18.193C20.3381 17.3491 19.1935 16.875 18 16.875H9C7.80653 16.875 6.66193 17.3491 5.81802 18.193C4.97411 19.0369 4.5 20.1815 4.5 21.375V23.625" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						<path d="M13.5 12.375C15.9853 12.375 18 10.3603 18 7.875C18 5.38972 15.9853 3.375 13.5 3.375C11.0147 3.375 9 5.38972 9 7.875C9 10.3603 11.0147 12.375 13.5 12.375Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
					<span>{username}</span>
				</div>
				<div className={classes.card_info}>
					<svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
						<path d="M3.375 12.375L24.75 2.24998L14.625 23.625L12.375 14.625L3.375 12.375Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
					<span>{subject}</span>
				</div>
				<div className={classes.card_info}>
					<svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
						<path d="M13.5 24.75C19.7132 24.75 24.75 19.7132 24.75 13.5C24.75 7.28678 19.7132 2.24998 13.5 2.24998C7.2868 2.24998 2.25 7.28678 2.25 13.5C2.25 19.7132 7.2868 24.75 13.5 24.75Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
						<path d="M13.5 6.75V13.5L18 15.75" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
					</svg>
					<span>{dayjs(releaseDate).format("hh:mm DD.MM.YYYY")}</span>
				</div>
				<button className={classes.card_btn}>
					<span className='title-h6'>
						Купить
					</span>
				</button>
			</div>
		</div>
	)
}
