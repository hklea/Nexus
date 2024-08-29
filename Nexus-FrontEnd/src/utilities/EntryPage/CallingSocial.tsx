export const openTikTokPage = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = "yourapp://app-page";
    } else {
      window.open("https://www.tiktok.com/", "_blank");
    }
  };

  export  const openInstagramPage = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href = "yourapp://app-page";
    } else {
      //Change it to the insta of the company
      window.open("https://www.instagram.com/david__keci/", "_blank");
    }
  };


 export const handleWhatsAppClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    const whatsappUrl = isMobile
      ? "https://wa.me/+355677564436" // Mobile-specific URL
      : "https://web.whatsapp.com/send?phone=+355677564436"; // Web-specific URL

    window.open(whatsappUrl, "_blank");
  };