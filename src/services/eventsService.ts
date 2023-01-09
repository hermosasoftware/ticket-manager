import { collection, doc, getDoc, addDoc, getDocs } from "@firebase/firestore";
import { db } from "./firebaseService";
import dayjs from "dayjs";
import { async } from "@firebase/util";
import { MOCKED_EVENTS } from "../data-mockups/eventMockup";

const eventsCollectionRef = collection(db, "events");

export const getEvents = async () => {
	// please uncomment this snippet when the service is working properly
	// const data = await getDocs(eventsCollectionRef);
	// return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
	return MOCKED_EVENTS
};


export const postEvents = async () => {
	await addDoc(collection(db, "events"), {
		name: "Secrets Event",
		location: "Salon El Prado",
		// TODO: Search for compatible date format
		// dates: [
		//   dayjs().add(7, 'day'),
		//   dayjs().add(8, 'day'),
		//   dayjs().add(9, 'day'),
		// ],
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
	});
};
