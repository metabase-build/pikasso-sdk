import { Order } from '@/services/types';

export const getAvailableListingPrice = (orders: Array<Order>) => {
  const activeOrders = orders.find((order) => order.status === 'active');
  if (!activeOrders) {
    return undefined;
  }

  return activeOrders.prices?.find((price) => price.status === 'active');
};
