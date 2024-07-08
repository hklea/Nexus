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
      <svg width="221" height="144" viewBox="0 0 221 144" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.0805 71.5324C12.3527 71.8045 12.2282 72.2692 11.8564 72.3689L1.54683 75.1313C1.17504 75.2309 0.834836 74.8907 0.934455 74.5189L3.6969 64.2094C3.79652 63.8376 4.26125 63.7131 4.53341 63.9852L12.0805 71.5324Z" fill="#9BB5C8"/>
      </svg>
      
    ),
    icon: (
      <svg width="243" height="194" viewBox="0 0 243 194" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="243" height="194" fill="white"/>
      <mask id="mask0_161_348"  maskUnits="userSpaceOnUse" x="67" y="48" width="66" height="64">
      <path d="M100 67.0156C98.2416 67.0156 96.5004 67.3515 94.8757 68.004C93.2511 68.6566 91.7749 69.613 90.5315 70.8188C89.2881 72.0245 88.3017 73.456 87.6288 75.0314C86.9559 76.6068 86.6095 78.2952 86.6095 80.0004C86.6095 81.7056 86.9559 83.3941 87.6288 84.9695C88.3017 86.5449 89.2881 87.9763 90.5315 89.1821C91.7749 90.3878 93.2511 91.3443 94.8757 91.9968C96.5004 92.6494 98.2416 92.9853 100 92.9853C103.551 92.9853 106.957 91.6172 109.469 89.1821C111.98 86.747 113.391 83.4442 113.391 80.0004C113.391 76.5567 111.98 73.2539 109.469 70.8188C106.957 68.3837 103.551 67.0156 100 67.0156ZM90.7348 80.0004C90.7348 77.6176 91.7109 75.3323 93.4485 73.6474C95.1861 71.9625 97.5428 71.0159 100 71.0159C102.457 71.0159 104.814 71.9625 106.552 73.6474C108.289 75.3323 109.265 77.6176 109.265 80.0004C109.265 82.3833 108.289 84.6685 106.552 86.3535C104.814 88.0384 102.457 88.985 100 88.985C97.5428 88.985 95.1861 88.0384 93.4485 86.3535C91.7109 84.6685 90.7348 82.3833 90.7348 80.0004Z" fill="white"/>
      <path d="M107.409 53.3703C105.235 46.2099 94.765 46.2099 92.591 53.3703L92.2033 54.6464C92.0514 55.1463 91.7862 55.6068 91.427 55.9943C91.0677 56.3819 90.6236 56.6865 90.1272 56.886C89.6308 57.0854 89.0946 57.1746 88.558 57.147C88.0214 57.1195 87.498 56.9758 87.0261 56.7265L85.8215 56.0865C79.0561 52.5183 71.6595 59.6947 75.3433 66.2511L75.9993 67.4192C76.2563 67.8768 76.4044 68.3844 76.4329 68.9047C76.4613 69.4251 76.3693 69.945 76.1637 70.4264C75.958 70.9078 75.6438 71.3384 75.2442 71.6867C74.8445 72.0351 74.3696 72.2923 73.8541 72.4395L72.5382 72.8156C65.1539 74.9237 65.1539 85.0763 72.5382 87.1845L73.8541 87.5605C74.3696 87.7077 74.8445 87.9649 75.2442 88.3133C75.6438 88.6616 75.958 89.0923 76.1637 89.5736C76.3693 90.055 76.4613 90.5749 76.4329 91.0953C76.4044 91.6156 76.2563 92.1232 75.9993 92.5808L75.3392 93.7489C71.6595 100.309 79.0561 107.486 85.8215 103.91L87.0261 103.273C87.498 103.024 88.0214 102.881 88.558 102.853C89.0946 102.825 89.6308 102.915 90.1272 103.114C90.6236 103.313 91.0677 103.618 91.427 104.006C91.7862 104.393 92.0514 104.854 92.2033 105.354L92.591 106.63C94.765 113.79 105.235 113.79 107.409 106.63L107.797 105.354C107.949 104.854 108.214 104.393 108.573 104.006C108.932 103.618 109.376 103.313 109.873 103.114C110.369 102.915 110.905 102.825 111.442 102.853C111.979 102.881 112.502 103.024 112.974 103.273L114.179 103.913C120.944 107.486 128.345 100.305 124.657 93.7489L124.001 92.5808C123.744 92.1232 123.596 91.6156 123.567 91.0953C123.539 90.5749 123.631 90.055 123.836 89.5736C124.042 89.0923 124.356 88.6616 124.756 88.3133C125.155 87.9649 125.63 87.7077 126.146 87.5605L127.462 87.1845C134.846 85.0763 134.846 74.9237 127.462 72.8156L126.146 72.4395C125.63 72.2923 125.155 72.0351 124.756 71.6867C124.356 71.3384 124.042 70.9078 123.836 70.4264C123.631 69.945 123.539 69.4251 123.567 68.9047C123.596 68.3844 123.744 67.8768 124.001 67.4192L124.661 66.2511C128.345 59.6907 120.94 52.5183 114.179 56.0905L112.974 56.7265C112.502 56.9758 111.979 57.1195 111.442 57.147C110.905 57.1746 110.369 57.0854 109.873 56.886C109.376 56.6865 108.932 56.3819 108.573 55.9943C108.214 55.6068 107.949 55.1463 107.797 54.6464L107.409 53.3703ZM96.5472 54.5024C97.562 51.1622 102.438 51.1622 103.453 54.5024L103.841 55.7785C104.167 56.8509 104.736 57.839 105.507 58.6703C106.278 59.5016 107.231 60.155 108.296 60.5827C109.361 61.0104 110.512 61.2015 111.663 61.142C112.815 61.0825 113.938 60.7739 114.95 60.2388L116.15 59.5987C119.302 57.9386 122.751 61.2788 121.035 64.339L120.379 65.5071C119.828 66.4889 119.51 67.5777 119.45 68.6939C119.389 69.8101 119.586 70.9253 120.028 71.9578C120.469 72.9904 121.143 73.914 122.001 74.6612C122.858 75.4083 123.877 75.96 124.983 76.2758L126.294 76.6518C129.739 77.6359 129.739 82.3642 126.294 83.3482L124.978 83.7242C123.873 84.0403 122.854 84.5924 121.996 85.34C121.139 86.0877 120.465 87.0118 120.024 88.0448C119.583 89.0778 119.386 90.1934 119.447 91.3098C119.509 92.4263 119.827 93.5152 120.379 94.4969L121.039 95.661C122.751 98.7172 119.306 102.061 116.15 100.397L114.95 99.7612C113.937 99.2262 112.814 98.9177 111.662 98.8585C110.511 98.7992 109.36 98.9907 108.295 99.4188C107.23 99.8469 106.277 100.501 105.506 101.333C104.735 102.164 104.166 103.153 103.841 104.226L103.453 105.498C102.438 108.838 97.562 108.838 96.5472 105.498L96.1594 104.222C95.8333 103.15 95.264 102.162 94.4933 101.331C93.7226 100.5 92.77 99.8472 91.7053 99.4196C90.6406 98.9919 89.4907 98.8007 88.3398 98.8598C87.189 98.9189 86.0664 99.2269 85.0542 99.7612L83.8496 100.401C80.6979 102.061 77.2492 98.7212 78.9653 95.661L79.6212 94.4969C80.1738 93.5151 80.4927 92.4258 80.5545 91.3088C80.6162 90.1919 80.4194 89.0758 79.9782 88.0423C79.5371 87.0088 78.863 86.0842 78.0053 85.3363C77.1476 84.5884 76.1281 84.0362 75.0216 83.7202L73.7056 83.3442C70.261 82.3602 70.261 77.6319 73.7056 76.6478L75.0216 76.2718C76.1263 75.9554 77.1442 75.4035 78.0006 74.6564C78.857 73.9094 79.5303 72.9861 79.9713 71.9541C80.4122 70.9222 80.6096 69.8077 80.5491 68.6922C80.4885 67.5767 80.1715 66.4884 79.6212 65.5071L78.9612 64.339C77.2492 61.2828 80.6938 57.9386 83.8496 59.6027L85.0542 60.2388C86.0664 60.7731 87.189 61.0811 88.3398 61.1402C89.4907 61.1994 90.6406 61.0081 91.7053 60.5805C92.77 60.1528 93.7226 59.4996 94.4933 58.6688C95.264 57.8379 95.8333 56.8503 96.1594 55.7785L96.5472 54.5024Z" fill="white"/>
      </mask>
      <g mask="url(#mask0_161_348)">
      <rect x="62" y="38" width="102" height="97" fill="black"/>
      </g>
      <g opacity="0.55">
      <mask id="mask1_161_348"  maskUnits="userSpaceOnUse" x="104" y="32" width="48" height="48">
      <circle cx="127.788" cy="55.7884" r="23.7884" fill="#282828"/>
      </mask>
      <g mask="url(#mask1_161_348)">
      <rect x="53" y="32" width="137" height="74" fill="#D9D9D9"/>
      </g>
      </g>
      <mask id="mask2_161_348"  maskUnits="userSpaceOnUse" x="69" y="48" width="100" height="90">
      <path d="M81.0779 119.532C81.35 119.805 81.2255 120.269 80.8537 120.369L70.5441 123.131C70.1724 123.231 69.8322 122.891 69.9318 122.519L72.6942 112.209C72.7938 111.838 73.2586 111.713 73.5307 111.985L81.0779 119.532Z" fill="#9BB5C8"/>
      <circle cx="162.382" cy="76.8867" r="5.88667" fill="white"/>
      <ellipse cx="98.9951" cy="135" rx="3.5" ry="3" fill="white"/>
      </mask>
      <g mask="url(#mask2_161_348)">
      <rect x="8" y="18" width="187" height="154" fill="black"/>
      </g>
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
