import React from 'react';

import { HomeBlogSection } from '@/components/home/home-blog-section';
import { HomeCTA } from '@/components/home/home-cta';
import { HomeOurNetwork } from '@/components/home/home-our-network';
import { HomeHeroParallax } from '@/components/home/home-hero-parallax';
import { HomeAboutSection } from '@/components/home/home-about-section';

export default function Home() {
  const products = [
    {
      title: "Brotherhood Events",
      link: "#",
      thumbnail: "/20240217_185908_709DFE.jpeg"
    },
    {
      title: "Community Gathering",
      link: "#",
      thumbnail: "/20240217_185909_729EA7.jpeg"
    },
    {
      title: "Spring Social",
      link: "#",
      thumbnail: "/20240428_211420_7565D5.jpeg"
    },
    {
      title: "Summer Workshop",
      link: "#",
      thumbnail: "/20240827_174150_7A6F7D.jpeg"
    },
    {
      title: "Engineering Lab",
      link: "#",
      thumbnail: "/20240828_105839_71B492.jpeg"
    },
    {
      title: "Technical Workshop",
      link: "#",
      thumbnail: "/20240828_112338_74F3CE.jpeg"
    },
    {
      title: "Community Service",
      link: "#",
      thumbnail: "/20240908_150702_701104.jpeg"
    },
    {
      title: "Volunteer Work",
      link: "#",
      thumbnail: "/20240908_153036_7DEC2C.jpeg"
    },
    {
      title: "Team Building",
      link: "#",
      thumbnail: "/20240908_155357_72477F.jpeg"
    },
    {
      title: "Evening Social",
      link: "#",
      thumbnail: "/20240908_204437_752C9A.jpeg"
    },
    {
      title: "Study Session",
      link: "#",
      thumbnail: "/20240910_215141_750658.jpeg"
    },
    {
      title: "Professional Development",
      link: "#",
      thumbnail: "/20241013_152243_70FCCD.jpeg"
    },
    {
      title: "Leadership Workshop",
      link: "#",
      thumbnail: "/20241027_172514_7FF17F.jpeg"
    },
    {
      title: "Chapter Meeting",
      link: "#",
      thumbnail: "/20241028_205300_70BC9E.jpeg"
    },
    {
      title: "Engineering Excellence",
      link: "#",
      thumbnail: "/IMG_3469-2-1024x703.jpg"
    }
  ];

  const content = [
    {
      title: "Social",
      description:
        "Connect with fellow engineers who share your passion and drive. Build meaningful relationships through social events, networking opportunities, and collaborative projects that enhance both your personal and professional growth.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white relative">
          <img src="/20240428_211420_7565D5.jpeg" alt="Social" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      ),
    },
    {
      title: "Philanthropy and Service",
      description:
        "Engage in impactful community service projects and philanthropic initiatives. Through organized events and volunteer opportunities, we work together to create positive change in our local communities and beyond.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white relative">
          <img src="/20240908_155357_72477F.jpeg" alt="Philanthropy and Service" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      ),
    },
    {
      title: "Academic Support",
      description:
        "Access a strong network of peer support and academic resources. Benefit from study groups, tutoring sessions, and shared expertise to excel in your engineering coursework and technical development.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white relative">
          <img src="/20241013_152243_70FCCD.jpeg" alt="Academic Support" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      ),
    },
    {
      title: "Professional Development",
      description:
        "Advance your career through industry connections, technical workshops, and leadership opportunities. Gain practical experience and develop essential skills that prepare you for success in the engineering field.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white relative">
          <img src="/20241027_172514_7FF17F.jpeg" alt="Professional Development" className="absolute inset-0 w-full h-full object-cover" />
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HomeHeroParallax products={products} />

      {/* About Section */}
      <HomeAboutSection content={content} />

      {/* Blog Section */}
      <HomeBlogSection />

      {/* Alumni Section */}
      <HomeOurNetwork />

      {/* Bottom CTA */}
      <HomeCTA />
    </div>
  );
}
