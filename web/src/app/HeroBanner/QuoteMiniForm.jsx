import { Button } from "@/components";
import Form, { useForm } from "@/components/Form";

import { productDetails } from "../ProductDetails";

import ProductIcon from "@/assets/svg/product-icon.svg";
import LocationIcon from "@/assets/svg/location.svg";
import VariantIcon from "@/assets/svg/variant-icon.svg";

export default function QuoteMiniForm() {
  const methods = useForm();
  return (
    <Form name="QuoteMiniForm" methods={methods}>
      <div className="flex gap-0 bg-white w-full justify-evenly rounded-r-xl items-center mt-50 relative z-10">
        <div className="w-full">
          <Form.Select
            name="product"
            onChange={() => resetFields("product")}
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
        <div className="w-full">
          <Form.Select
            name="variant"
            onChange={() => resetFields("product")}
            validators={["required"]}
            errorMessage={{
              required: "Please select an option",
            }}
            icon={VariantIcon}
            label="Variant"
            options={productDetails.productItems}
          />
        </div>
        <div className="w-px bg-[#DBDAE1] my-2 self-stretch" />

        <div className="w-full">
          <Form.Select
            name="destination"
            onChange={() => resetFields("product")}
            validators={["required"]}
            errorMessage={{
              required: "Please select an option",
            }}
            icon={LocationIcon}
            label="Destination"
            options={productDetails.productItems}
          />
        </div>
        <div className=" shrink-0">
          <Button className="!rounded-r-xl !rounded-l-none">Get Quote</Button>
        </div>
      </div>
    </Form>
  );
}
