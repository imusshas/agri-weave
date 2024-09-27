import { useLoaderData } from "react-router-dom";
import { DeliverEntity } from "../../types/types";
import { DeliverProduct } from "./DeliverProduct";

export const Deliver = () => {
  const deliveries = useLoaderData() as DeliverEntity[];

  return (
    <section className="grid" >
      {deliveries.map((curDelivery) => (
        <DeliverProduct key={curDelivery.id} delivery={curDelivery} />
      ))}
    </section>
  );
};
