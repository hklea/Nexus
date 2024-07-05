import LanguageIcon from "@mui/icons-material/Language";

function Services() {
  const BoxInformation = [
    {
      icon: <LanguageIcon />,
      title: "Web Development",
      text: "Our team of expert developers utilizes the latest technologies to build websites that not only look stunning but also provide an exceptional user experience.",
    },
    {
      icon: <LanguageIcon />,
      title: "Web Development",
      text: "Our team of expert developers utilizes the latest technologies to build websites that not only look stunning but also provide an exceptional user experience.",
    },
    {
      icon: <LanguageIcon />,
      title: "Web Development",
      text: "Our team of expert developers utilizes the latest technologies to build websites that not only look stunning but also provide an exceptional user experience.",
    },
    {
      icon: <LanguageIcon />,
      title: "Web Development",
      text: "Our team of expert developers utilizes the latest technologies to build websites that not only look stunning but also provide an exceptional user experience.",
    },
    {
      icon: <LanguageIcon />,
      title: "Web Development",
      text: "Our team of expert developers utilizes the latest technologies to build websites that not only look stunning but also provide an exceptional user experience.",
    },
    {
      icon: <LanguageIcon />,
      title: "Web Development",
      text: "Our team of expert developers utilizes the latest technologies to build websites that not only look stunning but also provide an exceptional user experience.",
    },
  ];

  return (
    <div className="bg-[#c3d0da]">
      <p>lol</p>
      <p>lol2</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4  p-[5%] pl-[8%] pr-[8%]">
        {BoxInformation.map((item, index) => (
          <div
            key={index}
            className="bg-gray-200 p-4 pl-8 pr-8 h-[200px] rounded-xl sm:h-[300px] md:h-[350px] lg:h-[250px]"
          >
            <div className="h-[45px]">
              <LanguageIcon className="h-[45px] text-red-700 text-[100px]" />
            </div>
            <div className="h-[10%]">{item.title}</div>
            <div className="mt-[10px] h-[58%]">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
