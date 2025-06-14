import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "20M+",
        icon: <BsBarChartFill size={34} className="text-blue-500" />,
        description: "Secure transactions processed monthly, ensuring seamless financial operations for our customers."
    },
    {
        title: "5.0",
        icon: <BsFillStarFill size={34} className="text-yellow-500" />,
        description: "Star rating on our mobile app, reflecting consistent customer satisfaction and excellent service."
    },
    {
        title: "500K+", // Increased for a bank's customer base
        icon: <PiGlobeFill size={34} className="text-green-600" />,
        description: "Customers trust ApexTrust Bank with their financial future, nationwide and growing."
    }
];