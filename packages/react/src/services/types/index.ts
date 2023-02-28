export interface RootResponse<Data> {
  data: Data;
  message: 'success' | 'error';
  status: boolean;
  statusCode: number;
}
export interface Meta {
  currentPage: number;
  itemCount: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
}

export interface Link {
  first: string;
  last: string;
  next: string;
  previous: string;
}

export interface User {
  avatarUrl?: string;
  customerId?: string;
  email: string;
  firstName: string;
  id: string;
  lastName?: string;
  roles: string;
  status: string;
  username?: string;
}
export interface Campaign {
  commission: number;
  createdAt: string;
  endTime?: number;
  highPrice: number;
  id: string;
  lowPrice: number;
  name: string;
  netIncome: number;
  numberOfItems: number;
  owner: User;
  project: string;
  revenue: number;
  secret: string;
  startTime?: number;
  status?: string;
  totalSoldItems: number;
  updatedAt: string;
  widgetId: string;
}
export interface Nft {
  attributes?: Array<{ [key: string]: string }>;
  collection?: Collection;
  createdAt?: string;
  createdBy?: User;
  description?: string;
  exchangeId?: string;
  id: string;
  image?: string;
  imagePreview?: string;
  isPutOnMarket: boolean;
  mintTxHash?: string;
  name: string;
  nftId: string;
  nftType?: string;
  orders?: Array<Order>;
  owner?: User;
  project?: Project;
  status: string;
  updatedAt?: string;
}
export interface Collection {
  bannerImage?: string;
  category?: string;
  chain?: string;
  createdAt: string;
  createdBy?: User;
  description?: string;
  featuredImage?: string;
  id: string;
  logoImage?: string;
  name: string;
  nftContractAddress?: string;
  nftType?: string;
  owner?: User;
  project: Project;
  status: string;
  totalNfts?: number;
  updatedAt: string;
  url?: string;
}
export interface Project {
  apiSecret: string;
  createdAt: string;
  createdBy: string;
  description: string;
  id: string;
  image: string;
  name: string;
  status: string;
  totalCollection: number;
  updatedAt: string;
  user: User;
  userTable: string;
}
export interface Order {
  createdAt?: string;
  id?: string;
  nftId?: string;
  owner?: User;
  paymentId?: string;
  priceIdInPayment?: string;
  prices?: Array<Price>;
  status?: 'active' | 'cancel' | 'complete' | 'locking' | 'pending';
  type?: 'auction' | 'buy' | 'sell';
  updatedAt?: string;
}

export interface Price {
  createdAt?: string;
  currency?: string;
  exchange?: Exchange;
  id?: string;
  nftId?: string;
  orderId?: string;
  owner?: string;
  price?: number;
  status?: 'active' | 'cancel' | 'complete' | 'in_payment' | 'inactive' | 'pending';
  type?: 'buy' | 'campaign' | 'sell';
  updatedAt?: string;
}

export interface Exchange {
  id: string;
  image?: string;
  name?: string;
  owner?: string;
  project?: string;
  status?: 'created' | 'failed' | 'removed';
}
