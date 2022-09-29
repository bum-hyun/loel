import dayjs from "dayjs";

const getYoutubeId = (html: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const idContainer = doc.querySelectorAll("[data-language='youtube']")[0];
  if (idContainer) {
    return { id: idContainer.textContent, html: doc.body.innerHTML };
  } else {
    return null;
  }
};

export const getThumbnail = (html: string) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const thumbnailTarget = doc.querySelectorAll("img, [data-language='youtube']")[0];
  if (thumbnailTarget) {
    if (thumbnailTarget.nodeName === "IMG") {
      return thumbnailTarget.getAttribute("src")!.replace(/\/contents\//, "/thumb/");
    } else {
      return `https://img.youtube.com/vi/${thumbnailTarget.textContent}/0.jpg`;
    }
  } else {
    return null;
  }
};

export const decodeHTML = (item: IReadPost) => {
  let html: string;
  const youtubeId = getYoutubeId(item.html) ? getYoutubeId(item.html)!.id : "";

  if (youtubeId) {
    html = getYoutubeId(item.html)!.html;
  } else {
    html = item.html;
  }
  const content = html.replace(/(<([^>]+)>)/gi, "");
  if (getThumbnail(html)) {
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
