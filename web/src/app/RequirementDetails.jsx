import Form from "@/components/Form";
import { PRODUCT_DETAILS } from "./ProductDetails";

// Extract the product details from the base object and
// format it to feed the Select input as options
const getProductItems = () => {
  // formatted data
  return PRODUCT_DETAILS.map((item) => ({
    value: item.name,
    label: item.name,
  }));
};

export default function RequiremenrDetails() {
  const productItems = getProductItems();
  return (
    <>
      <div className="mt-100">
        <Form.TextField
          name="baseLocation"
          label="WHERE ARE YOU FROM?"
          validators={["required"]}
        />
      </div>
      <div className="mt-5">
        <Form.TextField
          name="compantName"
          label="COMPANY NAME"
          validators={["required"]}
        />
      </div>
      <div className="mt-5">
        <Form.TextField
          name="companyRevenue"
          label="COMPANY REVENUE"
          validators={["required"]}
        />
      </div>
      <div className="mt-5">
        <Form.Select
          name="interestedCommodities"
          validators={["required"]}
          className="border border-blue-gray-500"
          variant="bordered"
          placeholder="Select Products"
          isMultiple={true}
          errorMessage={{
            required: "Please select an option",
          }}
          label={() => <>product</>}
          options={productItems}
        />
      </div>
      <div className="mt-5">
        <Form.Textarea name="moreDetails" label="TELL US MORE" />
      </div>
    </>
  );
}
