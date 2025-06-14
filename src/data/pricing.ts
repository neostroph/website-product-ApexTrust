import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'ApexTrust Essential',
        price: 0, // Often no monthly fee if certain conditions are met, or a low fee
        features: [
            'No monthly maintenance fee (with qualifying direct deposit)',
            'Free online & mobile banking',
            'Standard debit card',
            'Unlimited ATM access (ApexTrust network)',
            'Email & chat support',
        ],
    },
    {
        name: 'ApexTrust Preferred',
        price: 15, // Example monthly fee, could be waived with higher balance
        features: [
            'Waived monthly maintenance fee (with higher minimum balance)',
            'Advanced online & mobile banking features',
            'Premium debit card benefits',
            'Extended ATM network access',
            'Priority phone & dedicated chat support',
            'Personalized financial insights',
        ],
    },
    {
        name: 'ApexTrust Premier',
        price: 'Custom', // Or a higher monthly fee, often tied to wealth management
        features: [
            'Dedicated Relationship Manager',
            'Exclusive wealth management services',
            'High-yield savings options',
            'No foreign transaction fees on debit card',
            '24/7 dedicated phone support',
            'Access to financial planning workshops',
        ],
    },
]