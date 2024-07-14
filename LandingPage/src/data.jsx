import frenchToast from "./images/frenchToast.jpg";
import eggSalad from "./images/eggSalad.jpg";
import salmon from "./images/salmon.jpg";
import toast from "./images/toast.jpg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#recipes", text: "recipes" },
];

export const socialLinks = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.github.com", icon: "fab fa-github" },
];

export const services = [
  {
    id: 1,
    icon: "fa-solid fa-clipboard",
    title: "Loging",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fa solid fa-calculator",
    title: "scaling",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fa-solid fa-book-open",
    title: "Tracking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    image: frenchToast,
    date: "august 26th, 2020",
    title: "French Toast",
    info: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "american",
    duration: 6,
    category: "Breakfast",
  },
  {
    id: 2,
    image: eggSalad,
    date: "august 26th, 2020",
    title: "Egg Salad",
    info: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "american",
    duration: 6,
    category: "Lunch",
  },
  {
    id: 3,
    image: salmon,
    date: "august 26th, 2020",
    title: "Salmon",
    info: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "french",
    duration: 6,
    category: "Seafood",
  },
  {
    id: 4,
    image: toast,
    date: "august 26th, 2020",
    title: "Avocado Toast",
    info: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    location: "american",
    duration: 6,
    category: "Breakfast",
  },
];
