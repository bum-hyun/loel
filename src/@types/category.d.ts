interface ICategory {
  id?: number;
  category: string;
  name: string;
  isUse: boolean;
  order: number;
  parent?: string | null;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
}

interface ICategoryWithChildren extends ICategory {
  children?: ICategory[];
}
