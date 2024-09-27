import { getSchemeList } from "../../repo/getSchemeList";
import { SchemeEntity } from "../../types/types";
import { InvestProduct } from "./InvestProduct";
import { ProductForm } from "./ProductForm";

export const Scheme = () => {
  const schemes = getSchemeList() as SchemeEntity[];
  return (
    <section className="flex-col gap-section">
      <ProductForm scheme />
      <h2 className="text-large text-green">Raised Schemes</h2>
      <section className="grid">
        {schemes.map((curScheme) => (
          <InvestProduct key={curScheme.schemeId} scheme={curScheme} />
        ))}
      </section>
    </section>
  );
};
