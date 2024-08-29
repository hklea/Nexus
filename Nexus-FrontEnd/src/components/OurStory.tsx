import doraImg from "../assets/Icons/EntryPage/dora.png";

function OurStory() {
  const ourStoryInfo = {
    title: "Our Story",
    text: "Founded by a team of passionate programmers, ChiefSoft was born out of a desire to push the boundaries of technology and deliver solutions that matter. Our mission is to empower businesses with cutting-edge technology, foster innovation, and create impactful digital experiences.",
  };
  return (
    <div className="w-full h-[450px] xxs:h-[450px] lg:h-[515px] flex flex-row">
      <div className="text-left w-[90%] h-[full] mdlg:w-[55%]">
        <img src={doraImg} alt="" />
      </div>
      <div className="w-[80%]  lg:w-[38%] font-lato text-base mt-[150px] xs:mt-[160px] sm:mt-[210px] md:mt-[230px] md:ml-[-190px] ml-[-150px] mdlg:ml-0 mdlg:mt-[100px] mdlg:w-[40%] pr-[25px]">
        <p className="font-semibold text-left md:text-[20px] lg:text-[26px] lg:tracking-wider">{ourStoryInfo.title}</p>
        <p className="text-[#595566] text-left text-[14px] mt-[10px] md:text-[15px] lg:tracking-wider lg:text-[15px] lg:mt-[25px] 2xl:text-[17px]">{ourStoryInfo.text}</p>
      </div>
    </div>
  );
}

export default OurStory;
