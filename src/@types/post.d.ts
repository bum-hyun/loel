interface IPost {
  id?: string | number;
  email: string;
  category: string | null;
  html: string;
  markdown: string;
  html2: string;
  title: string;
  image?: string[]
  comments?: IComments[];
}

interface IReadPost extends IPost {
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
  user: IOneself
}

interface IOneself {
  email: string;
  name: string;
}

interface IWriteComment {
  name: string;
  password: string;
  contents: string;
  parent?: number;
  class: number;
}

interface IComments {
  id: number | string;
  name: string;
  email?: string;
  contents: string;
  parent?: number;
  class: number;
  createdAt: string;
}
