import { FaBagShopping, FaDice, FaHouse, FaStore, FaTelegram, FaWallet } from "react-icons/fa6";

export const sidebarLinks = [
    {
        id: "80250",
        title: "Dashboard",
        link: "/",
        icon: <FaHouse />,
    },
    {
        id: "80251",
        title: "wallet",
        link: "/wallet",
        icon: <FaWallet />,
    },
    {
        id: "80252",
        title: "Product",
        link: "/Product",
        icon: <FaBagShopping />,
    },
    {
        id: "80253",
        title: "Categories",
        link: "/category",
        icon: <FaDice />,
    },
    {
        id: "80254",
        title: "Transaction",
        link: "/transaction",
        icon: <FaStore />,
    },
    {
        id: "80255",
        title: "Shipment",
        link: "/shipment",
        icon: <FaTelegram />,
    },
]
