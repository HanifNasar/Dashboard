// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

// Recent Card Imports
import img1 from "../imgs/profile.png";
import img2 from "../imgs/profile.png";
import img3 from "../imgs/profile.png";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Orders",
  },
  {
    icon: UilUsersAlt,
    heading: "Customers",
  },
  {
    icon: UilPackage,
    heading: 'Products'
  }
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Sales",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 60,
    value: "35,750",
    png: UilUsdSquare,
    series: [
      {
        name: "Sales",
        data: [25, 30, 18, 81, 72, 120, 180],
      },
    ],
  },
  {
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 70,
    value: "24,320",
    png: UilMoneyWithdrawal,
    series: [
      {
        name: "Revenue",
        data: [20, 110, 60, 80, 90, 40, 50],
      },
    ],
  },
  {
    title: "Expenses",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 50,
    value: "5,350",
    png: UilClipboardAlt,
    series: [
      {
        name: "Expenses",
        data: [20, 35, 25, 40, 22, 25, 30],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "John",
    noti: "has received Samsung gadget for charging battery.",
    
    time: "5 seconds ago",
  },
  {
    img: img2,
    name: "Alex",
    noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
    time: "10 minutes ago",
  },
  {
    img: img3,
    name: "Park",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "1 hours ago",
  },
  {
    img: img3,
    name: "Hanif",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "1 hours ago",
  },
  {
    img: img3,
    name: "Abdul",
    noti: "has ordered Apple smart watch 2500mh battery.",
    time: "1 hours ago",
  },
];
