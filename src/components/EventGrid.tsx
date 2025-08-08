import Link from "next/link";
import React from "react";

const cards = [
  {
    title: "Book Launch",
    button: "Purchase Now",
    image: "/images/event_1.png", // Replace with actual image path
    buttonType: "primary",
    link: "https://selar.co/6w6a60",
    show: true,
  },
  {
    title: "Evolve Her(2025)",
    button: "Learn More →",
    image: "/images/evolve_6.jpg",
    link: "#evolve",
    buttonType: "link",
    show: true,
  },
  {
    title: "TPWT Book Club",
    button: "Learn More →",
    image: "/images/img_1.png",
    buttonType: "link",
    link: "#book",
    show: true,
  },
  {
    title: "The Millionare Realtor",
    button: "Purchase Now",
    image: "/images/book_1.png",
    buttonType: "primary",
    link: "https://selar.co/8mn027",
    show: true,
  },
  {
    title: "Mentorship Lab",
    button: "Learn More →",
    image: "/images/event_5.png",
    buttonType: "link",
    show: true,
    link: "https://surveyheart.com/form/68908ac9c0a0d470f46f34f0",
  },
];

export default function EventGrid() {
  return (
    <div className="px-4 py-6 lg:py-12 w-full">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[90%] mx-auto">
        {cards.map((card, i) => (
          <div
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="700"
            data-aos-anchor-placement="top-bottom"
            key={i}
            className={`relative ${
              i === 1 && "lg:row-span-2 h-50 lg:h-full"
            } overflow-hidden w-[100%] rounded-xl h-50 flex flex-col justify-end p-6 ${
              card.image ? `bg-cover bg-center bg-no-repeat` : ``
            }`}
            style={card.image ? { backgroundImage: `url(${card.image})` } : {}}
          >
            {card.show && (
              <div
                style={{
                  background:
                    "linear-gradient(0deg, #1E0833 6.58%, rgba(169, 154, 154, 0) 89.6%) ",
                }}
                className="absolute inset-0  z-0"
              />
            )}

            <div className="relative z-10 text-white">
              <h3 className="text-white text-base">{card.title}</h3>
              <Link
                href={card.link}
                className={`mt-2 inline-block cursor-pointer text-sm font-medium transition ${
                  card.buttonType === "primary"
                    ? "flex items-center gap-1.5 text-purple-700 bg-white py-1.5 px-2 cursor-pointer text-xs"
                    : "flex items-center gap-1.5 text-white  cursor-pointer text-xs"
                }`}
              >
                {card.button}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
