import {
  Compass, Ticket, Backpack, MapPinned, BedDouble, CalendarDays, Wifi, Phone,
  Users, UtensilsCrossed, LifeBuoy, Laptop,
} from 'lucide-react';
import { IMG } from './images';

export const stats = [
  { value: '2,400+', label: 'Active members worldwide' },
  { value: '38', label: 'Destinations on the map' },
  { value: '120+', label: 'Trips completed' },
  { value: '94%', label: 'Would recommend Orbitfolk' },
];

export const team = [
  { name: 'Elena Vasquez', role: 'Community Lead', bio: 'Elena has spent years helping remote workers find their people — and their rhythm.' },
  { name: 'Marcus Webb', role: 'Destination Curator', bio: 'Marcus scouts every city in person before it makes the list. If it is on the map, he has slept there.' },
  { name: 'Priya Patel', role: 'Operations Manager', bio: 'Priya keeps every trip running smoothly, from airport pickup to farewell dinner.' },
  { name: 'Diego Alvarez', role: 'Head of Product', bio: 'Diego keeps the tooling tight, quiet and wildly easy to use.' },
  { name: 'Hannah Kim', role: 'Community Experience', bio: 'Hannah reads every departure survey and turns it into a better trip for the next cohort.' },
  { name: 'Sam Porter', role: 'Partnerships', bio: 'Sam arranges the perks that count — gyms, cafes, SIM cards and the occasional surf lesson.' },
];

export const voices = [
  { quote: 'The month in Bali reset how I work. I shipped more than any quarter at home — and made friends for life.', name: 'Maya Chen', role: 'Product Designer', company: 'Webflow' },
  { quote: 'Spain gave me a focus I did not know I was missing. The community dinners alone are worth it.', name: 'Tom Butler', role: 'Lead Designer', company: 'Freelance' },
  { quote: 'I arrived knowing no one and left with a plan for the next two years. Lisbon was the turning point.', name: 'Sofia Reyes', role: 'Marketing Consultant', company: 'Webflow' },
];

export const memberStories = [
  { quote: 'Lisbon gave me clarity I did not know I needed. Great people, great setup, zero friction.', name: 'Maya Chen', role: 'Product Designer', company: 'Portugal' },
  { quote: 'One month, one city, zero stress. The community made the move simple.', name: 'Tom Butler', role: 'Lead Designer', company: 'Spain' },
  { quote: 'Great city, great people. Our local host made everything effortless.', name: 'Elena Ruiz', role: 'Marketer', company: 'Netherlands' },
];

export const joinSteps = [
  { icon: Compass, title: 'Browse destinations', text: 'Scroll through upcoming cities. Pick one that fits your season — and your budget.' },
  { icon: Ticket, title: 'Book your ticket', text: 'Secure your spot with a simple booking. Bring your work with you, we handle the rest.' },
  { icon: Backpack, title: 'Prepare for the trip', text: 'Pack your bags. We handle the room, the workspace and the welcome dinner.' },
  { icon: MapPinned, title: 'Pick a city', text: 'Land, meet the group and start your month. It really is that easy.' },
];

export const stayFeatures = [
  { icon: BedDouble, title: 'A room included', text: 'Your bed is ready when you land. No apartment hunting, no deposits.' },
  { icon: CalendarDays, title: 'Weekly community events', text: 'Dinners, skill swaps and weekend trips — the calendar keeps the group close.' },
  { icon: Wifi, title: 'Fast, reliable Wi-Fi', text: 'Every room and workspace is speed-tested before you arrive.' },
  { icon: Phone, title: 'Local help on call', text: 'A local host is one message away, all month long.' },
];

export const communityStats = [
  { value: '1,200+', label: 'Nomads hosted', note: 'People joined an Orbitfolk trip in the last two years.' },
  { value: '18', label: 'Destinations offered', note: 'Cities across Europe, Latin America, Africa and Asia.' },
  { value: '64', label: 'Trips completed', note: 'Every trip ended with new friendships and future plans.' },
];

