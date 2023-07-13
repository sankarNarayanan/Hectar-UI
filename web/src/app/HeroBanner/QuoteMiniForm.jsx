import { Button } from "@/components";
import Form, { useForm } from "@/components/Form";

import { productDetails } from "../ProductDetails";

import ProductIcon from "@/assets/svg/product-icon.svg";
import LocationIcon from "@/assets/svg/location.svg";
import VariantIcon from "@/assets/svg/variant-icon.svg";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useRequestQuoteMutation } from "@/api/BaseAPI";
import {
  updateProduct,
  updateVariant,
  updateDestination,
} from "@/redux/productReducer";

export default function QuoteMiniForm() {
  const methods = useForm();
  const { formState } = methods;
  const [getQuote, quoteResult] = useRequestQuoteMutation({
    fixedCacheKey: "getQuote",
  });
  const product = methods.watch("product");
  const variantItems = productDetails.getVariantItems(product);
  const router = useRouter();
  const dispatch = useDispatch();

  const resetFields = () => {
    // If the product field is changed need to reset variant
    methods.resetField("variant");
  };

  const handleSubmit = (formData) => {
    // The hookform value will be stringified JSON.
    // Need to parse it and extract the value
    const product = productDetails.getValuefromItem(formData.product);
    const variant = productDetails.getValuefromItem(formData.variant);
    const destination = productDetails.getValuefromItem(formData.destination);

    dispatch(updateProduct(formData.product))
    dispatch(updateVariant(formData.variant))
    dispatch(updateDestination(formData.destination))

    const variantDetails = productDetails.getVariantDetails(
      formData.product,
      formData.variant
    );
    const loadingPortDetails = productDetails.findPortByName(
      variantDetails.loadingPort
    );
    const destinationPortDetails = productDetails.findPortByName(destination);
    getQuote({
      product,
      variant,
      // TODO: need to fix hardcoded value
      sourcePortCode: JSON.stringify(loadingPortDetails.geometry.coordinates),
      destinationPortCode: JSON.stringify(
        destinationPortDetails.geometry.coordinates
      ),
      containerString: variantDetails.containerType,
    });

    router.push("/submit-quote/");
  };
  return (
    <Form
      name="QuoteMiniForm"
      methods={methods}
      onSubmit={handleSubmit}
      onSubmitError={(error) => console.log("error", error)}
    >
      <div
        className={`flex gap-0 lg:bg-white justify-evenly rounded-xl items-center mt-50 relative z-10 flex-col lg:flex-row lg:w-[660px] lg:border ${
          !formState.isValid && formState.isSubmitted
            ? "border-red-300"
            : "border-gray-300"
        } `}
      >
        <div
          className={`w-full lg:w-[160px] lg:overflow-x-clip bg-white rounded-lg lg:rounded-none border ${
            !formState.isValid && formState.isSubmitted
              ? "border-red-300"
              : "border-gray-300"
          } lg:border-none lg:bg-transparent`}
        >
          <Form.Select
            name="product"
            onChange={() => resetFields()}
            validators={["required"]}
            errorMessage={{
              required: "Please select an option",
            }}
            icon={ProductIcon}
            label="Product"
            options={productDetails.productItems}
          />
        </div>
        {/* TODO: colors needs to be standardised */}
        <div className="w-px bg-[#DBDAE1] my-2 self-stretch" />
        <div
          className={`w-full lg:w-[160px] lg:overflow-x-clip bg-white rounded-lg lg:rounded-none border ${
            !formState.isValid && formState.isSubmitted
              ? "border-red-300"
              : "border-gray-300"
          } lg:border-none lg:bg-transparent`}
        >
          <Form.Select
            name="variant"
            validators={["required"]}
            errorMessage={{
              required: "Please select an option",
            }}
            icon={VariantIcon}
            label="Variant"
            options={variantItems}
          />
        </div>
        <div className="w-px bg-[#DBDAE1] my-2 self-stretch" />

        <div
          className={`w-full lg:w-[160px] lg:overflow-x-clip bg-white rounded-lg lg:rounded-none border ${
            !formState.isValid && formState.isSubmitted
              ? "border-red-300"
              : "border-gray-300"
          } lg:border-none lg:bg-transparent`}
        >
          <Form.Select
            name="destination"
            validators={["required"]}
            errorMessage={{
              required: "Please select an option",
            }}
            icon={LocationIcon}
            label="Destination"
            isSearchable={true}
            options={productDetails.getPortItems()}
          />
        </div>
        <div className=" lg:w-auto lg:shrink-0 mt-4 lg:mt-0 mb-50 lg:mb-0">
          <Button
            type="submit"
            isLoading={quoteResult.isLoading}
            className="rounded-full !w-full lg:w-auto lg:!rounded-r-xl lg:!rounded-l-none !bg-[#FF9D01] !text-black !text-base !font-medium lg:relative lg:-right-2.5"
          >
            Get Quote
          </Button>
        </div>
      </div>
    </Form>
  );
}
