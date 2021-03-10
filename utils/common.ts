export const thumbnail = (images: string[]) => {
  return images[0].replace(/\/original\//, "/thumb/");
};

export const decodeHTML = (item: IReadPost) => {
  const content = item.html!.replace(/(<([^>]+)>)/gi, "");
  if (item.image && item.image.length > 0) {
    return content.substring(0, 150);
  } else {
    return content.substring(0, 500);
  }
};

export const decodeHTMLForHeader = (html?: string) => {
  const content = html!.replace(/(<([^>]+)>)/gi, "");
  return content.substring(0, 150);
};
