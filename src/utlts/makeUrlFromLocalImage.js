export const createSingleUrlToImage = (images) => {
  const selectedFile = images[0];
  const image = URL.createObjectURL(selectedFile);
  return image;
};
