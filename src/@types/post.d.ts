interface IPost {
  id?: string;
  email?: string;
  category?: string | null;
  html?: string;
  markdown?: string;
  html2?: string;
  title?: string;
  image?: string[]
  comments?: IComments[];
}

interface IReadPost extends IPost {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
  user: IOneself
}

interface IPosts {
  label: string;
  items: IReadPost[];
}

interface IResponsePosts {
  items: IReadPost[];
  totalCount: number;
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
