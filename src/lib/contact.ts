export const WHATSAPP_NUMBER = "5561992212024";

export const WHATSAPP_DEFAULT_TEXT =
  "ola! acessei o site da SÓ Multas Lago Sul e tenho interesse em saber mais.";

export const getWhatsAppLink = (message: string = WHATSAPP_DEFAULT_TEXT) =>
  `https://wa.me/${WHATSAPP_NUMBER}/?text=${encodeURIComponent(message)}`;
