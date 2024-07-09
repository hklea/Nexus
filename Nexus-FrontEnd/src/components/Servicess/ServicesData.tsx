import { ServiceType } from "../../types/serviceType";

const ServicesData: ServiceType[] = [
  {
    id: 1,
    icon2: (
      <svg width="84" height="90" viewBox="0 0 84 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M64.0655 1.75259C64.2152 1.29193 64.8669 1.29193 65.0166 1.75259L65.9401 4.59493C66.0071 4.80094 66.1991 4.94042 66.4157 4.94042H69.4043C69.8886 4.94042 70.09 5.56023 69.6982 5.84493L67.2803 7.60159C67.1051 7.72891 67.0318 7.9546 67.0987 8.16061L68.0222 11.0029C68.1719 11.4636 67.6447 11.8467 67.2528 11.562L64.835 9.8053C64.6597 9.67798 64.4224 9.67798 64.2472 9.8053L61.8293 11.562C61.4375 11.8467 60.9102 11.4636 61.0599 11.0029L61.9835 8.16061C62.0504 7.9546 61.9771 7.72891 61.8018 7.60159L59.384 5.84493C58.9921 5.56023 59.1935 4.94042 59.6779 4.94042H62.6665C62.8831 4.94042 63.0751 4.80094 63.142 4.59493L64.0655 1.75259Z" fill="#808080"/>
      <path d="M14.3786 77.1691C14.6508 77.4412 14.5263 77.906 14.1545 78.0056L3.84492 80.768C3.47314 80.8676 3.13293 80.5274 3.23255 80.1557L5.99499 69.8461C6.09461 69.4743 6.55934 69.3498 6.83151 69.6219L14.3786 77.1691Z" fill="#EBEBEB"/>
      <g clip-path="url(#clip0_156_193)">
      <path d="M8 44C8 36.0435 11.2134 28.4129 16.9332 22.7868C22.6531 17.1607 30.4109 14 38.5 14C46.5891 14 54.3469 17.1607 60.0668 22.7868C65.7866 28.4129 69 36.0435 69 44C69 51.9565 65.7866 59.5871 60.0668 65.2132C54.3469 70.8393 46.5891 74 38.5 74C30.4109 74 22.6531 70.8393 16.9332 65.2132C11.2134 59.5871 8 51.9565 8 44ZM36.5938 18.0388C34.0394 18.8038 31.5041 21.1137 29.3996 24.995C28.7066 26.2855 28.1102 27.6241 27.6153 29H36.5938V18.0388ZM23.5931 29C24.2292 27.0083 25.0458 25.0768 26.0331 23.2287C26.6967 22.0052 27.4577 20.8353 28.3092 19.73C23.5861 21.6578 19.5222 24.8743 16.5972 29H23.5931ZM21.3742 42.125C21.4886 38.8363 21.9004 35.6825 22.5637 32.75H14.3821C12.9641 35.6952 12.1159 38.8744 11.8811 42.125H21.3742ZM26.4792 32.75C25.7293 35.8243 25.2976 38.9653 25.1906 42.125H36.5938V32.75H26.4792ZM40.4062 32.75V42.125H51.8056C51.6999 38.9654 51.2694 35.8244 50.5208 32.75H40.4062ZM25.1944 45.875C25.3001 49.0346 25.7306 52.1756 26.4792 55.25H36.5938V45.875H25.1944ZM40.4062 45.875V55.25H50.5208C51.2337 52.3813 51.6874 49.22 51.8094 45.875H40.4062ZM27.6153 59C28.144 60.45 28.7387 61.785 29.3996 63.005C31.5041 66.8862 34.0432 69.1925 36.5938 69.9613V59H27.6153ZM28.3092 68.27C27.4577 67.1647 26.6967 65.9948 26.0331 64.7712C25.0458 62.9232 24.2292 60.9917 23.5931 59H16.5972C19.5175 63.13 23.5828 66.3477 28.3092 68.27ZM22.5637 55.25C21.8753 52.1676 21.4772 49.0293 21.3742 45.875H11.8811C12.1175 49.2125 12.9906 52.3737 14.3821 55.25H22.5637ZM48.6908 68.27C53.4172 66.3477 57.4825 63.13 60.4028 59H53.4069C52.7708 60.9917 51.9542 62.9232 50.9669 64.7712C50.3033 65.9948 49.5423 67.1647 48.6908 68.27ZM40.4062 59V69.9613C42.9606 69.1963 45.4959 66.8862 47.6004 63.005C48.2613 61.7875 48.856 60.4525 49.3847 59H40.4062ZM54.4363 55.25H62.6179C64.0094 52.3737 64.8825 49.2125 65.1189 45.875H55.6257C55.5228 49.0293 55.1247 52.1676 54.4363 55.25ZM65.1189 42.125C64.8841 38.8744 64.0359 35.6952 62.6179 32.75H54.4363C55.0996 35.6825 55.5114 38.8363 55.6257 42.125H65.1189ZM50.9669 23.2287C51.9086 24.9687 52.7282 26.9037 53.4069 29H60.4028C57.4825 24.87 53.4172 21.6523 48.6908 19.73C49.5219 20.795 50.2844 21.9725 50.9669 23.2287ZM49.3847 29C48.8898 27.6241 48.2934 26.2855 47.6004 24.995C45.4959 21.1137 42.9606 18.8075 40.4062 18.0388V29H49.3847Z" fill="#EBEBEB"/>
      </g>
      <defs>
      <clipPath id="clip0_156_193">
      <rect width="61" height="60" fill="white" transform="translate(8 14)"/>
      </clipPath>
      </defs>
      </svg>
      
      
      
    ),
    icon: (
      <svg width="84" height="90" viewBox="0 0 84 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M64.0655 1.75259C64.2152 1.29193 64.8669 1.29193 65.0166 1.75259L65.9401 4.59493C66.0071 4.80094 66.1991 4.94042 66.4157 4.94042H69.4043C69.8886 4.94042 70.09 5.56023 69.6982 5.84493L67.2803 7.60159C67.1051 7.72891 67.0318 7.9546 67.0987 8.16061L68.0222 11.0029C68.1719 11.4636 67.6447 11.8467 67.2528 11.562L64.835 9.8053C64.6597 9.67798 64.4224 9.67798 64.2472 9.8053L61.8293 11.562C61.4375 11.8467 60.9102 11.4636 61.0599 11.0029L61.9835 8.16061C62.0504 7.9546 61.9771 7.72891 61.8018 7.60159L59.384 5.84493C58.9921 5.56023 59.1935 4.94042 59.6779 4.94042H62.6665C62.8831 4.94042 63.0751 4.80094 63.142 4.59493L64.0655 1.75259Z" fill="#141414"/>
      <path d="M14.3786 77.1691C14.6508 77.4412 14.5263 77.906 14.1545 78.0056L3.84492 80.768C3.47314 80.8676 3.13293 80.5274 3.23255 80.1557L5.99499 69.8461C6.09461 69.4743 6.55934 69.3498 6.83151 69.6219L14.3786 77.1691Z" fill="#9BB5C8"/>
      <g clip-path="url(#clip0_156_194)">
      <path d="M8 44C8 36.0435 11.2134 28.4129 16.9332 22.7868C22.6531 17.1607 30.4109 14 38.5 14C46.5891 14 54.3469 17.1607 60.0668 22.7868C65.7866 28.4129 69 36.0435 69 44C69 51.9565 65.7866 59.5871 60.0668 65.2132C54.3469 70.8393 46.5891 74 38.5 74C30.4109 74 22.6531 70.8393 16.9332 65.2132C11.2134 59.5871 8 51.9565 8 44ZM36.5938 18.0388C34.0394 18.8038 31.5041 21.1137 29.3996 24.995C28.7066 26.2855 28.1102 27.6241 27.6153 29H36.5938V18.0388ZM23.5931 29C24.2292 27.0083 25.0458 25.0768 26.0331 23.2287C26.6967 22.0052 27.4577 20.8353 28.3092 19.73C23.5861 21.6578 19.5222 24.8743 16.5972 29H23.5931ZM21.3742 42.125C21.4886 38.8363 21.9004 35.6825 22.5637 32.75H14.3821C12.9641 35.6952 12.1159 38.8744 11.8811 42.125H21.3742ZM26.4792 32.75C25.7293 35.8243 25.2976 38.9653 25.1906 42.125H36.5938V32.75H26.4792ZM40.4062 32.75V42.125H51.8056C51.6999 38.9654 51.2694 35.8244 50.5208 32.75H40.4062ZM25.1944 45.875C25.3001 49.0346 25.7306 52.1756 26.4792 55.25H36.5938V45.875H25.1944ZM40.4062 45.875V55.25H50.5208C51.2337 52.3813 51.6874 49.22 51.8094 45.875H40.4062ZM27.6153 59C28.144 60.45 28.7387 61.785 29.3996 63.005C31.5041 66.8862 34.0432 69.1925 36.5938 69.9613V59H27.6153ZM28.3092 68.27C27.4577 67.1647 26.6967 65.9948 26.0331 64.7712C25.0458 62.9232 24.2292 60.9917 23.5931 59H16.5972C19.5175 63.13 23.5828 66.3477 28.3092 68.27ZM22.5637 55.25C21.8753 52.1676 21.4772 49.0293 21.3742 45.875H11.8811C12.1175 49.2125 12.9906 52.3737 14.3821 55.25H22.5637ZM48.6908 68.27C53.4172 66.3477 57.4825 63.13 60.4028 59H53.4069C52.7708 60.9917 51.9542 62.9232 50.9669 64.7712C50.3033 65.9948 49.5423 67.1647 48.6908 68.27ZM40.4062 59V69.9613C42.9606 69.1963 45.4959 66.8862 47.6004 63.005C48.2613 61.7875 48.856 60.4525 49.3847 59H40.4062ZM54.4363 55.25H62.6179C64.0094 52.3737 64.8825 49.2125 65.1189 45.875H55.6257C55.5228 49.0293 55.1247 52.1676 54.4363 55.25ZM65.1189 42.125C64.8841 38.8744 64.0359 35.6952 62.6179 32.75H54.4363C55.0996 35.6825 55.5114 38.8363 55.6257 42.125H65.1189ZM50.9669 23.2287C51.9086 24.9687 52.7282 26.9037 53.4069 29H60.4028C57.4825 24.87 53.4172 21.6523 48.6908 19.73C49.5219 20.795 50.2844 21.9725 50.9669 23.2287ZM49.3847 29C48.8898 27.6241 48.2934 26.2855 47.6004 24.995C45.4959 21.1137 42.9606 18.8075 40.4062 18.0388V29H49.3847Z" fill="#9BB5C8"/>
      </g>
      <defs>
      <clipPath id="clip0_156_194">
      <rect width="61" height="60" fill="white" transform="translate(8 14)"/>
      </clipPath>
      </defs>
      </svg>
      
    ),
    title: "Web Development",
    paragraph:
      "Our team of expert developers utilizes the latest technologies to build websites that not only look stunning but also provide an exceptional user experience.",
  },
  {
    id: 1,
    icon2: (
      <svg width="82" height="74" viewBox="0 0 82 74" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_165_386)">
      <path d="M48.409 10.3703C46.235 3.20989 35.765 3.20989 33.591 10.3703L33.2033 11.6464C33.0514 12.1463 32.7862 12.6068 32.427 12.9943C32.0677 13.3819 31.6236 13.6865 31.1272 13.886C30.6308 14.0854 30.0946 14.1746 29.558 14.147C29.0214 14.1195 28.498 13.9758 28.0261 13.7265L26.8215 13.0865C20.0561 9.51828 12.6595 16.6947 16.3433 23.2511L16.9993 24.4192C17.2563 24.8768 17.4044 25.3844 17.4329 25.9047C17.4613 26.4251 17.3693 26.945 17.1637 27.4264C16.958 27.9078 16.6438 28.3384 16.2442 28.6867C15.8445 29.0351 15.3696 29.2923 14.8541 29.4395L13.5382 29.8156C6.15395 31.9237 6.15395 42.0763 13.5382 44.1845L14.8541 44.5605C15.3696 44.7077 15.8445 44.9649 16.2442 45.3133C16.6438 45.6616 16.958 46.0923 17.1637 46.5736C17.3693 47.055 17.4613 47.5749 17.4329 48.0953C17.4044 48.6156 17.2563 49.1232 16.9993 49.5808L16.3392 50.7489C12.6595 57.3093 20.0561 64.4857 26.8215 60.9095L28.0261 60.2735C28.498 60.0242 29.0214 59.8805 29.558 59.853C30.0946 59.8254 30.6308 59.9146 31.1272 60.114C31.6236 60.3135 32.0677 60.6182 32.427 61.0057C32.7862 61.3932 33.0514 61.8538 33.2033 62.3536L33.591 63.6297C35.765 70.7901 46.235 70.7901 48.409 63.6297L48.7967 62.3536C48.9486 61.8538 49.2138 61.3932 49.573 61.0057C49.9323 60.6182 50.3764 60.3135 50.8728 60.114C51.3692 59.9146 51.9054 59.8254 52.442 59.853C52.9786 59.8805 53.502 60.0242 53.9739 60.2735L55.1785 60.9135C61.9439 64.4857 69.3447 57.3053 65.6567 50.7489L65.0008 49.5808C64.7437 49.1232 64.5956 48.6156 64.5671 48.0953C64.5387 47.5749 64.6307 47.055 64.8364 46.5736C65.042 46.0923 65.3562 45.6616 65.7558 45.3133C66.1555 44.9649 66.6304 44.7077 67.1459 44.5605L68.4618 44.1845C75.8461 42.0763 75.8461 31.9237 68.4618 29.8156L67.1459 29.4395C66.6304 29.2923 66.1555 29.0351 65.7558 28.6867C65.3562 28.3384 65.042 27.9078 64.8364 27.4264C64.6307 26.945 64.5387 26.4251 64.5671 25.9047C64.5956 25.3844 64.7437 24.8768 65.0008 24.4192L65.6608 23.2511C69.3446 16.6907 61.9398 9.51828 55.1785 13.0905L53.9739 13.7265C53.502 13.9758 52.9786 14.1195 52.442 14.147C51.9054 14.1746 51.3692 14.0854 50.8728 13.886C50.3764 13.6865 49.9323 13.3819 49.573 12.9943C49.2138 12.6068 48.9486 12.1463 48.7967 11.6464L48.409 10.3703ZM37.5472 11.5024C38.562 8.1622 43.438 8.1622 44.4528 11.5024L44.8406 12.7785C45.1666 13.8509 45.7359 14.839 46.5069 15.6703C47.2779 16.5016 48.2309 17.155 49.2962 17.5827C50.3615 18.0104 51.5119 18.2015 52.6633 18.142C53.8146 18.0825 54.9376 17.7739 55.9499 17.2388L57.1504 16.5987C60.3021 14.9386 63.7508 18.2788 62.0347 21.339L61.3788 22.5071C60.8278 23.4889 60.5103 24.5777 60.4496 25.6939C60.3889 26.8101 60.5865 27.9253 61.0279 28.9578C61.4693 29.9904 62.1434 30.914 63.0007 31.6612C63.858 32.4083 64.8769 32.96 65.9826 33.2758L67.2944 33.6518C70.739 34.6359 70.739 39.3642 67.2944 40.3482L65.9784 40.7242C64.8725 41.0403 63.8536 41.5924 62.9963 42.34C62.139 43.0877 61.4651 44.0118 61.0241 45.0448C60.583 46.0778 60.386 47.1934 60.4473 48.3098C60.5087 49.4263 60.827 50.5152 61.3788 51.4969L62.0388 52.661C63.7508 55.7172 60.3062 59.0614 57.1504 57.3973L55.9499 56.7612C54.9373 56.2262 53.8141 55.9177 52.6625 55.8585C51.5109 55.7992 50.3603 55.9907 49.295 56.4188C48.2297 56.8469 47.2767 57.5008 46.5059 58.3325C45.7351 59.1643 45.1661 60.1528 44.8406 61.2255L44.4528 62.4976C43.438 65.8378 38.562 65.8378 37.5472 62.4976L37.1594 61.2215C36.8333 60.1497 36.264 59.1621 35.4933 58.3313C34.7226 57.5004 33.77 56.8472 32.7053 56.4196C31.6406 55.9919 30.4907 55.8007 29.3398 55.8598C28.189 55.9189 27.0664 56.2269 26.0542 56.7612L24.8496 57.4013C21.6979 59.0614 18.2492 55.7212 19.9653 52.661L20.6212 51.4969C21.1738 50.5151 21.4927 49.4258 21.5545 48.3088C21.6162 47.1919 21.4194 46.0758 20.9782 45.0423C20.5371 44.0088 19.863 43.0842 19.0053 42.3363C18.1476 41.5884 17.1281 41.0362 16.0216 40.7202L14.7056 40.3442C11.261 39.3602 11.261 34.6319 14.7056 33.6478L16.0216 33.2718C17.1263 32.9554 18.1442 32.4035 19.0006 31.6564C19.857 30.9094 20.5303 29.9861 20.9713 28.9541C21.4122 27.9222 21.6096 26.8077 21.5491 25.6922C21.4885 24.5767 21.1715 23.4884 20.6212 22.5071L19.9612 21.339C18.2492 18.2828 21.6938 14.9386 24.8496 16.6027L26.0542 17.2388C27.0664 17.7731 28.189 18.0811 29.3398 18.1402C30.4907 18.1994 31.6406 18.0081 32.7053 17.5805C33.77 17.1528 34.7226 16.4996 35.4933 15.6688C36.264 14.8379 36.8333 13.8503 37.1594 12.7785L37.5472 11.5024Z" fill="#EBEBEB"/>
      <path d="M41.3906 24C39.6321 24 37.8909 24.3359 36.2662 24.9884C34.6416 25.641 33.1654 26.5974 31.922 27.8032C30.6786 29.0089 29.6922 30.4403 29.0193 32.0157C28.3464 33.5911 28 35.2796 28 36.9848C28 38.69 28.3464 40.3785 29.0193 41.9539C29.6922 43.5293 30.6786 44.9607 31.922 46.1665C33.1654 47.3722 34.6416 48.3287 36.2662 48.9812C37.8909 49.6338 39.6321 49.9696 41.3906 49.9696C44.942 49.9696 48.3479 48.6016 50.8592 46.1665C53.3704 43.7313 54.7812 40.4286 54.7812 36.9848C54.7812 33.541 53.3704 30.2383 50.8592 27.8032C48.3479 25.368 44.942 24 41.3906 24ZM32.1253 36.9848C32.1253 34.602 33.1014 32.3167 34.839 30.6318C36.5766 28.9468 38.9333 28.0003 41.3906 28.0003C43.8479 28.0003 46.2046 28.9468 47.9422 30.6318C49.6798 32.3167 50.6559 34.602 50.6559 36.9848C50.6559 39.3677 49.6798 41.6529 47.9422 43.3379C46.2046 45.0228 43.8479 45.9694 41.3906 45.9694C38.9333 45.9694 36.5766 45.0228 34.839 43.3379C33.1014 41.6529 32.1253 39.3677 32.1253 36.9848Z" fill="#EBEBEB"/>
      <path d="M14.0777 60.0128C14.3498 60.285 14.2253 60.7497 13.8535 60.8493L3.54396 63.6118C3.17217 63.7114 2.83197 63.3712 2.93159 62.9994L5.69403 52.6898C5.79365 52.318 6.25838 52.1935 6.53054 52.4657L14.0777 60.0128Z" fill="#9BB5C8"/>
      <circle cx="73.8867" cy="10.8867" r="5.88667" fill="#EBEBEB"/>
      <circle cx="28" cy="66" r="3" fill="#EBEBEB"/>
      </g>
      <defs>
      <clipPath id="clip0_165_386">
      <rect width="82" height="74" fill="white"/>
      </clipPath>
      </defs>
      </svg>
      

      
    ),
    icon: (
      <svg width="82" height="74" viewBox="0 0 82 74" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_165_371)">
      <path d="M48.409 10.3703C46.235 3.20989 35.765 3.20989 33.591 10.3703L33.2033 11.6464C33.0514 12.1463 32.7862 12.6068 32.427 12.9943C32.0677 13.3819 31.6236 13.6865 31.1272 13.886C30.6308 14.0854 30.0946 14.1746 29.558 14.147C29.0214 14.1195 28.498 13.9758 28.0261 13.7265L26.8215 13.0865C20.0561 9.51828 12.6595 16.6947 16.3433 23.2511L16.9993 24.4192C17.2563 24.8768 17.4044 25.3844 17.4329 25.9047C17.4613 26.4251 17.3693 26.945 17.1637 27.4264C16.958 27.9078 16.6438 28.3384 16.2442 28.6867C15.8445 29.0351 15.3696 29.2923 14.8541 29.4395L13.5382 29.8156C6.15395 31.9237 6.15395 42.0763 13.5382 44.1845L14.8541 44.5605C15.3696 44.7077 15.8445 44.9649 16.2442 45.3133C16.6438 45.6616 16.958 46.0923 17.1637 46.5736C17.3693 47.055 17.4613 47.5749 17.4329 48.0953C17.4044 48.6156 17.2563 49.1232 16.9993 49.5808L16.3392 50.7489C12.6595 57.3093 20.0561 64.4857 26.8215 60.9095L28.0261 60.2735C28.498 60.0242 29.0214 59.8805 29.558 59.853C30.0946 59.8254 30.6308 59.9146 31.1272 60.114C31.6236 60.3135 32.0677 60.6182 32.427 61.0057C32.7862 61.3932 33.0514 61.8538 33.2033 62.3536L33.591 63.6297C35.765 70.7901 46.235 70.7901 48.409 63.6297L48.7967 62.3536C48.9486 61.8538 49.2138 61.3932 49.573 61.0057C49.9323 60.6182 50.3764 60.3135 50.8728 60.114C51.3692 59.9146 51.9054 59.8254 52.442 59.853C52.9786 59.8805 53.502 60.0242 53.9739 60.2735L55.1785 60.9135C61.9439 64.4857 69.3447 57.3053 65.6567 50.7489L65.0008 49.5808C64.7437 49.1232 64.5956 48.6156 64.5671 48.0953C64.5387 47.5749 64.6307 47.055 64.8364 46.5736C65.042 46.0923 65.3562 45.6616 65.7558 45.3133C66.1555 44.9649 66.6304 44.7077 67.1459 44.5605L68.4618 44.1845C75.8461 42.0763 75.8461 31.9237 68.4618 29.8156L67.1459 29.4395C66.6304 29.2923 66.1555 29.0351 65.7558 28.6867C65.3562 28.3384 65.042 27.9078 64.8364 27.4264C64.6307 26.945 64.5387 26.4251 64.5671 25.9047C64.5956 25.3844 64.7437 24.8768 65.0008 24.4192L65.6608 23.2511C69.3446 16.6907 61.9398 9.51828 55.1785 13.0905L53.9739 13.7265C53.502 13.9758 52.9786 14.1195 52.442 14.147C51.9054 14.1746 51.3692 14.0854 50.8728 13.886C50.3764 13.6865 49.9323 13.3819 49.573 12.9943C49.2138 12.6068 48.9486 12.1463 48.7967 11.6464L48.409 10.3703ZM37.5472 11.5024C38.562 8.1622 43.438 8.1622 44.4528 11.5024L44.8406 12.7785C45.1666 13.8509 45.7359 14.839 46.5069 15.6703C47.2779 16.5016 48.2309 17.155 49.2962 17.5827C50.3615 18.0104 51.5119 18.2015 52.6633 18.142C53.8146 18.0825 54.9376 17.7739 55.9499 17.2388L57.1504 16.5987C60.3021 14.9386 63.7508 18.2788 62.0347 21.339L61.3788 22.5071C60.8278 23.4889 60.5103 24.5777 60.4496 25.6939C60.3889 26.8101 60.5865 27.9253 61.0279 28.9578C61.4693 29.9904 62.1434 30.914 63.0007 31.6612C63.858 32.4083 64.8769 32.96 65.9826 33.2758L67.2944 33.6518C70.739 34.6359 70.739 39.3642 67.2944 40.3482L65.9784 40.7242C64.8725 41.0403 63.8536 41.5924 62.9963 42.34C62.139 43.0877 61.4651 44.0118 61.0241 45.0448C60.583 46.0778 60.386 47.1934 60.4473 48.3098C60.5087 49.4263 60.827 50.5152 61.3788 51.4969L62.0388 52.661C63.7508 55.7172 60.3062 59.0614 57.1504 57.3973L55.9499 56.7612C54.9373 56.2262 53.8141 55.9177 52.6625 55.8585C51.5109 55.7992 50.3603 55.9907 49.295 56.4188C48.2297 56.8469 47.2767 57.5008 46.5059 58.3325C45.7351 59.1643 45.1661 60.1528 44.8406 61.2255L44.4528 62.4976C43.438 65.8378 38.562 65.8378 37.5472 62.4976L37.1594 61.2215C36.8333 60.1497 36.264 59.1621 35.4933 58.3313C34.7226 57.5004 33.77 56.8472 32.7053 56.4196C31.6406 55.9919 30.4907 55.8007 29.3398 55.8598C28.189 55.9189 27.0664 56.2269 26.0542 56.7612L24.8496 57.4013C21.6979 59.0614 18.2492 55.7212 19.9653 52.661L20.6212 51.4969C21.1738 50.5151 21.4927 49.4258 21.5545 48.3088C21.6162 47.1919 21.4194 46.0758 20.9782 45.0423C20.5371 44.0088 19.863 43.0842 19.0053 42.3363C18.1476 41.5884 17.1281 41.0362 16.0216 40.7202L14.7056 40.3442C11.261 39.3602 11.261 34.6319 14.7056 33.6478L16.0216 33.2718C17.1263 32.9554 18.1442 32.4035 19.0006 31.6564C19.857 30.9094 20.5303 29.9861 20.9713 28.9541C21.4122 27.9222 21.6096 26.8077 21.5491 25.6922C21.4885 24.5767 21.1715 23.4884 20.6212 22.5071L19.9612 21.339C18.2492 18.2828 21.6938 14.9386 24.8496 16.6027L26.0542 17.2388C27.0664 17.7731 28.189 18.0811 29.3398 18.1402C30.4907 18.1994 31.6406 18.0081 32.7053 17.5805C33.77 17.1528 34.7226 16.4996 35.4933 15.6688C36.264 14.8379 36.8333 13.8503 37.1594 12.7785L37.5472 11.5024Z" fill="black"/>
      <path d="M41.3906 24C39.6321 24 37.8909 24.3359 36.2662 24.9884C34.6416 25.641 33.1654 26.5974 31.922 27.8032C30.6786 29.0089 29.6922 30.4403 29.0193 32.0157C28.3464 33.5911 28 35.2796 28 36.9848C28 38.69 28.3464 40.3785 29.0193 41.9539C29.6922 43.5293 30.6786 44.9607 31.922 46.1665C33.1654 47.3722 34.6416 48.3287 36.2662 48.9812C37.8909 49.6338 39.6321 49.9696 41.3906 49.9696C44.942 49.9696 48.3479 48.6016 50.8592 46.1665C53.3704 43.7313 54.7812 40.4286 54.7812 36.9848C54.7812 33.541 53.3704 30.2383 50.8592 27.8032C48.3479 25.368 44.942 24 41.3906 24ZM32.1253 36.9848C32.1253 34.602 33.1014 32.3167 34.839 30.6318C36.5766 28.9468 38.9333 28.0003 41.3906 28.0003C43.8479 28.0003 46.2046 28.9468 47.9422 30.6318C49.6798 32.3167 50.6559 34.602 50.6559 36.9848C50.6559 39.3677 49.6798 41.6529 47.9422 43.3379C46.2046 45.0228 43.8479 45.9694 41.3906 45.9694C38.9333 45.9694 36.5766 45.0228 34.839 43.3379C33.1014 41.6529 32.1253 39.3677 32.1253 36.9848Z" fill="black"/>
      <path d="M14.0777 60.0128C14.3498 60.285 14.2253 60.7497 13.8535 60.8493L3.54396 63.6118C3.17217 63.7114 2.83197 63.3712 2.93159 62.9994L5.69403 52.6898C5.79365 52.318 6.25838 52.1935 6.53054 52.4657L14.0777 60.0128Z" fill="#9BB5C8"/>
      <circle cx="73.8867" cy="10.8867" r="5.88667" fill="black"/>
      <circle cx="28" cy="66" r="3" fill="black"/>
      </g>
      <defs>
      <clipPath id="clip0_165_371">
      <rect width="82" height="74" fill="white"/>
      </clipPath>
      </defs>
      </svg>
      
      
      
      
    ),
    title: "Management Systems",
    paragraph:
      "From inventory management to customer relationship management, we create systems that integrate seamlessly with your existing processes.",
  },
  {
    id: 1,
    icon2: (
      <svg width="96" height="90" viewBox="0 0 96 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.0779 51.8917C12.35 52.1639 12.2255 52.6286 11.8537 52.7282L1.54414 55.4907C1.17236 55.5903 0.83215 55.2501 0.93177 54.8783L3.69421 44.5687C3.79383 44.197 4.25856 44.0724 4.53073 44.3446L12.0779 51.8917Z" fill="#9BB5C8"/>
      <g clip-path="url(#clip0_156_227)">
      <path d="M64.2422 4C65.3694 4 66.4504 4.42143 67.2474 5.17157C68.0444 5.92172 68.4922 6.93913 68.4922 8V56C68.4922 57.0609 68.0444 58.0783 67.2474 58.8284C66.4504 59.5786 65.3694 60 64.2422 60H38.7422C37.615 60 36.534 59.5786 35.737 58.8284C34.94 58.0783 34.4922 57.0609 34.4922 56V8C34.4922 6.93913 34.94 5.92172 35.737 5.17157C36.534 4.42143 37.615 4 38.7422 4H64.2422ZM38.7422 0C36.4878 0 34.3258 0.842855 32.7318 2.34315C31.1377 3.84344 30.2422 5.87827 30.2422 8V56C30.2422 58.1217 31.1377 60.1566 32.7318 61.6569C34.3258 63.1571 36.4878 64 38.7422 64H64.2422C66.4965 64 68.6585 63.1571 70.2526 61.6569C71.8467 60.1566 72.7422 58.1217 72.7422 56V8C72.7422 5.87827 71.8467 3.84344 70.2526 2.34315C68.6585 0.842855 66.4965 0 64.2422 0L38.7422 0Z" fill="#EBEBEB"/>
      <path d="M51.4922 56C52.6194 56 53.7004 55.5786 54.4974 54.8284C55.2944 54.0783 55.7422 53.0609 55.7422 52C55.7422 50.9391 55.2944 49.9217 54.4974 49.1716C53.7004 48.4214 52.6194 48 51.4922 48C50.365 48 49.284 48.4214 48.487 49.1716C47.69 49.9217 47.2422 50.9391 47.2422 52C47.2422 53.0609 47.69 54.0783 48.487 54.8284C49.284 55.5786 50.365 56 51.4922 56Z" fill="#EBEBEB"/>
      </g>
      <defs>
      <clipPath id="clip0_156_227">
      <rect width="68" height="64" fill="white" transform="translate(17.4922)"/>
      </clipPath>
      </defs>
      </svg>
      


      
      
    ),
    icon: (
      <svg width="96" height="90" viewBox="0 0 96 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="70.7376" cy="40.8743" r="23.7884" fill="#DADADA"/>
      <path d="M12.0779 51.8917C12.35 52.1639 12.2255 52.6286 11.8537 52.7282L1.54414 55.4907C1.17236 55.5903 0.83215 55.2501 0.93177 54.8783L3.69421 44.5687C3.79383 44.197 4.25856 44.0724 4.53073 44.3446L12.0779 51.8917Z" fill="#9BB5C8"/>
      <circle cx="45.3095" cy="19.0214" r="5.02144" fill="#DADADA"/>
      <g clip-path="url(#clip0_156_215)">
      <path d="M64.2422 4C65.3694 4 66.4504 4.42143 67.2474 5.17157C68.0444 5.92172 68.4922 6.93913 68.4922 8V56C68.4922 57.0609 68.0444 58.0783 67.2474 58.8284C66.4504 59.5786 65.3694 60 64.2422 60H38.7422C37.615 60 36.534 59.5786 35.737 58.8284C34.94 58.0783 34.4922 57.0609 34.4922 56V8C34.4922 6.93913 34.94 5.92172 35.737 5.17157C36.534 4.42143 37.615 4 38.7422 4H64.2422ZM38.7422 0C36.4878 0 34.3258 0.842855 32.7318 2.34315C31.1377 3.84344 30.2422 5.87827 30.2422 8V56C30.2422 58.1217 31.1377 60.1566 32.7318 61.6569C34.3258 63.1571 36.4878 64 38.7422 64H64.2422C66.4965 64 68.6585 63.1571 70.2526 61.6569C71.8467 60.1566 72.7422 58.1217 72.7422 56V8C72.7422 5.87827 71.8467 3.84344 70.2526 2.34315C68.6585 0.842855 66.4965 0 64.2422 0L38.7422 0Z" fill="black"/>
      <path d="M51.4922 56C52.6194 56 53.7004 55.5786 54.4974 54.8284C55.2944 54.0783 55.7422 53.0609 55.7422 52C55.7422 50.9391 55.2944 49.9217 54.4974 49.1716C53.7004 48.4214 52.6194 48 51.4922 48C50.365 48 49.284 48.4214 48.487 49.1716C47.69 49.9217 47.2422 50.9391 47.2422 52C47.2422 53.0609 47.69 54.0783 48.487 54.8284C49.284 55.5786 50.365 56 51.4922 56Z" fill="black"/>
      </g>
      <defs>
      <clipPath id="clip0_156_215">
      <rect width="68" height="64" fill="white" transform="translate(17.4922)"/>
      </clipPath>
      </defs>
      </svg>
      
    ),
    title: "Mobile App Development",
    paragraph:
      "Whether you need a customer-facing app or an enterprise-level solution, we deliver mobile apps that meet your business needs and exceed your expectations.",
  },
  {
    id: 1,
    icon2: (
      <svg width="92" height="90" viewBox="0 0 92 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M48.2999 8.46353C48.4495 8.00287 49.1012 8.00287 49.2509 8.46353L50.3739 11.9199C50.4409 12.1259 50.6329 12.2654 50.8495 12.2654L54.4837 12.2654C54.9681 12.2654 55.1694 12.8852 54.7776 13.1699L51.8374 15.306C51.6622 15.4333 51.5889 15.659 51.6558 15.865L52.7788 19.3214C52.9285 19.782 52.4013 20.1651 52.0094 19.8804L49.0693 17.7443C48.894 17.6169 48.6567 17.6169 48.4815 17.7443L45.5413 19.8804C45.1495 20.1651 44.6222 19.782 44.7719 19.3214L45.895 15.865C45.9619 15.659 45.8886 15.4333 45.7133 15.306L42.7732 13.1699C42.3813 12.8852 42.5827 12.2654 43.0671 12.2654L46.7013 12.2654C46.9179 12.2654 47.1099 12.1259 47.1768 11.9199L48.2999 8.46353Z" fill="#808080"/>
<path d="M21.1967 75.6292C21.4689 75.9014 21.3443 76.3661 20.9726 76.4657L10.9451 79.1526C10.5733 79.2522 10.2331 78.912 10.3328 78.5402L13.0196 68.5128C13.1192 68.141 13.5839 68.0165 13.8561 68.2886L21.1967 75.6292Z" fill="#9BB5C8"/>
<path d="M0.907182 17.0345C0.357511 19.1018 0.3611 21.2771 0.917587 23.3426C1.47407 25.408 2.56391 27.2909 4.07786 28.8026C5.5918 30.3143 7.47667 31.4016 9.54352 31.9557C11.6104 32.5097 13.7866 32.5109 15.8541 31.9592L41.6231 57.3563C41.0875 59.1749 40.9834 61.0933 41.3189 62.9592C41.6544 64.825 42.4203 66.5871 43.5559 68.1054C44.6915 69.6238 46.1655 70.8567 47.8609 71.7063C49.5563 72.5559 51.4264 72.9989 53.323 73C55.0702 72.9976 56.7964 72.6198 58.3848 71.8922C59.9732 71.1646 61.3866 70.1043 62.5292 68.783C63.6718 67.4617 64.517 65.9103 65.0074 64.234C65.4979 62.5577 65.6221 60.7956 65.3718 59.0671C65.1214 57.3386 64.5023 55.6841 63.5564 54.2157C62.6105 52.7473 61.3599 51.4992 59.8893 50.5561C58.4187 49.613 56.7626 48.9969 55.033 48.7495C53.3034 48.5021 51.5408 48.6292 49.8646 49.1222L24.4573 23.3635C25.0119 21.2961 25.0127 19.1192 24.4597 17.0513C23.9066 14.9834 22.8192 13.0974 21.3065 11.5824C19.7938 10.0674 17.909 8.97679 15.8414 8.42003C13.7737 7.86328 11.596 7.85995 9.52665 8.41039L18.2274 17.1117L16.7481 24.2531L9.60792 25.7318L0.907182 17.0345ZM55.2411 53.6719L57.3868 53.7775L58.5531 55.5852L60.3616 56.751L60.4672 58.9L61.4507 60.8133L60.4672 62.7266L60.3616 64.8755L58.5531 66.0414L57.3868 67.8491L55.237 67.9547L53.323 68.9378L51.4089 67.9547L49.2591 67.8491L48.0928 66.0414L46.2843 64.8755L46.1787 62.7266L45.1952 60.8133L46.1787 58.9L46.2843 56.751L48.0928 55.5852L49.2591 53.7775L51.4089 53.6719L53.323 52.6888L55.2411 53.6719Z" fill="#EBEBEB"/>
</svg>

    ),
    icon: (
      <svg width="92" height="90" viewBox="0 0 92 90" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M48.2999 8.46353C48.4495 8.00287 49.1012 8.00287 49.2509 8.46353L50.3739 11.9199C50.4409 12.1259 50.6329 12.2654 50.8495 12.2654L54.4837 12.2654C54.9681 12.2654 55.1694 12.8852 54.7776 13.1699L51.8374 15.306C51.6622 15.4333 51.5889 15.659 51.6558 15.865L52.7788 19.3214C52.9285 19.782 52.4013 20.1651 52.0094 19.8804L49.0693 17.7443C48.894 17.6169 48.6567 17.6169 48.4815 17.7443L45.5413 19.8804C45.1495 20.1651 44.6222 19.782 44.7719 19.3214L45.895 15.865C45.9619 15.659 45.8886 15.4333 45.7133 15.306L42.7732 13.1699C42.3813 12.8852 42.5827 12.2654 43.0671 12.2654L46.7013 12.2654C46.9179 12.2654 47.1099 12.1259 47.1768 11.9199L48.2999 8.46353Z" fill="#141414"/>
<path d="M21.1967 75.6292C21.4689 75.9014 21.3443 76.3661 20.9726 76.4657L10.9451 79.1526C10.5733 79.2522 10.2331 78.912 10.3328 78.5402L13.0196 68.5128C13.1192 68.141 13.5839 68.0165 13.8561 68.2886L21.1967 75.6292Z" fill="#9BB5C8"/>
<path d="M0.907182 17.0345C0.357511 19.1018 0.3611 21.2771 0.917587 23.3426C1.47407 25.408 2.56391 27.2909 4.07786 28.8026C5.5918 30.3143 7.47667 31.4016 9.54352 31.9557C11.6104 32.5097 13.7866 32.5109 15.8541 31.9592L41.6231 57.3563C41.0875 59.1749 40.9834 61.0933 41.3189 62.9592C41.6544 64.825 42.4203 66.5871 43.5559 68.1054C44.6915 69.6238 46.1655 70.8567 47.8609 71.7063C49.5563 72.5559 51.4264 72.9989 53.323 73C55.0702 72.9976 56.7964 72.6198 58.3848 71.8922C59.9732 71.1646 61.3866 70.1043 62.5292 68.783C63.6718 67.4617 64.517 65.9103 65.0074 64.234C65.4979 62.5577 65.6221 60.7956 65.3718 59.0671C65.1214 57.3386 64.5023 55.6841 63.5564 54.2157C62.6105 52.7473 61.3599 51.4992 59.8893 50.5561C58.4187 49.613 56.7626 48.9969 55.033 48.7495C53.3034 48.5021 51.5408 48.6292 49.8646 49.1222L24.4573 23.3635C25.0119 21.2961 25.0127 19.1192 24.4597 17.0513C23.9066 14.9834 22.8192 13.0974 21.3065 11.5824C19.7938 10.0674 17.909 8.97679 15.8414 8.42003C13.7737 7.86328 11.596 7.85995 9.52665 8.41039L18.2274 17.1117L16.7481 24.2531L9.60792 25.7318L0.907182 17.0345ZM55.2411 53.6719L57.3868 53.7775L58.5531 55.5852L60.3616 56.751L60.4672 58.9L61.4507 60.8133L60.4672 62.7266L60.3616 64.8755L58.5531 66.0414L57.3868 67.8491L55.237 67.9547L53.323 68.9378L51.4089 67.9547L49.2591 67.8491L48.0928 66.0414L46.2843 64.8755L46.1787 62.7266L45.1952 60.8133L46.1787 58.9L46.2843 56.751L48.0928 55.5852L49.2591 53.7775L51.4089 53.6719L53.323 52.6888L55.2411 53.6719Z" fill="black"/>
</svg>

      
    ),
    title: "Ongoing Maintenance",
    paragraph:
      "At Nexus, we provide regular updates, performance monitoring, and prompt troubleshooting to keep your systems running at their best. ",
  },
  {
    id: 1,
    icon2: (
      <svg width="110" height="95" viewBox="0 0 110 95" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.11278 73.5337C9.38494 73.8058 9.26042 74.2706 8.88863 74.3702L0.843353 76.5259C0.471568 76.6255 0.131361 76.2853 0.23098 75.9135L2.38671 67.8682C2.48633 67.4965 2.95106 67.3719 3.22322 67.6441L9.11278 73.5337Z" fill="#9BB5C8"/>
      <g clip-path="url(#clip0_156_248)">
      <path d="M70.8603 33.1306C71.0724 32.8836 71.2406 32.5904 71.3554 32.2677C71.4702 31.945 71.5293 31.5992 71.5293 31.2499C71.5293 30.9007 71.4702 30.5548 71.3554 30.2322C71.2406 29.9095 71.0724 29.6163 70.8603 29.3693C70.6482 29.1223 70.3964 28.9264 70.1192 28.7928C69.8421 28.6591 69.5451 28.5903 69.2451 28.5903C68.9452 28.5903 68.6482 28.6591 68.371 28.7928C68.0939 28.9264 67.8421 29.1223 67.63 29.3693L37.3076 64.6815L22.954 47.9631C22.7419 47.7161 22.4901 47.5202 22.213 47.3865C21.9359 47.2529 21.6388 47.1841 21.3389 47.1841C20.7331 47.1841 20.1521 47.4643 19.7238 47.9631C19.2954 48.4618 19.0547 49.1383 19.0547 49.8437C19.0547 50.5491 19.2954 51.2255 19.7238 51.7243L35.6925 70.3181C35.9044 70.5654 36.1562 70.7617 36.4333 70.8956C36.7105 71.0295 37.0076 71.0984 37.3076 71.0984C37.6077 71.0984 37.9048 71.0295 38.182 70.8956C38.4591 70.7617 38.7108 70.5654 38.9228 70.3181L70.8603 33.1306ZM51.6613 70.3181L47.5733 65.5527L50.7989 61.7968L53.2764 64.6815L83.5988 29.3693C84.0271 28.8705 84.6081 28.5903 85.2139 28.5903C85.8197 28.5903 86.4006 28.8705 86.829 29.3693C87.2574 29.8681 87.498 30.5446 87.498 31.2499C87.498 31.9553 87.2574 32.6318 86.829 33.1306L54.8915 70.3181C54.6796 70.5654 54.4279 70.7617 54.1507 70.8956C53.8736 71.0295 53.5764 71.0984 53.2764 71.0984C52.9763 71.0984 52.6792 71.0295 52.4021 70.8956C52.1249 70.7617 51.8732 70.5654 51.6613 70.3181Z" fill="#EBEBEB"/>
      <path d="M38.9228 47.9631L43.0108 52.7284L39.7851 56.4843L35.6925 51.7243C35.2641 51.2255 35.0235 50.5491 35.0235 49.8437C35.0235 49.1383 35.2641 48.4618 35.6925 47.9631C36.1209 47.4643 36.7018 47.1841 37.3076 47.1841C37.9134 47.1841 38.4944 47.4643 38.9228 47.9631Z" fill="#EBEBEB"/>
      </g>
      <defs>
      <clipPath id="clip0_156_248">
      <rect width="73" height="85" fill="white" transform="translate(14.4951 10)"/>
      </clipPath>
      </defs>
      </svg>
      
    ),
    icon: (
      <svg width="110" height="95" viewBox="0 0 110 95" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.11278 73.5337C9.38494 73.8058 9.26042 74.2706 8.88863 74.3702L0.843353 76.5259C0.471568 76.6255 0.131361 76.2853 0.23098 75.9135L2.38671 67.8682C2.48633 67.4965 2.95106 67.3719 3.22322 67.6441L9.11278 73.5337Z" fill="#9BB5C8"/>
      <g clip-path="url(#clip0_156_248)">
      <path d="M70.8603 33.1306C71.0724 32.8836 71.2406 32.5904 71.3554 32.2677C71.4702 31.945 71.5293 31.5992 71.5293 31.2499C71.5293 30.9007 71.4702 30.5548 71.3554 30.2322C71.2406 29.9095 71.0724 29.6163 70.8603 29.3693C70.6482 29.1223 70.3964 28.9264 70.1192 28.7928C69.8421 28.6591 69.5451 28.5903 69.2451 28.5903C68.9452 28.5903 68.6482 28.6591 68.371 28.7928C68.0939 28.9264 67.8421 29.1223 67.63 29.3693L37.3076 64.6815L22.954 47.9631C22.7419 47.7161 22.4901 47.5202 22.213 47.3865C21.9359 47.2529 21.6388 47.1841 21.3389 47.1841C20.7331 47.1841 20.1521 47.4643 19.7238 47.9631C19.2954 48.4618 19.0547 49.1383 19.0547 49.8437C19.0547 50.5491 19.2954 51.2255 19.7238 51.7243L35.6925 70.3181C35.9044 70.5654 36.1562 70.7617 36.4333 70.8956C36.7105 71.0295 37.0076 71.0984 37.3076 71.0984C37.6077 71.0984 37.9048 71.0295 38.182 70.8956C38.4591 70.7617 38.7108 70.5654 38.9228 70.3181L70.8603 33.1306ZM51.6613 70.3181L47.5733 65.5527L50.7989 61.7968L53.2764 64.6815L83.5988 29.3693C84.0271 28.8705 84.6081 28.5903 85.2139 28.5903C85.8197 28.5903 86.4006 28.8705 86.829 29.3693C87.2574 29.8681 87.498 30.5446 87.498 31.2499C87.498 31.9553 87.2574 32.6318 86.829 33.1306L54.8915 70.3181C54.6796 70.5654 54.4279 70.7617 54.1507 70.8956C53.8736 71.0295 53.5764 71.0984 53.2764 71.0984C52.9763 71.0984 52.6792 71.0295 52.4021 70.8956C52.1249 70.7617 51.8732 70.5654 51.6613 70.3181Z" fill="#9BB5C8"/>
      <path d="M38.9228 47.9631L43.0108 52.7284L39.7851 56.4843L35.6925 51.7243C35.2641 51.2255 35.0235 50.5491 35.0235 49.8437C35.0235 49.1383 35.2641 48.4618 35.6925 47.9631C36.1209 47.4643 36.7018 47.1841 37.3076 47.1841C37.9134 47.1841 38.4944 47.4643 38.9228 47.9631Z" fill="#9BB5C8"/>
      </g>
      <defs>
      <clipPath id="clip0_156_248">
      <rect width="73" height="85" fill="white" transform="translate(14.4951 10)"/>
      </clipPath>
      </defs>
      </svg>
      
    ),
    title: "Software Testing",
    paragraph:
      "Our QA team employs a variety of testing methodologies, including functional, performance, and security testing, to resolve any issues before deployment.",
  },
  {
    id: 1,
    icon2: (
      <svg width="95" height="90" viewBox="0 0 95 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M70.2521 9.46352C70.4017 9.00287 71.0535 9.00287 71.2031 9.46353L72.1267 12.3059C72.1936 12.5119 72.3856 12.6514 72.6022 12.6514H75.5908C76.0752 12.6514 76.2766 13.2712 75.8847 13.5559L73.4669 15.3125C73.2916 15.4398 73.2183 15.6655 73.2852 15.8715L74.2088 18.7139C74.3584 19.1745 73.8312 19.5576 73.4393 19.2729L71.0215 17.5162C70.8462 17.3889 70.609 17.3889 70.4337 17.5162L68.0159 19.2729C67.624 19.5576 67.0968 19.1745 67.2464 18.7139L68.17 15.8715C68.2369 15.6655 68.1636 15.4398 67.9883 15.3125L65.5705 13.5559C65.1786 13.2712 65.38 12.6514 65.8644 12.6514H68.853C69.0696 12.6514 69.2616 12.5119 69.3285 12.3059L70.2521 9.46352Z" fill="#808080"/>
      <path d="M11.9646 51.9894C12.2367 52.2615 12.1122 52.7263 11.7404 52.8259L1.43086 55.5883C1.05908 55.688 0.718869 55.3478 0.818488 54.976L3.58093 44.6664C3.68055 44.2946 4.14528 44.1701 4.41745 44.4423L11.9646 51.9894Z" fill="#9BB5C8"/>
      <path d="M46.0285 22.5066C39.8657 22.5066 33.9554 24.6699 29.5976 28.5206C25.2399 32.3714 22.7918 37.5941 22.7918 43.0399V47.1466H27.4391C28.6716 47.1466 29.8537 47.5792 30.7253 48.3494C31.5968 49.1195 32.0864 50.1641 32.0864 51.2532V63.5732C32.0864 64.6624 31.5968 65.7069 30.7253 66.4771C29.8537 67.2472 28.6716 67.6799 27.4391 67.6799H22.7918C21.5592 67.6799 20.3771 67.2472 19.5056 66.4771C18.634 65.7069 18.1444 64.6624 18.1444 63.5732V43.0399C18.1444 39.8041 18.8657 36.6 20.267 33.6106C21.6683 30.6211 23.7222 27.9048 26.3115 25.6168C28.9007 23.3288 31.9747 21.5138 35.3577 20.2755C38.7408 19.0372 42.3667 18.3999 46.0285 18.3999C49.6903 18.3999 53.3162 19.0372 56.6992 20.2755C60.0823 21.5138 63.1562 23.3288 65.7455 25.6168C68.3347 27.9048 70.3887 30.6211 71.79 33.6106C73.1913 36.6 73.9125 39.8041 73.9125 43.0399V67.6799C73.9125 70.4028 72.6885 73.0142 70.5096 74.9395C68.3307 76.8649 65.3755 77.9466 62.2942 77.9466H52.3767C51.9689 78.5708 51.3822 79.0893 50.6757 79.4497C49.9693 79.8101 49.1679 79.9999 48.3521 79.9999H43.7048C42.4722 79.9999 41.2902 79.5672 40.4186 78.7971C39.5471 78.0269 39.0575 76.9824 39.0575 75.8932C39.0575 74.8041 39.5471 73.7595 40.4186 72.9894C41.2902 72.2192 42.4722 71.7866 43.7048 71.7866H48.3521C49.1679 71.7866 49.9693 71.9763 50.6757 72.3368C51.3822 72.6972 51.9689 73.2156 52.3767 73.8399H62.2942C64.143 73.8399 65.9161 73.1909 67.2234 72.0357C68.5307 70.8805 69.2652 69.3136 69.2652 67.6799H64.6178C63.3853 67.6799 62.2032 67.2472 61.3317 66.4771C60.4601 65.7069 59.9705 64.6624 59.9705 63.5732V51.2532C59.9705 50.1641 60.4601 49.1195 61.3317 48.3494C62.2032 47.5792 63.3853 47.1466 64.6178 47.1466H69.2652V43.0399C69.2652 40.3434 68.6642 37.6734 67.4964 35.1821C66.3286 32.6909 64.617 30.4273 62.4593 28.5206C60.3016 26.6139 57.74 25.1015 54.9208 24.0696C52.1016 23.0377 49.08 22.5066 46.0285 22.5066Z" fill="#EBEBEB"/>
      </svg>
      
    ),
    icon: (
      <svg width="95" height="90" viewBox="0 0 95 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M70.2521 9.46352C70.4017 9.00287 71.0535 9.00287 71.2031 9.46353L72.1267 12.3059C72.1936 12.5119 72.3856 12.6514 72.6022 12.6514H75.5908C76.0752 12.6514 76.2766 13.2712 75.8847 13.5559L73.4669 15.3125C73.2916 15.4398 73.2183 15.6655 73.2852 15.8715L74.2088 18.7139C74.3584 19.1745 73.8312 19.5576 73.4393 19.2729L71.0215 17.5162C70.8462 17.3889 70.609 17.3889 70.4337 17.5162L68.0159 19.2729C67.624 19.5576 67.0968 19.1745 67.2464 18.7139L68.17 15.8715C68.2369 15.6655 68.1636 15.4398 67.9883 15.3125L65.5705 13.5559C65.1786 13.2712 65.38 12.6514 65.8644 12.6514H68.853C69.0696 12.6514 69.2616 12.5119 69.3285 12.3059L70.2521 9.46352Z" fill="#141414"/>
      <path d="M11.9646 51.9894C12.2367 52.2615 12.1122 52.7263 11.7404 52.8259L1.43086 55.5883C1.05908 55.688 0.718869 55.3478 0.818488 54.976L3.58093 44.6664C3.68055 44.2946 4.14528 44.1701 4.41745 44.4423L11.9646 51.9894Z" fill="#9BB5C8"/>
      <path d="M46.0285 22.5066C39.8657 22.5066 33.9554 24.6699 29.5976 28.5206C25.2399 32.3714 22.7918 37.5941 22.7918 43.0399V47.1466H27.4391C28.6716 47.1466 29.8537 47.5792 30.7253 48.3494C31.5968 49.1195 32.0864 50.1641 32.0864 51.2532V63.5732C32.0864 64.6624 31.5968 65.7069 30.7253 66.4771C29.8537 67.2472 28.6716 67.6799 27.4391 67.6799H22.7918C21.5592 67.6799 20.3771 67.2472 19.5056 66.4771C18.634 65.7069 18.1444 64.6624 18.1444 63.5732V43.0399C18.1444 39.8041 18.8657 36.6 20.267 33.6106C21.6683 30.6211 23.7222 27.9048 26.3115 25.6168C28.9007 23.3288 31.9747 21.5138 35.3577 20.2755C38.7408 19.0372 42.3667 18.3999 46.0285 18.3999C49.6903 18.3999 53.3162 19.0372 56.6992 20.2755C60.0823 21.5138 63.1562 23.3288 65.7455 25.6168C68.3347 27.9048 70.3887 30.6211 71.79 33.6106C73.1913 36.6 73.9125 39.8041 73.9125 43.0399V67.6799C73.9125 70.4028 72.6885 73.0142 70.5096 74.9395C68.3307 76.8649 65.3755 77.9466 62.2942 77.9466H52.3767C51.9689 78.5708 51.3822 79.0893 50.6757 79.4497C49.9693 79.8101 49.1679 79.9999 48.3521 79.9999H43.7048C42.4722 79.9999 41.2902 79.5672 40.4186 78.7971C39.5471 78.0269 39.0575 76.9824 39.0575 75.8932C39.0575 74.8041 39.5471 73.7595 40.4186 72.9894C41.2902 72.2192 42.4722 71.7866 43.7048 71.7866H48.3521C49.1679 71.7866 49.9693 71.9763 50.6757 72.3368C51.3822 72.6972 51.9689 73.2156 52.3767 73.8399H62.2942C64.143 73.8399 65.9161 73.1909 67.2234 72.0357C68.5307 70.8805 69.2652 69.3136 69.2652 67.6799H64.6178C63.3853 67.6799 62.2032 67.2472 61.3317 66.4771C60.4601 65.7069 59.9705 64.6624 59.9705 63.5732V51.2532C59.9705 50.1641 60.4601 49.1195 61.3317 48.3494C62.2032 47.5792 63.3853 47.1466 64.6178 47.1466H69.2652V43.0399C69.2652 40.3434 68.6642 37.6734 67.4964 35.1821C66.3286 32.6909 64.617 30.4273 62.4593 28.5206C60.3016 26.6139 57.74 25.1015 54.9208 24.0696C52.1016 23.0377 49.08 22.5066 46.0285 22.5066Z" fill="black"/>
      </svg>
      
    ),
    title: "IT Consulting & Support",
    paragraph:
      "We provide strategic advice, implementation support, and ongoing management to optimize your technology investments.",
  },
];
export default ServicesData;
