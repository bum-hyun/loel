export const thumbnail = (images: string[]) => {
  return images[0].replace(/\/original\//, "/original/");
};
