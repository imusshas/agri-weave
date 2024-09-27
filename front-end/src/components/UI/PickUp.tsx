import { getDeliveryList } from "../../repo/getDeliveryList";
import { DeliverEntity } from "../../types/types";
import { DeliverProduct } from "./DeliverProduct";

export const PickUp = () => {

  const deliveries = getDeliveryList() as DeliverEntity[];

  return (
    <section className="flex-col gap-section">
      <h2 className="text-large text-green">Delivered Products</h2>
      <section className="grid">
        {deliveries.map((curDelivery) => (
          <DeliverProduct key={curDelivery.id} delivery={curDelivery} pickUp />
        ))}
      </section>
    </section>
  );
};
