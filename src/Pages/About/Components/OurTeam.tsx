const teamMembers = [
  {
    img: "./t1.png",
    name: "Uwe",
    highlight: "Placzek",
    title: "CEO",
    subTitle: "> Expansion",
    description:
      "Uwe is an innovation and product development expert, seasoned manager and serial entrepreneur. He created and managed Europe's largest digital music platform and the first pan-European movie streaming service – thereby actively driving the digital transformation of two entire industries. Uwe holds a University degree in Design & Development and held senior positions in Engineering, Telecom, IT and Digital Media.",
  },
  {
    img: "./t2.png",
    name: "Kurt",
    highlight: "Moser",
    title: "CHAIRMAN",
    subTitle: "",
    description:
      "As an active private equity Investor, Kurt sits on the board of various private companies, some of which he has helped to incorporate as a founding member. In his career he has held several senior positions in the banking, financial information, and software industry, and he has lived and worked in the major global financial centres. Prior to his retirement he held the position of Chief Operating Officer of a global division of one of the world’s largest Fintech Companies.",
  },
  {
    img: "./t3.png",
    name: "Leslie",
    highlight: "Golding",
    title: "CEO UK",
    subTitle: "",
    description:
      "Leslie co-founded Acetrax and has worked with major studios and manufacturers like Samsung and LG, disrupting traditional business models with digital solutions.",
  },
  {
    name: "Darren",
    highlight: "Zimmer",
    title: "CPO",
    subTitle: "> Product",
    img: "./t4.png",
    description:
      "Darren was a key member of the team that delivered Europe’s first movie streaming platform Acetrax as well as over 5 years management experience at Sky both in the UK and Europe. He is single mindedly focused on the customer and solving problems with innovative but easy to use solutions.",
  },
  {
    name: "Antoine",
    highlight: "Amiel",
    title: "CRO",
    subTitle: "> Revenue",
    img: "./t5.png",
    description:
      "Antoine Amiel is a dynamic sales leader with a strong track record in driving revenue and business growth since the last 15 years. Previously, as Head of Sales for Orange Business for DACH, he led teams across several countries, developed Go-to-Market strategies, and implemented MEDDIC methodologies to enhance performance. Antoine brings extensive experience from his leadership senior roles at Starmind, FIS, and Thomson Reuters, where he managed global sales teams, expanded into new markets, and fostered strategic partnerships.",
  },
  {
    name: "Christian",
    highlight: "Wegler",
    title: "CDO",
    subTitle: "> Delivery",
    img: "./t6.png",
    description:
      "Christian was in the founding team of one of the first Free2Play Gaming-Platforms in Europe, launched and operated more than 10 Online Games as a Project Manager and built up the PM&QA team as Head of Project Management for the Burda and ProSiebenSat.1 Media groups. He has an eye for detail and keeps the general overview at the same time, which enables him to deliver our projects in time & quality. Christian studied Business Economics in Munich and is also a skilled coach & trainer, which helps him to deliver great results in any kind of environment.",
  },
];

const OurTeam = () => {
  return (
    <section className="pt-12 pb-32 px-6 lg:px-20 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    {/* Section Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-left text-gray-900">
      The <span className="text-blue-600">DILIGRAM Management </span> Team
    </h2>
    <p className="mt-2 mb-12 text-left text-blue-700 max-w-2xl">
      We combine extraordinary experience in building technology that
      achieves goals for business leaders.
    </p>

    {/* Team Grid */}
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14 justify-items-center justify-center">
      {teamMembers.map((member, idx) => (
        <div
          key={idx}
          className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 min-h-[400px] min-w-[300px] w-full"
        >
          {/* Image */}
          <div className="relative w-full flex justify-center pt-10">
            <img
              src={member.img}
              alt={member.name}
              className="w-60 h-60 object-cover border-4 border-white transition-transform duration-500 group-hover:hidden"
            />
          </div>

          {/* Content */}
          <div className="p-6 text-center transition-all duration-500 group-hover:translate-y-[-30px]">
            {/* Default (Visible) Content */}
            <div className="transition-opacity text-left duration-300 group-hover:opacity-0">
              <h3 className="text-lg font-semibold text-gray-900">
                {member.name}{" "}
                {member.highlight && (
                  <span className="text-blue-700">{member.highlight}</span>
                )}
              </h3>
              <p className="text-gray-600 text-sm mt-1">{member.title}</p>
              {member.subTitle && (
                <p className="text-blue-700 text-xs font-medium mt-1">
                  {member.subTitle}
                </p>
              )}
            </div>

            {/* Hidden Description (Revealed on Hover) */}
            <div className="absolute bottom-0 left-0 right-0 top-10 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-[13px] sm:text-sm text-gray-700 leading-relaxed text-left">
                {member.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default OurTeam;
