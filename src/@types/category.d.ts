interface ICategory {
  id?: number;
  category: string;
  isUse: boolean;
  order: number;
  parent?: string | null;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  link: string;
}

interface ICategoryWithChildren extends ICategory {
  children?: ICategory[];
}
