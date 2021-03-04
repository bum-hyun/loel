export const thumbnail = (item: IReadPost) => {
  if (item.image && item.image.length > 0) {
    return item.image[0].replace(/\/original\//, "/thumb/");
  } else {
    return "https://images.loelblog.com/thumb/1614754054423background.jpg";
  }
};