export const included = [
  { icon: BedDouble, title: 'Private room or shared suite', text: 'Your own room in a shared Orbitfolk apartment — or a suite when you want more space.' },
  { icon: UtensilsCrossed, title: 'Weekly community dinners', text: 'Long tables, home cooking and the best conversations of the week.' },
  { icon: LifeBuoy, title: 'On-ground support', text: 'A local host and our team on call for anything you need.' },
  { icon: Laptop, title: '24/7 coworking access', text: 'Fast, quiet workspaces a short walk from your room.' },
  { icon: Users, title: 'Curated group of members', text: 'Around 25 remote workers per city, selected for balance and good energy.' },
  { icon: MapPinned, title: 'Local orientation tour', text: 'Your first week mapped out: cafes, gyms, groceries and the best coffee in town.' },
];

export const locations = [
  { city: 'Sydney', address: '115 Terrace Rd, Sydney NSW 2000, AU' },
  { city: 'New York', address: '123 Street Ave, New York, NY 10002, USA' },
  { city: 'London', address: '45 Baker Street, London W1U, United Kingdom' },
];

export const contactInfo = {
  email: 'hello@orbitfolk.com',
  phone: '+1 (555) 123-4567',
  hours: 'Monday through Friday, 9am to 5pm',
  office: '115 Terrace Rd, Sydney NSW 2000, AU',
};

export const contactFaqs = [
  { q: 'How fast do you reply?', a: 'We answer every message within one business day. Urgent questions while a trip is running get answered within the hour.' },
  { q: 'Can I change my destination?', a: 'Yes. You can switch your destination up to 30 days before departure. Contact us and we check availability and handle the rest.' },
  { q: 'Do you help with visas?', a: 'We provide guidance and documentation for most destinations. Final approval always depends on your passport and nationality.' },
  { q: 'What if I need support?', a: 'Our team is available by email and phone during business hours. We also run a community chat channel for quick help day to day.' },
  { q: 'Is Orbitfolk right for me?', a: 'If you work remotely and want to see the world with good people, then yes. Browse our trips or reach out with your plans.' },
  { q: 'Do I have to work a specific job?', a: 'No. Freelancers, employees, founders and students on a gap year all travel with us — you just need to be able to work remotely.' },
];

export const detailFaqs = [
  { q: 'What\u2019s included in the price?', a: 'Your room, coworking access, weekly events and on-ground support. Flights and most meals are on you.' },
  { q: 'Can I extend my stay?', a: 'Often, yes — subject to availability. Tell your host two weeks before the end of the month and we will make it work.' },
];

export const aboutFeatures = [
  { img: IMG.room, label: 'Accommodation', title: 'Rooms you can trust before you land', text: 'Every room is visited, vetted and photographed by our team before you book. What you see is where you sleep.' },
  { img: IMG.workspace, label: 'Wi-Fi', title: 'Wi-Fi strong enough for real deadlines', text: 'We test every connection ourselves. If it cannot hold a video call, it does not make the list.' },
  { img: IMG.community, label: 'Events', title: 'Weekly events that turn strangers into friends', text: 'Community dinners, skill swaps and weekend trips — the shared calendar keeps the group close.' },
  { img: IMG.story, label: 'Hosts', title: 'A local host who knows the ground', text: 'Someone local answers your questions, books the tables and shows you the city beyond the guidebook.' },
];

export const stepsToGo = [
  { title: 'Book', text: 'Pick a city and reserve your spot — no deposit drama, no waiting lists.' },
  { title: 'Prepare', text: 'We send the guide: packing, visas, flights and your first week, mapped out.' },
  { title: 'Go', text: 'Land, meet the group and start your best month of work yet.' },
];

export const featuredSlugs = ['lisbon', 'medellin', 'tokyo'];