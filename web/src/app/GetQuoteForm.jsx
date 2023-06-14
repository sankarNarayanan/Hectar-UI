import Form, { useForm } from "@/components/Form";
import ProductIcon from "@/assets/svg/product-icon.svg";
import LocationImage from "@/assets/svg/location.svg";
import DescriptionIcon from "@/assets/svg/description-icon.svg";
import VariantIcon from "@/assets/svg/variant-icon.svg";
import ContainerIcon from "@/assets/svg/container-icon.svg";
import { PRODUCT_DETAILS } from "./ProductDetails";
import { Button, Dialog, DialogBody, dialog } from "@/components";
import { useState } from "react";
const localtionItems = [
  { title: "Chennai, In", subtitle: "Port Of madras" },
  { title: "Mumbai, In", subtitle: "Port Of mumbai" },
  { title: "Kolkatta, In", subtitle: "Port Of Kolkatta" },
  { title: "Vizag, In", subtitle: "Port Of vizag" },
  { title: "Cochi, In", subtitle: "Port Of cochi" },
  { title: "Goa, In", subtitle: "Port Of Goa" },
];

const unLoadingPorts = [
  { label: "Malasiya", value: "Malasiya" },
  { label: "Colombo, Srilanka", value: "Colombo, Srilanka" },
  { label: "Singapore", value: "Singapore" },
  { label: "Malasiya", value: "Malasiya" },
  { label: "Colombo, Srilanka", value: "Colombo, Srilanka" },
  { label: "Singapore", value: "Singapore" },
];

// Extract the product details from the base object and
// format it to feed the Select input as options
const getProductItems = () => {
  // formatted data
  return PRODUCT_DETAILS.map((item) => ({
    value: item.name,
    label: item.name,
  }));
};

// get the selected Product details with the product item
const getSelectedProduct = (product) => {
  // the product item is stringified JSON
  // need to parse it before using it can be undefined
  product = product && JSON.parse(product);
  // Find the variants respective to the selected product
  return PRODUCT_DETAILS.find((item) => item.name === product?.value);
};

// Extract the selected product's variants and
// format it to feed the select input as options
const getVariantItems = (product) => {
  const selectedProduct = getSelectedProduct(product);
  // return Empty if nothing is selected or not matched with product
  if (!selectedProduct) {
    return [];
  }
  // return select options acceptable format data
  return selectedProduct.variants.map((variant) => ({
    label: variant.name,
    value: variant.name,
  }));
};

// get the selected variant by having the product and variant from forms
const getSelectedVariant = (product, variant) => {
  // the variant item is stringified JSON
  // need to parse it before using it can be undefined
  variant = variant && JSON.parse(variant);
  // get the selected product first
  const selectedProduct = getSelectedProduct(product);
  return (
    selectedProduct &&
    selectedProduct.variants.find((item) => item.name === variant?.value)
  );
};

const getDescriptionItems = (product, variant) => {
  const selectedVariant = getSelectedVariant(product, variant);
  if (!selectedVariant) return [];
  return selectedVariant.description.map((description) => ({
    label: description.name,
    value: description.name,
  }));
};

// get the selected Product details with the product item
const getDescriptionFromValue = (description) => {
  // the product item is stringified JSON
  // need to parse it before using it can be undefined
  return description && JSON.parse(description);
};

// get the selected Product details with the product item
const getUnloadingPortFromValue = (unloadingPort) => {
  // the product item is stringified JSON
  // need to parse it before using it can be undefined
  return unloadingPort && JSON.parse(unloadingPort);
};

