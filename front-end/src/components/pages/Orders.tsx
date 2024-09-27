import { useLoaderData } from "react-router-dom";
import { OrderEntity } from "../../types/types";
import { OrderItem } from "../UI/OrderItem";

export const Orders = () => {
  const orders = useLoaderData() as OrderEntity[];

  return (
    <section className="flex-col" >
      {orders.map((curOrder) => (
        <OrderItem key={curOrder.orderId} order={curOrder} />
      ))}
    </section>
  );
};
