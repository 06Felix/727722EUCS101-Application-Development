import 'boxicons/css/boxicons.min.css';
import dashIcon from "../assets/icons/dashboard.svg";
import feesIcon from "../assets/icons/fees.svg";
import inquiryIcon from "../assets/icons/inquiry.svg";
import laptopIcon from "../assets/icons/laptop.svg";
import userIcon from "../assets/icons/user.svg";

const sidebar_menu = [
    {
        id: 1,
        icon: dashIcon,
        path: '/dashboard',
        title: 'Home',
    },
    {
        id: 2,
        icon: laptopIcon,
        path: '/dashboard/courses',
        title: 'Courses',
    },
    {
        id: 3,
        icon: feesIcon,
        path: '/dashboard/fees',
        title: 'Fees',
    },
    {
        id: 4,
        icon: inquiryIcon,
        path: '/dashboard/inquiries',
        title: 'Inquiries',
    },
    {
        id: 5,
        icon: userIcon,
        path: '/dashboard/profile',
        title: 'My account',
    }
];

export default sidebar_menu;
