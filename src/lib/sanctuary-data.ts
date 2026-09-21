import elephant from "@/assets/resident-elephant.jpg";
import tiger from "@/assets/resident-tiger.jpg";
import bear from "@/assets/resident-bear.jpg";
import peacock from "@/assets/resident-peacock.jpg";

export const residents = [
  {
    name: "Asha",
    species: "Asian elephant",
    image: elephant,
    bio: "A patient matriarch who arrived after years in captivity. She now spends her days foraging and bathing with her herd.",
  },
  {
    name: "Sheru",
    species: "Bengal tiger",
    image: tiger,
    bio: "Confident and observant, Sheru enjoys shaded grasslands, scent trails, and long afternoon naps near the water.",
  },
  {
    name: "Baloo",
    species: "Sloth bear",
    image: bear,
    bio: "Curious Baloo is a gifted forager. His keepers create daily puzzles that encourage his natural digging instincts.",
  },
  {
    name: "Neel",
    species: "Indian peafowl",
    image: peacock,
    bio: "Neel is one of many native birds thriving here, often spotted displaying along the quiet edge of the forest.",
  },
] as const;

export const events = [
  { date: "12 OCT", type: "Conservation talk", title: "Living alongside elephants", time: "10:30 AM", text: "Meet our field team and learn how wildlife corridors keep herds and neighboring communities safe." },
  { date: "26 OCT", type: "Family day", title: "Wild tracks & signs", time: "9:00 AM", text: "A guided morning walk for young naturalists, followed by a hands-on tracking workshop." },
  { date: "09 NOV", type: "Fundraiser", title: "Under the forest canopy", time: "5:30 PM", text: "An intimate evening of local food, field stories, and support for our new rehabilitation enclosure." },
] as const;

export const navItems = [
  { to: "/about", label: "About" },
  { to: "/animals", label: "Our residents" },
  { to: "/visit", label: "Visit" },
  { to: "/get-involved", label: "Get involved" },
  { to: "/events", label: "Events" },
] as const;