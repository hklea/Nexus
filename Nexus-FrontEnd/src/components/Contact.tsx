import {
  CallIcon,
  TimeIcon,
  LocationIcon,
} from "../data/EntryPage/ContactInformationData";
import "../style/contact.css";

const Contact = () => {

return (
    <div className="contact-form  px-[20px] w-full mt-[40px] bg-white  md:justify-between md:px-[40px] mdlg:px-[60px] lg:flex mb-[4rem]">
      <div className="contact-left md:w-[100%] p-0  ">
        <div className="w-full  flex justify-left">
          <label className="contact-con text-xl  tracking-wider">CONTACT</label>
        </div>
        <div className="flex justify-left w-full ">
          <p className="left-text" style={{ fontSize: 30 }}>
            Contact Us. It's Easy.
          </p>
        </div>
        <div className="w-[95%] mt-[10px]">
          <p className="flex justify-center text-[#595566]">
            We'd love to hear from you! Whether you have a question about our
            services, need assistance, or just want to provide feedback, feel
            free to reach out.
          </p>
        </div>

        <div className="contact-info mt-[30px] ">
          <div className="flex ">
            <div className=" pr-0 grid justify-start  items-center ">
              <TimeIcon width={50} height={50} />
            </div>
            <div className=" px-2">
              <p
                className=" text-[#595566] text-[11px]"
                style={{ fontSize: 12 }}
              >
                Monday - Friday
              </p>
              <p className="mt-1 tracking-wider ">9 AM - 5 PM</p>
            </div>
          </div>

          <div className="flex mt-[12px]">
            <div className=" pr-0 grid justify-start items-center ">
              <CallIcon width={50} height={50} />
            </div>
            <div className=" px-2">
              <p
                className=" text-[#595566] text-[11px]"
                style={{ fontSize: 12 }}
              >
                Phone number
              </p>
              <p className="mt-1 tracking-wider ">+355 682 363 499</p>
            </div>
          </div>

          <div className="flex mt-[12px]">
            <div className=" pr-0 grid justify-start items-center ">
              <LocationIcon width={50} height={50} />
            </div>
            <div className=" px-2">
              <p
                className=" text-[#595566] text-[11px]"
                style={{ fontSize: 12 }}
              >
                Email
              </p>
              <p className="mt-1 " style={{ fontSize: 16 }}>
                nexussoftwarecompany@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[3rem]  lg:ml-[50px] ">
        <div>
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full  px-4 md:w-1/2">
              <div className="mb-8">
                <label
                  htmlFor="name"
                  className="mb-3 block text-sm font-medium text-dark dark:text-white"
                >
                  Full Name
                </label>
                <input
                  placeholder="Name Surname"
                  className="dark:rounded-none border-stroke w-full rounded-none border bg-[white] px-6 py-3 text-base text-body-color outline-none focus:border-gray-400 focus:rounded-none focus:text-black focus:font-medium  dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                />
              </div>
            </div>
            <div className="w-full  px-4 md:w-1/2">
              <div className="mb-8">
                <label
                  htmlFor="name"
                  className="mb-3 block text-sm font-medium text-dark dark:text-white"
                >
                  Email
                </label>
                <input
                  placeholder="example@gmail.com"
                  className="border-stroke w-full rounded-[0px] border bg-[white] px-6 py-3 text-base text-body-color outline-none focus:border-gray-400 focus:rounded-none dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                />
              </div>
            </div>
            <div className="w-full  px-4 md:w-1/2">
              <div className="mb-8">
                <label
                  htmlFor="name"
                  className="mb-3 block text-sm font-medium text-dark dark:text-white"
                >
                  Phone
                </label>
                <input
                  placeholder="+008 654 231"
                  className="border-stroke w-full rounded-[0px] border bg-[white] px-6 py-3 text-base text-body-color outline-none focus:border-gray-400 focus:rounded-none dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                />
              </div>
            </div>
            <div className="w-full  px-4 md:w-1/2">
              <div className="mb-8">
                <label
                  htmlFor="name"
                  className="mb-3 block text-sm font-medium text-dark dark:text-white"
                >
                  Company(optional)
                </label>
                <input
                  placeholder="yourcompany.com"
                  className="border-stroke w-full rounded-[0px] border bg-[#ffffff] px-6 py-3 text-base text-body-color outline-none focus:border-gray-400 focus:rounded-none dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                />
              </div>
            </div>
            <div className="w-full  px-4  md:w-full">
              <div className="mb-8">
                <label
                  htmlFor="name"
                  className="mb-3 block text-sm font-medium text-dark dark:text-white"
                >
                  Message
                </label>
                <textarea
            
                  placeholder="Briefly tell us about your project and your current goals. How can we help you?"
                  className="border-stroke w-full rounded-[0px] border bg-[#ffffff] px-6 py-3 text-base text-body-color outline-none focus:border-gray-400 focus:rounded-none dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                />
              </div>
            </div>

            <div className="px-4 w-full flex  ">
            <button className="text-nowrap text-white border-white border-solid py-3 px-8 w-[100%] xs:w-[60%] sm:w-[50%] tracking-wider text-[14px]  hover:border hover:border-gray-800 active:bg-">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
