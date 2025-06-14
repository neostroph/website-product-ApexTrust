import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `Is ${siteDetails.siteName} secure?`,
        answer: 'Absolutely. At ApexTrust Bank, we utilize **bank-level encryption** and advanced security protocols to protect your data. Your login information is never stored directly, and we offer **multi-factor authentication** for an added layer of security.',
    },
    {
        question: `Can I access my ${siteDetails.siteName} account on multiple devices?`,
        answer: 'Yes! Your ApexTrust Bank account offers **seamless synchronization** across all your devices, including smartphones, tablets, and computers. Manage your finances anytime, anywhere.',
    },
    {
        question: 'Can I connect other bank accounts to ApexTrust Bank?',
        answer: `Yes! ApexTrust Bank supports secure connections with a wide range of **financial institutions**. Simply log in through our secure portal to link your accounts and view your complete financial picture in one place.`,
    },
    {
        question: 'Do I need prior financial expertise to use ApexTrust Bank\'s investment tools?',
        answer: 'Not at all! Our **user-friendly investment features** are designed to be accessible for everyone. We provide expertly curated portfolios and educational resources to help you make informed decisions, regardless of your experience level.',
    },
    {
        question: 'What kind of support does ApexTrust Bank offer?',
        answer: 'Our **dedicated customer support team** is available to assist you. You can reach us via secure in-app chat, email, or by phone during business hours. We also offer comprehensive **in-app tutorials** and a detailed help center to guide you.',
    }
];