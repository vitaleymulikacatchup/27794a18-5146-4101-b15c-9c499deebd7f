"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroLogoBillboardSplitImage from '@/components/sections/hero/HeroLogoBillboardSplitImage';
import ParallaxAbout from '@/components/sections/about/ParallaxAbout';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import TestimonialCardNine from '@/components/sections/testimonial/TestimonialCardNine';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterMedia from '@/components/sections/footer/FooterMedia';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="small"
      sizing="large"
      background="aurora"
      cardStyle="spotlight"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          brandName="Santa"
          button={{
            text: "Reserve a Table",
            href: "#contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboardSplitImage
          logoText="SANTA"
          description="Experience culinary excellence in an elegant setting. Santa brings together authentic Italian cuisine, impeccable service, and a welcoming atmosphere perfect for every occasion."
          buttons={[
            {
              text: "Reserve Now",
              href: "#contact"
            },
            {
              text: "View Menu",
              href: "#menu"
            }
          ]}
          layoutOrder="default"
          splitImageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765810985310-lfrtmyex.jpg"
          splitImageAlt="Elegant Santa restaurant dining room"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765810985310-lfrtmyex.jpg"
          imageAlt="Fine dining restaurant ambiance"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <ParallaxAbout
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765810989917-dzs36xwx.jpg"
          imageAlt="Professional chef cooking in kitchen"
          buttons={[
            {
              text: "Discover More",
              href: "#menu"
            }
          ]}
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardFour
          title="Featured Dishes"
          description="Discover our most celebrated creations, handcrafted with the finest ingredients"
          products={[
            {
              id: "pasta-carbonara",
              name: "Pasta Carbonara",
              price: "$28",
              variant: "Classic Italian Recipe",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765810986511-v8xswio8.jpg",
              imageAlt: "Pasta Carbonara"
            },
            {
              id: "ribeye-steak",
              name: "Ribeye Steak",
              price: "$52",
              variant: "Prime Cut, Perfectly Seared",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765810987640-bwtx1rxp.jpg",
              imageAlt: "Ribeye Steak"
            },
            {
              id: "seafood-risotto",
              name: "Seafood Risotto",
              price: "$42",
              variant: "Fresh Catch of the Day",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765810988869-7g0wj169.jpg",
              imageAlt: "Seafood Risotto"
            }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          containerStyle="default"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardNine
          title="Our Portfolio Companies"
          description="Meet the innovative brands and startups we've partnered with and helped grow"
          testimonials={[
            {
              id: "1",
              quote: "Santa has become our favorite restaurant. The food is absolutely exceptional and the staff makes you feel like family. Every visit is truly memorable.",
              name: "Marco Rossi",
              role: "Regular Guest",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765810992355-358u3qkb.jpg",
              imageAlt: "Marco Rossi"
            },
            {
              id: "2",
              quote: "We celebrated our anniversary at Santa and it was perfect. The ambiance, the service, and especially the food were outstanding. Highly recommend!",
              name: "Elena Marino",
              role: "Anniversary Celebration",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765810993664-h6i7u6sh.jpg",
              imageAlt: "Elena Marino"
            },
            {
              id: "3",
              quote: "The Italian cuisine here is authentic and beautifully presented. Every dish tells a story. This is fine dining done right.",
              name: "Giovanni & Sophie",
              role: "Food Enthusiasts",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765810994695-irpsp29d.jpg",
              imageAlt: "Giovanni & Sophie"
            },
            {
              id: "4",
              quote: "I've dined at many restaurants, but Santa stands out. The attention to detail and passion for excellence is evident in everything they do.",
              name: "David Chen",
              role: "Restaurant Critic",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765810995491-q49uvoyh.jpg",
              imageAlt: "David Chen"
            }
          ]}
          variant="card"
          textboxLayout="default"
          useInvertedBackground="noInvert"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about dining at Santa"
          faqs={[
            {
              id: "1",
              title: "How far in advance should I make a reservation?",
              content: "We recommend making reservations at least 1-2 weeks in advance for weekends and special occasions. Walk-ins are welcome based on availability, especially on weekdays."
            },
            {
              id: "2",
              title: "Do you accommodate dietary restrictions?",
              content: "Absolutely! We are happy to accommodate vegetarian, vegan, gluten-free, and other dietary requirements. Please mention any restrictions when making your reservation or inform your server upon arrival."
            },
            {
              id: "3",
              title: "What is your dress code?",
              content: "We recommend smart casual to business casual attire. Jackets are not required but are appreciated for special occasions. Please avoid athletic wear and flip-flops."
            },
            {
              id: "4",
              title: "Do you offer private dining?",
              content: "Yes, we have private dining spaces available for groups of 8 or more. Please contact us directly at info@santa-restaurant.com for inquiries about private events."
            },
            {
              id: "5",
              title: "What are your hours of operation?",
              content: "Monday to Thursday: 5:00 PM - 11:00 PM, Friday to Saturday: 5:00 PM - 12:00 AM, Sunday: 5:00 PM - 10:00 PM. We are closed on major holidays."
            },
            {
              id: "6",
              title: "Do you offer takeout or delivery?",
              content: "We primarily operate as a dine-in establishment to ensure the best culinary experience. For special requests, please contact us directly."
            }
          ]}
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Reserve Your Table"
          description="Join us for an unforgettable culinary experience. Fill out the form below and we'll confirm your reservation shortly."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: true
            },
            {
              name: "date",
              type: "date",
              placeholder: "Preferred Date",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Special requests or dietary restrictions?",
            rows: 4,
            required: false
          }}
          useInvertedBackground="noInvert"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765810996630-4z7gkrtm.jpg"
          imageAlt="Santa restaurant table setting"
          mediaPosition="right"
          buttonText="Reserve Table"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_34yEatLQt6B9A82mZgfqKsKaLO9/uploaded-1765810997982-zen4gfxw.jpg"
          imageAlt="Santa restaurant evening exterior"
          logoText="Santa"
          copyrightText="© 2025 Santa Restaurant. All rights reserved."
          columns={[
            {
              title: "Hours",
              items: [
                {
                  label: "Monday - Thursday: 5:00 PM - 11:00 PM"
                },
                {
                  label: "Friday - Saturday: 5:00 PM - 12:00 AM"
                },
                {
                  label: "Sunday: 5:00 PM - 10:00 PM"
                }
              ]
            },
            {
              title: "Contact",
              items: [
                {
                  label: "Phone: (555) 123-4567"
                },
                {
                  label: "Email: info@santa-restaurant.com"
                },
                {
                  label: "123 Culinary Lane, Downtown"
                }
              ]
            },
            {
              title: "About",
              items: [
                {
                  label: "Our Story",
                  href: "#about"
                },
                {
                  label: "Reservations",
                  href: "#contact"
                },
                {
                  label: "Privacy Policy",
                  href: "#"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}