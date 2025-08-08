import React from "react";

export default function SponsorBox() {
  const boxes = [
    {
      head: "Impact Partner",
      small: "₦5M+ / $5,000+",
      icon: "💎",
      content: [
        "Prominent visibility across campaigns and media",
        "Keynote speaker at Evolve Her Conference",
        "Legacy Sponsor of Book Club/Mentorship",
      ],
      colorHead: "#2E005F", // deep royal purple
      colorSmall: "#4B0D8F", // medium vivid purple
      colorBg: "#F5E9FF",
      id: 1,
    },
    {
      head: "Book Sponsorship Patron",
      small: "₦1M-₦3M / $1,000-$3,000",
      icon: "📚",
      content: [
        "Funds wide book distribution and gets credit in copies",
        "Keynote speaker at Evolve Her Conference",
        "Supports school and prison reading events",
      ],
      colorHead: "#800033", // deep dark pink / burgundy
      colorSmall: "#B3004D", // medium vivid pink
      colorBg: "#FFE6F0",
      id: 2,
    },
    {
      head: "Program Sponsor",
      small: "₦2M-₦4.5M / $2,000-$4,500",
      icon: "🤝",
      content: [
        "Sponsors a focus area (e.g., finance, marriage, mental health)",
        "Brand featured in all program-related promotions",
        "Receive visibility across themed sessions and content",
      ],
      colorHead: "#000000", // dark gray for strong contrast
      colorSmall: "#000000", // medium gray for softer text
      colorBg: "#FFFFFF", // pure white background

      id: 3,
    },
    {
      head: "In-Kind or Value-Added Sponsors",
      small: "",
      icon: "🤝",
      content: [
        "Receive exposure matching the value of their contributions",
        "Contribute venues, equipment, books, or support services",
        "Get Listed as sponsors at all relevant events and platforms",
      ],
      colorHead: "#000000", // dark gray for strong contrast
      colorSmall: "#000000", // medium gray for softer text
      colorBg: "#FFFFFF", // pure white background
      id: 4,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sofia-medium gap-4 ">
      {boxes.map((box) => (
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
          data-aos-anchor-placement="top-bottom"
          style={{
            background: box.colorBg,
            borderRadius: "10px",
          }}
          className={`p-4 shadow-2xl shadow-black/20 `}
          key={box.head}
        >
          <div className="flex items-center rounded-lg gap-2">
            <div className="text-3xl">{box.icon}</div>
            <div className="space-y-1">
              <h6
                style={{
                  color: box.colorHead,
                }}
                className={`text-[${box.colorHead}] text-cente text-sm`}
              >
                {box.head}
              </h6>
              <p
                style={{
                  color: box.colorSmall,
                }}
                className={`text-[${box.colorSmall}] text-center sofia-light text-xs `}
              >
                {box.small}
              </p>
            </div>
          </div>

          <div className={`flex sofia-light pt-2 flex-col gap-1.5 items-center justify-center text-xs text-black`}>
            {box.content.map((p) => (
              <p className="text-center" key={p}>
                {p}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
