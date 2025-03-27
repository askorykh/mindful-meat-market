
export type MeatCategory = {
  id: string;
  name: string;
  icon: string;
  description: string;
};

export type MeatItem = {
  id: string;
  name: string;
  category: string;
  averagePrice: number;
  unit: string;
  priceRange: {
    min: number;
    max: number;
  };
  image: string;
  trend: 'up' | 'down' | 'stable';
  percentChange: number;
  stores: Store[];
};

export type Store = {
  id: string;
  name: string;
  logo?: string;
  price: number;
  unit: string;
  lastUpdated: string;
};
