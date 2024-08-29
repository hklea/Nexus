import entryObject from "../assets/Images/EntryPage/cpu1.png";

function DesignObject() {
  return (
    <div className="bg-[#9BB5C8]  h-[1rem]">
      <div className="relative w-full h-full bg-white rounded-t-[150px]">
        <img src={entryObject} alt="" className="h-[140px] w-[140px] lg:h-[200px] lg:w-[200px] lgxl:h-[280px] lgxl:w-[280px] absolute left-12 sm:left-28 lg:left-28 bottom-[-5rem] lgxl:bottom-[-11rem] lg:bottom-[-8rem]"/>
      </div>
    </div>
  );
}

export default DesignObject;
