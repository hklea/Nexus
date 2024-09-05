import "../style/PageFooter.css";
import inst from "../assets/Icons/EntryPage/insta.png";
import tiktok from "../assets/Icons/EntryPage/tiktok.png";
import {
  openInstagramPage,
  openTikTokPage,
} from "../utilities/EntryPage/CallingSocial";
import logo from '../assets/Icons/logosmallH.png'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { handleWhatsAppClick } from "../utilities/EntryPage/CallingSocial";

function PageFooter() {
  return (
    <footer className="bg-gradient-to-r from-zinc-900 to-stone-950 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid tracking-wider xssm:tracking-normal grid-cols-1 sm:text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {/* About Us */}
          <div className="footer-section px-2">
            <h3 className="flex  sm:justify-center text-lg font-bold mb-2 text-white">
              <img src={logo} className=" h-10 sm:ml-4 " alt="" />
            </h3>
            <ul className="space-y-2">
           
              <div className="flex justify-start    sm:justify-center ">
                <div
                  onClick={() => {
                    openInstagramPage();
                  }}
                >
                  <img
                    className="cursor-pointer w-[30px] h-[30px]"
                    src={inst}
                    alt=""
                  />
                </div>
                <div
                  className="ml-4"
                  onClick={() => {
                    openTikTokPage();
                  }}
                >
                  <img
                    className="cursor-pointer w-[25px] h-[25px] mt-[3px]"
                    src={tiktok}
                    alt=""
                  />
                </div>
              </div>
            </ul>
          </div>

          <div className="footer-section px-2">
            <h3 className="text-lg font-bold mb-2 text-white">About Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">About WebTech</li>
              <li className="text-gray-400">Mission & Values</li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section px-2">
            <h3 className="text-lg font-bold mb-2 text-white">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Software Development</li>
              <li className="text-gray-400">IT Consulting</li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="footer-section px-2">
            <h3 className="text-lg font-bold mb-2 text-white">Solutions</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Industry Solutions</li>
              <li className="text-gray-400">Custom Solutions</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="footer-section px-2">
            <h3 className="text-lg font-bold mb-2 text-white">Contact us</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Get in Touch</li>
              <li className="text-gray-400">Support</li>
            </ul>
          </div>

          {/* Connect */}
          <div className="footer-section px-2">
            <h3 className="text-lg font-bold mb-2 text-white">Connect</h3>
            <ul className="space-y-2">
              <li className=" text-green-500 cursor-pointer" onClick={handleWhatsAppClick}><WhatsAppIcon/></li>
              <li className="text-gray-400">Social Media</li>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <hr className="limited-hr"></hr>
      {/* Bottom Section */}
      <div className="max-w-xs mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <p className="rights">&copy; 2024 ChiefSoft. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default PageFooter;
