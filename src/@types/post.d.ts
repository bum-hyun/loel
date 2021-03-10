interface IPost {
  id?: string;
  email?: string;
  category?: string | null;
  html?: string;
  markdown?: string;
  html2?: string;
  title?: string;
  image?: string[]
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
  nickname: string;
  password: string;
  contents: string;
}
