export const openTikTokPage = () => {
  // const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // if (isMobile) {
  //   window.location.href = "https://www.tiktok.com/@david";
  // } else {
  //   window.open("https://www.tiktok.com/@david", "_blank");
  // }
};


export const openInstagramPage = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    window.location.href = "instagram://user?username=chief.soft24";
  } else {
    window.open("https://www.instagram.com/chief.soft24/", "_blank");
  }
};


 export const handleWhatsAppClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const whatsappUrl = isMobile
      ? "https://wa.me/+355677564436" 
      : "https://web.whatsapp.com/send?phone=+355677564436"; 

    window.open(whatsappUrl, "_blank");
  };