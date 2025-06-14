import { FiBarChart2, FiBriefcase, FiDollarSign, FiLock, FiPieChart, FiShield, FiTarget, FiTrendingUp, FiUser } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Smart Personal Banking",
        description: "Manage your everyday finances with ease. ApexTrust Bank offers intuitive tools and services designed to simplify your financial life and help you grow.",
        bullets: [
            {
                title: "Comprehensive Account Access",
                description: "View all your accounts, transactions, and statements in one secure place.",
                icon: <FiBarChart2 size={26} /> // Keeping the original icon for now
            },
            {
                title: "Personalized Financial Insights",
                description: "Receive tailored advice and spending analysis to optimize your money.",
                icon: <FiTarget size={26} /> // Keeping the original icon for now
            },
            {
                title: "Seamless Bill Pay & Transfers",
                description: "Effortlessly pay bills and transfer funds securely within the app.",
                icon: <FiTrendingUp size={26} /> // Keeping the original icon for now
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
    {
        title: "Secure & Growth-Oriented Savings",
        description: "Build your future with ApexTrust Bank's competitive savings accounts and investment options, designed for steady wealth accumulation.",
        bullets: [
            {
                title: "High-Yield Savings Accounts",
                description: "Watch your money grow faster with attractive interest rates.",
                icon: <FiDollarSign size={26} />
            },
            {
                title: "Diversified Investment Portfolios",
                description: "Explore curated investment strategies tailored to your financial goals.",
                icon: <FiBriefcase size={26} />
            },
            {
                title: "Goal-Based Saving Tools",
                description: "Set and achieve your financial milestones, from a new home to retirement.",
                icon: <FiPieChart size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.webp"
    },
    {
        title: "Unwavering Security & Support",
        description: "Your peace of mind is our priority. ApexTrust Bank employs industry-leading security measures to protect your assets and data.",
        bullets: [
            {
                title: "Advanced Data Encryption",
                description: "Your personal and financial information is safeguarded with robust encryption.",
                icon: <FiLock size={26} />
            },
            {
                title: "Multi-Factor Authentication",
                description: "Secure your account with enhanced login verification options.",
                icon: <FiUser size={26} />
            },
            {
                title: "24/7 Fraud Monitoring",
                description: "Our systems actively protect you by detecting and preventing suspicious activities.",
                icon: <FiShield size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp" // Keeping the original image path
    },
]