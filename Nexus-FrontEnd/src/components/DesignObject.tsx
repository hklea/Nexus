import entryObject from "../assets/Images/EntryPage/EntryObject.png";

function DesignObject() {
  return (
    <div className="bg-[#9BB5C8]  h-[1rem]">
      <div className="relative w-full h-full bg-white rounded-t-[50px]">
        <img src={entryObject} alt="" className="h-[180px] w-[150px] absolute right-16 bottom-[-4rem]"/>
      </div>
    </div>
  );
}

export default DesignObject;
