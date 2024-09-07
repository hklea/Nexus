export const openTikTokPage = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    // Open TikTok user profile via web link (may open the app if installed)
    window.location.href = "https://www.tiktok.com/@david";
  } else {
    window.open("https://www.tiktok.com/@david", "_blank");
  }
};


export const openInstagramPage = () => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    // Open Instagram user profile directly in the app
    window.location.href = "instagram://user?username=david__keci";
  } else {
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