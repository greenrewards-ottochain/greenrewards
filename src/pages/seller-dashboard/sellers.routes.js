import home from "../../assets/home.png";
import dashboard from "../../assets/dashboard.png";
import add from "../../assets/add.png";
import marketplace from "../../assets/marketplace.png";
import notification from "../../assets/notification.png";
import transaction from "../../assets/transaction.png";
import { CiChat1 } from "react-icons/ci";

export const sideBarLinks = [
  {
    path: "/",
    icon: <img src={home} alt=''/>,
    text: "Home",
    alt: "home",
  },
  {
    path: "/seller/dashboard",
    icon: <img src={dashboard} alt=''/>,
    text: "Dashboard",
    alt: "dashboard",
  },

  {
    path: "/seller/chat",
    icon: <CiChat1/>,
    text: "Chat",
    alt: "chat",
  },

  {
    path: "/seller/addproduct",
    icon: <img src={add} alt=''/>,
    text: "Add product",
    alt: "add",
  },
  {
    path: "/market-place",
    icon: <img src={marketplace} alt=''/>,
    text: "Marketplace",
    alt: "marketplace",
  },
  
  {
    path: "/seller/notification",
    icon: <img src={notification} alt="notification" />,
    text: "Notifications",
    alt: "notification",
  },
  {
    path: "/seller/transaction",
    icon: <img src={transaction} alt="" />,
    text: "Transactions",
    alt: "transaction",
  },
];