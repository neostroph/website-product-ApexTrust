import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
    {
        name: 'Michael Chen',
        role: 'Small Business Owner', // Changed role to be more relevant to banking
        message: `${siteDetails.siteName} has been instrumental in managing my business finances. Their seamless online banking and dedicated support have truly simplified my operations. Highly recommend!`,
        avatar: '/images/testimonial-1.webp',
    },
    {
        name: 'Sarah Miller',
        role: 'Financial Analyst', // Changed role to be more relevant to banking
        message: `As a financial analyst, I appreciate ${siteDetails.siteName}'s robust security measures and clear financial insights. It's a reliable platform that I trust with my personal investments.`,
        avatar: '/images/testimonial-2.webp',
    },
    {
        name: 'David Rodriguez',
        role: 'Family Budget Manager', // Changed role to be more relevant to banking
        message: `Managing our family budget felt overwhelming until we switched to ${siteDetails.siteName}. Their intuitive tools and responsive customer service make saving and planning effortless.`,
        avatar: '/images/testimonial-3.webp',
    },
];