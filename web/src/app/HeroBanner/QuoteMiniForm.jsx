import { Button } from "@/components";
import Form, { useForm } from "@/components/Form";

import { productDetails } from "../ProductDetails";

import ProductIcon from "@/assets/svg/product-icon.svg";
import LocationIcon from "@/assets/svg/location.svg";
import VariantIcon from "@/assets/svg/variant-icon.svg";
import { useDispatch } from "react-redux";
import {
  updateDestination,
  updateProduct,
  updateVariant,
} from "@/redux/productReducer";
import { useRouter } from "next/navigation";
import { useRequestQuoteMutation } from "@/api/BaseAPI";

export default function QuoteMiniForm() {
  const dispatch = useDispatch();
  const methods = useForm();
  const [getQuote, quoteResult] = useRequestQuoteMutation({
    fixedCacheKey: "getQuote",
  });
  const product = methods.watch("product");
  const variantItems = productDetails.getVariantItems(product);
  const router = useRouter();

  const resetFields = () => {
    // If the product field is changed need to reset variant
    methods.resetField("variant");
  };

  const handleSubmit = async (formData) => {
    // The hookform value will be stringified JSON.
    // Need to parse it and extract the value

    const resp = await getQuote({
      product: productDetails.getValuefromItem(formData.product),
      variant: productDetails.getValuefromItem(formData.variant),
      // TODO: need to fix hardcoded value
      sourcePortCode: "[46.482526, 30.7233095]",
      destinationPortCode: "[31.2303904, 121.4737021]",
      containerString: "ST20",
    }).unwrap();

    router.push("/submit-quote/");
  };
  return (
    <Form
      name="QuoteMiniForm"
      methods={methods}
      onSubmit={handleSubmit}
      onSubmitError={(error) => console.log("error", error)}
    >
      <div className="flex gap-0 lg:bg-white justify-evenly rounded-r-xl items-center mt-50 relative z-10 flex-col lg:flex-row lg:w-[660px]">
        <div className="w-full lg:w-[160px] bg-white rounded-lg lg:rounded-none border border-gray-300 lg:border-none lg:bg-transparent">
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
        <div className="w-full lg:w-[160px] bg-white rounded-lg lg:rounded-none border border-gray-300 lg:border-none lg:bg-transparent">
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

        <div className="w-full lg:w-[160px] bg-white rounded-lg lg:rounded-none border border-gray-300 lg:border-none lg:bg-transparent">
          <Form.Select
            name="destination"
            validators={["required"]}
            errorMessage={{
              required: "Please select an option",
            }}
            icon={LocationIcon}
            label="Destination"
            options={productDetails.unLoadingPorts}
          />
        </div>
        <div className=" lg:w-auto lg:shrink-0 mt-4 lg:mt-0 mb-50 lg:mb-0">
          <Button
            type="submit"
            className="rounded-full !w-full lg:w-auto lg:!rounded-r-xl lg:!rounded-l-none !bg-[#FF9D01] !text-black !text-base !font-medium"
          >
            Get Quote
          </Button>
        </div>
      </div>
    </Form>
  );
}