export default function GetQuoteForm() {
  const methods = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [product, variant, description, unloadingPort] = methods.watch([
    "product",
    "variant",
    "description",
    "unloadingport",
  ]);

  const productItems = getProductItems();
  const variantItems = getVariantItems(product);
  const descriptionItems = getDescriptionItems(product, variant);
  const selectedVariant = getSelectedVariant(product, variant);
  const selectedProduct = getSelectedProduct(product);
  const selectedDescription = getDescriptionFromValue(description);
  const selectedUnloadingPort = getUnloadingPortFromValue(unloadingPort);
  const resetFields = (variant) => {
    // If the product field is changed need to reset both variant and product
    if (variant === "product") {
      methods.resetField("variant");
    }
    // description will be reset on both product and variant changes
    methods.resetField("description");
  };

  return (
    <Form
      methods={methods}
      onSubmit={() => {
        console.log("Submitted");
        setDialogOpen(true);
      }}
    >
      <div className="bg-white rounded-lg m-3 lg:mx-130 p-30 mt-50 w-auto">
        <div className="flex lg:border border-gray-300 rounded-lg w-full place-content-stretch py-2 flex-col lg:flex-row gap-2">
          <div className="w-full px-5 py-2 border rounded-lg lg:border-0 lg:border-r border-r-gray-300">
            <Form.Select
              name="product"
              onChange={() => resetFields("product")}
              validators={["required"]}
              errorMessage={{
                required: "Please select an option",
              }}
              label={() => (
                <Form.Select.Label content="Product" imageSrc={ProductIcon} />
              )}
              options={productItems}
            />
          </div>
          <div className="w-full px-5 py-2 border rounded-lg lg:border-0 lg:border-r border-r-gray-300">
            <Form.Select
              name="variant"
              onChange={() => resetFields("variant")}
              validators={["required"]}
              errorMessage={{
                required: "Please select an option",
              }}
              label={() => (
                <Form.Select.Label content="Variant" imageSrc={VariantIcon} />
              )}
              options={variantItems}
            />
          </div>
          <div className="w-full px-5 py-2 border rounded-lg lg:border-0 lg:border-r border-r-gray-300">
            <Form.Select
              name="description"
              validators={["required"]}
              errorMessage={{
                required: "Please select an option",
              }}
              label={() => (
                <Form.Select.Label
                  content="Description"
                  imageSrc={DescriptionIcon}
                />
              )}
              options={descriptionItems}
            />
          </div>
          <div className="w-full px-5 py-2 border rounded-lg lg:border-0 border-r-gray-300">
            <Form.AutoComplete.Label
              content="Loading port"
              imageSrc={LocationImage}
            />
            <div>
              <p>
                {selectedVariant?.loadingPort.port},{" "}
                {selectedVariant?.loadingPort.country}
              </p>
            </div>
          </div>
        </div>
        <div className="flex lg:border lg:mt-30 border-gray-300 rounded-lg w-full lg:w-9/12 place-content-stretch py-2 gap-2 flex-col lg:flex-row">
          <div className="w-full px-5 py-2 border rounded-lg lg:border-0 lg:border-r border-r-gray-300">
            <Form.Select.Label
              content="Container Type"
              imageSrc={ContainerIcon}
            />
            <p>{selectedVariant?.containerType}</p>
          </div>
          <div className="w-full px-5 py-2 border rounded-lg lg:border-0 lg:border-r border-r-gray-300">
            <Form.Select.Label content="Loadability" imageSrc={ProductIcon} />
            <p>{selectedVariant?.typicalLoadability}</p>
          </div>
          <div className="w-full px-5 py-2 border rounded-lg lg:border-0 lg:border-r ">
            <Form.Select
              name="unloadingport"
              validators={["required"]}
              errorMessage={{
                required: "Please select an option",
              }}
              label={() => (
                <Form.Select.Label
                  content="Unloading Port"
                  imageSrc={VariantIcon}
                />
              )}
              options={unLoadingPorts}
            />
          </div>
        </div>
        <div className="relative lg:-bottom-50 text-center mt-5 lg:mt-0">
          <Button className="text-center lg:!px-100 text-sm lg:text-base">Get Quotes</Button>
        </div>
      </div>

      <Dialog open={dialogOpen} handler={() => setDialogOpen(!dialogOpen)}>
        <DialogBody>
          <div className="text-black m-5 font-normal">
            <p className="text-lg opacity-50 font-light">Approximate Cost</p>
            <div className="text-5xl font-semibold">
              ${2400 * (selectedVariant?.typicalLoadabilityValue || 0)}
            </div>
            <p className="text-xs p-2">
              This is an computer generated quote and could vary.
            </p>
            <div className="flex pt-30 gap-8">
              <div>
                <p className="opacity-50 text-xs">Product</p>
                <p>{selectedProduct?.name}</p>
              </div>
              <div>
                <p className="opacity-50 text-xs">Variant</p>
                <p>{selectedVariant?.name}</p>
              </div>
              <div>
                <p className="opacity-50 text-xs">Description</p>
                <p>{selectedDescription?.label}</p>
              </div>
            </div>
            <div className="flex pt-30 gap-8">
              <div>
                <p className="opacity-50 text-xs">Container Type</p>
                <p>{selectedVariant?.containerType}</p>
              </div>
              <div>
                <p className="opacity-50 text-xs">Loadability</p>
                <p>{selectedVariant?.typicalLoadability}</p>
              </div>
              <div>
                <p className="opacity-50 text-xs">Ports</p>
                <p>
                  {selectedVariant?.loadingPort?.port} to{" "}
                  {selectedUnloadingPort?.label}
                </p>
              </div>
            </div>

            <div className="flex w-full gap-5 mt-50">
              <div className="w-1/2">
                <Button
                  variant="outline"
                  className="!text-base !py-3 w-full"
                  onClick={() => {
                    setDialogOpen(false);
                    methods.reset({});
                  }}
                >
                  Request new quote
                </Button>
              </div>
              <div className="w-1/2">
                <Button className="!text-base !py-3  w-full">
                  Continue to book
                </Button>
              </div>
            </div>
          </div>
        </DialogBody>
      </Dialog>
    </Form>
  );
}
