export {};

declare global {
  interface Product {
    id: number;
    name: string;
    thumbnailUrl: string;
    sku: string;
    description: string;
    defaultDisplayedPriceFormatted: string;
    inStock: boolean;
    categories: Categories;
  }

  interface Products {
    count: number;
    items: Array<Product>;
  }

  interface Categories {
    count: number;
    parentCategoryId: number;
    items: Array<Category>;
  }

  interface Category {
    id: number;
    name: string;
    thumbnailUrl: string;
    productCount: number;
  }

  interface shareOption {
    name: string;
    icon: string;
    url: string;
  }
}
