interface IPost {
  id?: string;
  email?: string;
  category?: string | null;
  html?: string;
  markdown?: string;
  title?: string;
  image?: string[]
}

interface IReadPost extends IPost {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
}

interface IPosts {
  label: string;
  items: IReadPost[];
}

interface IResponsePosts {
  items: IReadPost[];
  totalCount: number;
}
