export const ValidateVideo = async (youtubeVideoId: string) => {
  const url = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${youtubeVideoId}&format=json`;

  try {
    const response = await fetch(url);
    console.log(response.status);
    if (response.status >= 400) {
      return false; // El video existe
    }
    return true; 

  } catch (error) {
      console.error("Error verificando el video:", error);
  } 
};
