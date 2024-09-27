import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Form } from "react-router-dom";

type ProductFormValues = {
  productImage1: FileList;
  productImag2: FileList;
  productImag3: FileList;
  productImag4: FileList;
  productImag5: FileList;
  productName: string;
  price: number;
  priceUnit: string;
  unitQuantity: number;
  unitUnit: string;
  stock: number;
  stockUnit: string;
  description: string;
};

type ValidatedFieldsClass = {
  productName: string;
  price: string;
  priceUnit: string;
  unitQuantity: string;
  unitUnit: string;
  stock: string;
  stockUnit: string;
  description: string;
};

interface ProductFormProps {
  request?: boolean;
  scheme?: boolean;
}

export const ProductForm: React.FC<ProductFormProps> = ({ request, scheme }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormValues>({ mode: "onTouched" });

  const onSubmit: SubmitHandler<ProductFormValues> = (data) => {
    console.log(data);
  };

  const priceCondition = request ? "Expected Price" : scheme ? "Minimum Amount" : "Price";
  const quantityCondition = request ? "Required Quantity" : scheme ? "Required Amount" : "Quantity";
  const stockCondition = scheme ? "Maximum Amount" : "Stock";
  const descriptionCondition = scheme ? "Scheme" : "Description";
  const descriptionCharacterCondition = scheme ? 10 : 100;
  const buttonCondition = request ? "Request" : scheme ? "Scheme" : "Sell";

  const errorClass: ValidatedFieldsClass = {
    productName: errors.productName?.message ? "error" : "",
    price: errors.price?.message ? "error" : "",
    priceUnit: errors.priceUnit?.message ? "error" : "",
    unitQuantity: errors.unitQuantity?.message ? "error" : "",
    unitUnit: errors.unitUnit?.message ? "error" : "",
    stock: errors.stock?.message ? "error" : "",
    stockUnit: errors.stockUnit?.message ? "error" : "",
    description: errors.description?.message ? "error" : "",
  };

  return (
    <Form method="POST" onSubmit={handleSubmit(onSubmit)} className="flex-col margin-center">
      <div className="flex flex-gap-medium vertical self-center">
        <div>
          <label htmlFor="sellProductImage1">
            <img src="" alt="Image 1" />
          </label>
          <input
            type="file"
            id="sellProductImage1"
            autoComplete="off"
            accept="image/*"
            {...register("productImage1", { required: "Please select an image" })}
          />
          <p className="text-error">{errors.productImage1?.message}</p>
        </div>

        {!request && !scheme && (
          <>
            <div>
              <label htmlFor="sellProductImage2">
                <img src="" alt="Image 2" />
              </label>
              <input
                type="file"
                id="sellProductImage2"
                autoComplete="off"
                accept="image/*"
                {...register("productImag2")}
              />
            </div>
            <div>
              <label htmlFor="sellProductImage3">
                <img src="" alt="Image 3" />
              </label>
              <input
                type="file"
                id="sellProductImage3"
                autoComplete="off"
                accept="image/*"
                {...register("productImag3")}
              />
            </div>
            <div>
              <label htmlFor="sellProductImage4">
                <img src="" alt="Image 4" />
              </label>
              <input
                type="file"
                id="sellProductImage4"
                autoComplete="off"
                accept="image/*"
                {...register("productImag4")}
              />
            </div>
            <div>
              <label htmlFor="sellProductImage5">
                <img src="" alt="Image 5" />
              </label>
              <input
                type="file"
                id="sellProductImage5"
                autoComplete="off"
                accept="image/*"
                {...register("productImag5")}
              />
            </div>
          </>
        )}
      </div>

      <div className="flex flex-gap-medium">
        <label htmlFor="sellProductName">Product Name:</label>
        <div className="flex-col gap-zero flex-1">
          <input
            type="text"
            id="sellProductName"
            autoComplete="off"
            className={`flex-1 ${errorClass.productName}`}
            {...register("productName", {
              required: "Product name is required",
              minLength: { value: 3, message: "Product name should contain at least three characters" },
            })}
          />
          <p className="text-error">{errors.productName?.message}</p>
        </div>
      </div>

      <div className="flex flex-gap-medium">
        <div className="flex flex-gap-medium">
          <label htmlFor="sellProductPrice" className="flex-1">
            {priceCondition}:
          </label>
          <div className="flex-col gap-zero flex-1">
            <input
              type="number"
              id="sellProductPrice"
              autoComplete="off"
              className={`flex-1 ${errorClass.price}`}
              {...register("price", { required: `${priceCondition} is required` })}
            />
            <p className="text-error">{errors.price?.message}</p>
          </div>
        </div>

        {!scheme && (
          <div className="flex flex-gap-medium">
            <label htmlFor="sellProductPriceUnit" className="flex-1">
              Unit:
            </label>
            <div className="flex-col gap-zero flex-1">
              <input
                type="text"
                id="sellProductPriceUnit"
                autoComplete="off"
                className={`flex-1 ${errorClass.priceUnit}`}
                {...register("priceUnit", { required: "Unit is required" })}
              />
              <p className="text-error">{errors.priceUnit?.message}</p>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-gap-medium">
        <div className="flex flex-gap-medium">
          <label htmlFor="sellProductQuantity" className="flex-1">
            {quantityCondition}:
          </label>
          <div className="flex-col gap-zero flex-1">
            <input
              type="number"
              id="sellProductQuantity"
              autoComplete="off"
              className={`flex-1 ${errorClass.unitQuantity}`}
              {...register("unitQuantity", { required: `${quantityCondition} is required` })}
            />
            <p className="text-error">{errors.unitQuantity?.message}</p>
          </div>
        </div>

        {!scheme && (
          <div className="flex flex-gap-medium">
            <label htmlFor="sellProductQuantityUnit" className="flex-1">
              Unit:
            </label>
            <div className="flex-col gap-zero flex-1">
              <input
                type="text"
                id="sellProductQuantityUnit"
                autoComplete="off"
                className={`flex-1 ${errorClass.unitUnit}`}
                {...register("unitUnit", { required: "Unit is required" })}
              />
              <p className="text-error">{errors.unitUnit?.message}</p>
            </div>
          </div>
        )}
      </div>
      {!request && (
        <div className="flex flex-gap-medium">
          <div className="flex flex-gap-medium">
            <label htmlFor="sellProductStock" className="flex-1">
              {stockCondition}:
            </label>
            <div className="flex-col gap-zero flex-1">
              <input
                type="number"
                id="sellProductStock"
                autoComplete="off"
                className={`flex-1 ${errorClass.stock}`}
                {...register("stock", { required: `${stockCondition} is required` })}
              />
              <p className="text-error">{errors.stock?.message}</p>
            </div>
          </div>

          {!scheme && (
            <div className="flex flex-gap-medium">
              <label htmlFor="sellProductStockUnit" className="flex-1">
                Unit:
              </label>
              <div className="flex-col gap-zero flex-1">
                <input
                  type="text"
                  id="sellProductStockUnit"
                  autoComplete="off"
                  className={`flex-1 ${errorClass.stockUnit}`}
                  {...register("stockUnit", { required: "Unit is required" })}
                />
                <p className="text-error">{errors.stockUnit?.message}</p>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="flex-col gap-zero flex-1">
        <textarea
          placeholder={descriptionCondition}
          rows={3}
          className={`flex-1 ${errorClass.description}`}
          {...register("description", {
            required: `${descriptionCondition} is required`,
            minLength: {
              value: 100,
              message: `${descriptionCondition} should contain at least ${descriptionCharacterCondition} characters`,
            },
          })}
        />
        <p className="text-error">{errors.description?.message}</p>
      </div>
      <button type="submit" className="btn btn-secondary vertical">
        {buttonCondition}
      </button>
    </Form>
  );
};
