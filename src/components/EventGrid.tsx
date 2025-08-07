import React from "react";

const cards = [
  {
    title: "Book Launch",
    button: "Purchase Now",
    image: "/images/event_1.png", // Replace with actual image path
    buttonType: "primary",
    show: true,
  },
  {
    title: "Evolve Her(2025)",
    button: "Learn More →",
    image: "/images/event_2.png",
    buttonType: "link",
    show: true,
  },
  {
    title: "TPWT Book Club",
    button: "Learn More →",
    image: "/images/event_3.png",
    buttonType: "link",
    show: false,
  },
  {
    title: "The Millionare Realtor",
   button: "Purchase Now",
    image: "/images/event_4.png",
    buttonType: "primary",
    show: false,
  },
  {
    title: "Mentorship Lab",
    button: "Learn More →",
    image: "/images/event_5.png",
    buttonType: "link",
    show: true,
  },
];

export default function EventGrid() {
  return (
    <div className="px-4 py-6 lg:py-12 w-full">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[90%] mx-auto">
        {cards.map((card, i) => (
          <div
                   data-aos="zoom-in"
      data-aos-easing="linear"
      data-aos-duration="1500"
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
              <button
                className={`mt-2 inline-block text-sm font-medium transition ${
                  card.buttonType === "primary"
                    ? "flex items-center gap-1.5 text-purple-700 bg-white py-1.5 px-2 cursor-pointer text-xs"
                    : "flex items-center gap-1.5 text-white  cursor-pointer text-xs"
                }`}
              >
                {card.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
