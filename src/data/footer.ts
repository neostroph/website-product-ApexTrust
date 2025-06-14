import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Your trusted partner in building a secure and prosperous financial future. ApexTrust Bank is committed to your success.",
    quickLinks: [
        {
            text: "Personal Banking",
            url: "#personal-banking" // Changed to reflect banking services
        },
        {
            text: "Business Accounts",
            url: "#business-accounts" // Added a common banking service
        },
        {
            text: "Security",
            url: "#security" // Highlights the bank's commitment to security
        },
        {
            text: "Support",
            url: "#support" // Link to customer support
        }
    ],
    email: 'support@apextrustbank.com', // Updated to a bank-specific email
    telephone: '+1 (800) 555-APEX', // Updated to a bank-friendly toll-free number
    socials: {
        twitter: 'https://twitter.com/ApexTrustBank', // Updated to a bank-specific Twitter handle
        facebook: 'https://facebook.com/ApexTrustBank', // Updated to a bank-specific Facebook page
        linkedin: 'https://www.linkedin.com/company/apextrustbank', // Updated to a bank-specific LinkedIn page
        instagram: 'https://www.instagram.com/ApexTrustBank', // Updated to a bank-specific Instagram handle
    }
}