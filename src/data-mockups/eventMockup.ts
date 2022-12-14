import { timeStamp } from "console";
import dayjs from "dayjs";

export const MOCKED_EVENTS = [
	{
		name: "Event 1",
		eventId: 1, // each event needs to have one single guid 
		location: "Salon El Prado",
		// dates: [
    //   // timeStamp('1671811200000')
    // ],
    dates: [
		  dayjs().add(7, 'day').format('DD MMMM YYYY'),
		  dayjs().add(8, 'day').format('DD MMMM YYYY'),
		  dayjs().add(9, 'day').format('DD MMMM YYYY'),
		],
		ticketTypes: [
			{
				name: "Standard",
				quantityLeft: 25,
				price: 5000,
			},
			{
				name: "VIP",
				quantityLeft: 15,
				price: 5000,
			},
			{
				name: "DELUXE",
				quantityLeft: 20,
				price: 5000,
			},
		],
	},
  {
		name: "Event 2",
		location: "Salon El Prado",
		eventId: 2,
		// dates: [
    //   // timeStamp('1671811200000')
    // ],
    dates: [
		  dayjs().add(7, 'day').format('DD MMMM YYYY'),
		  dayjs().add(8, 'day').format('DD MMMM YYYY'),
		  dayjs().add(9, 'day').format('DD MMMM YYYY'),
		],
		ticketTypes: [
			{
				name: "Standard",
				quantityLeft: 25,
				price: 5000,
			},
			{
				name: "VIP",
				quantityLeft: 15,
				price: 5000,
			},
			{
				name: "DELUXE",
				quantityLeft: 20,
				price: 5000,
			},
		],
	},
  {
		name: "Event 3",
		location: "Salon El Prado",
		eventId: 3,
		// dates: [
    //   // timeStamp('1671811200000')
    // ],
    dates: [
		  dayjs().add(7, 'day').format('DD MMMM YYYY'),
		  dayjs().add(8, 'day').format('DD MMMM YYYY'),
		  dayjs().add(9, 'day').format('DD MMMM YYYY'),
		],
		ticketTypes: [
			{
				name: "Standard",
				quantityLeft: 25,
				price: 5000,
			},
			{
				name: "VIP",
				quantityLeft: 15,
				price: 5000,
			},
			{
				name: "DELUXE",
				quantityLeft: 20,
				price: 5000,
			},
		],
	},
  {
		name: "Event 4",
		location: "Salon El Prado",
		eventId: 4,
		// dates: [
    //   // timeStamp('1671811200000')
    // ],
    dates: [
		  dayjs().add(7, 'day').format('DD MMMM YYYY'),
		  dayjs().add(8, 'day').format('DD MMMM YYYY'),
		  dayjs().add(9, 'day').format('DD MMMM YYYY'),
		],
		ticketTypes: [
			{
				name: "Standard",
				quantityLeft: 25,
				price: 5000,
			},
			{
				name: "VIP",
				quantityLeft: 15,
				price: 5000,
			},
			{
				name: "DELUXE",
				quantityLeft: 20,
				price: 5000,
			},
		],
	},
  {
		name: "Event 5",
		location: "Salon El Prado",
		eventId: 5,
		// dates: [
    //   // timeStamp('1671811200000')
    // ],
    dates: [
		  dayjs().add(7, 'day').format('DD MMMM YYYY'),
		  dayjs().add(8, 'day').format('DD MMMM YYYY'),
		  dayjs().add(9, 'day').format('DD MMMM YYYY'),
		],
		ticketTypes: [
			{
				name: "Standard",
				quantityLeft: 25,
				price: 5000,
			},
			{
				name: "VIP",
				quantityLeft: 15,
				price: 5000,
			},
			{
				name: "DELUXE",
				quantityLeft: 20,
				price: 5000,
			},
		],
	},
  {
		name: "Event 6",
		location: "Salon El Prado",
		eventId: 6,
		// dates: [
    //   // timeStamp('1671811200000')
    // ],
    dates: [
		  dayjs().add(7, 'day').format('DD MMMM YYYY'),
		  dayjs().add(8, 'day').format('DD MMMM YYYY'),
		  dayjs().add(9, 'day').format('DD MMMM YYYY'),
		],
		ticketTypes: [
			{
				name: "Standard",
				quantityLeft: 25,
				price: 5000,
			},
			{
				name: "VIP",
				quantityLeft: 15,
				price: 5000,
			},
			{
				name: "DELUXE",
				quantityLeft: 20,
				price: 5000,
			},
		],
	},
];
