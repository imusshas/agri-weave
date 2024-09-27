import { useLoaderData } from "react-router-dom";
import { SchemeEntity } from "../../types/types";
import { InvestProduct } from "./InvestProduct";

export const Invest = () => {
  const schemes = useLoaderData() as SchemeEntity[];

  return (
    <section className="grid" >
      {schemes.map((curScheme) => (
        <InvestProduct key={curScheme.schemeId} scheme={curScheme} invest />
      ))}
    </section>
  );
};
