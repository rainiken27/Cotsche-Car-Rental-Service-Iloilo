import {
  vios_br,
  stargazer_w,
  innova_b,
  vios_aj,
  vios_gb,
  wigo_s,
  raize_s,
  mirage_s,
  carry_w,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Vehicles",
    url: "/#vehicles",
  },

 

  {
    id: "2",
    title: "Renter Testimonials",
    url: "/#hero",
  },
];

export const vehicles = [
  {
    id: "0",
    model: "Toyota Vios",
    color: "Blackish Red",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    backgroundImg: vios_br,
    transmission: "Automatic",
    capacity: "4-5",
    drivetrain: "FWD",
    brand: "Toyota",
  },

  {
    id: "1",
    model: "Hyundai Stargazer",
    color: "White",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    backgroundImg: stargazer_w,
    transmission: "Automatic",
    capacity: "7-9",
    drivetrain: "FWD",
    brand: "Hyundai",
  },

  {
    id: "2",
    model: "Toyota Innova",
    color: "Black",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    backgroundImg: innova_b,
    transmission: "Automatic",
    capacity: "7-9",
    drivetrain: "RWD",
    brand: "Toyota",
  },

  {
    id: "3",
    model: "Toyota Vios",
    color: "Alumina Jade",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    backgroundImg: vios_aj,
    transmission: "Automatic",
    capacity: "4-5",
    drivetrain: "FWD",
    brand: "Toyota",
  },

  {
    id: "4",
    model: "Toyota Vios",
    color: "Grayish Blue",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    backgroundImg: vios_gb,
    transmission: "Automatic",
    capacity: "4-5",
    drivetrain: "FWD",
    brand: "Toyota",
  },

  {
    id: "5",
    model: "Toyota Wigo",
    color: "Silver",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    backgroundImg: wigo_s,
    transmission: "Manual",
    capacity: "4",
    drivetrain: "FWD",
    brand: "Toyota",
  },

  {
    id: "6",
    model: "Toyota Raize",
    color: "Silver",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    backgroundImg: raize_s,
    transmission: "Automatic",
    capacity: "4-5",
    drivetrain: "FWD",
    brand: "Toyota",
  },

  {
    id: "7",
    model: "Mitsubishi Mirage",
    color: "Silver",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    backgroundImg: mirage_s,
    transmission: "Automatic",
    capacity: "4-5",
    drivetrain: "FWD",
    brand: "Mitsubishi",
  },

  {
    id: "8",
    model: "Suzuki Utility Carry",
    color: "White",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    backgroundImg: carry_w,
    transmission: "Manual",
    capacity: "16",
    drivetrain: "RWD",
    brand: "Suzuki",
  },
];


export const transmissionOptions = [
  { value: '', title: 'All' },
  { value: 'Manual', title: 'Manual' },
  { value: 'Automatic', title: 'Automatic' },
];

export const capacityOptions = [
  { value: '', title: 'All' },
  { value: '4', title: '4 Seater' },
  { value: '4-5', title: '4-5 Seater' },
  { value: '7-9', title: '7-9 Seater' },
  { value: '16', title: '16 Seater' },
];

export const brandOptions = [
  { value: '', title: 'All' },
  { value: 'Toyota', title: 'Toyota' },
  { value: 'Mitsubishi', title: 'Mitsubishi' },
  { value: 'Suzuki', title: 'Suzuki' },
  { value: 'Hyundai', title: 'Hyundai' },
];
