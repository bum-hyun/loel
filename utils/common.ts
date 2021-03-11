import dayjs from "dayjs";

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

export const dateDisplay = (date: string) => {
  const nowDate = new Date();
  const compareDate = new Date(date);
  const dayGap = nowDate.getDate() - compareDate.getDate();

  return dayGap > 7 ? dayjs(date).format("YYYY년 MM월 DD일 hh시 mm분 ss초") : dayjs(date).fromNow();
};
