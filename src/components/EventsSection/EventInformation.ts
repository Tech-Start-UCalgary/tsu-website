import Alberta_Tech_Horizon_img from "./EventImages/Alberta_Tech_Horizon.jpeg";
import Building_a_Brand_and_Business_img from "./EventImages/Building_a_Brand_and_Business.jpeg";

export type Event = { title: string, description: string, date: string, time: string, image: any, link: string };

export var upcomingEvents: Event[];
export var pastEvents: Event[];

upcomingEvents = [

];

pastEvents = [
    {
        title: "Alberta's Tech Horizon",
        description: "Alberta’s Tech Horizon is a panel event focused on the past, present and future of the technology industry in Alberta. Our panelists are Laura Buhler (Executive Director of the C100), Kelly Cherniwchan (CEO and Founder of Chata Technologies), Jay Gohill (President and CEO of Arcurve), and Kris Read (Co-Founder and Head of Engineering at Neo Financial). We hope to see you there!",
        date: "Thu, May 13, 2021",
        time: "7:30 PM – 8:45 PM MDT",
        image: Alberta_Tech_Horizon_img,
        link: "https://www.eventbrite.ca/e/albertas-tech-horizon-tickets-149515875007"
    },

    {
        title: "Building a Brand and Business",
        description: "As part of the Hunter Hub's Tech Bytes event, we collaborated with entrepreneur Judy Hughes to host a webinar on building a brand and a business. Judy walked us through her experiences with founding her own company, JYZ Design, and discussed how companies can stand out from their competitors.",
        date: "",
        time: "",
        image: Building_a_Brand_and_Business_img,
        link: ""
    }
];