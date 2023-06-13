import Form, { useForm } from "@/components/Form";
import ProductIcon from "@/assets/svg/product-icon.svg";
import LocationImage from "@/assets/svg/location.svg";
import DescriptionIcon from "@/assets/svg/description-icon.svg";
import VariantIcon from "@/assets/svg/variant-icon.svg";
import ContainerIcon from "@/assets/svg/container-icon.svg";
import { PRODUCT_DETAILS } from "./ProductDetails";
import { Button } from "@/components";
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

export default function GetQuoteForm() {
  const methods = useForm();
  const [product, variant] = methods.watch(["product", "variant"]);

  const productItems = getProductItems();
  const variantItems = getVariantItems(product);
  const descriptionItems = getDescriptionItems(product, variant);
  const selectedVariant = getSelectedVariant(product, variant);

  return (
    <Form methods={methods} onSubmit={() => console.log("Submitted")}>
      <div className="bg-white rounded-lg mx-130 p-30 mt-50">
        <div className="flex border border-gray-300 rounded-lg w-full place-content-stretch py-2">
          <div className="w-full px-5 py-2 border-r border-r-gray-300">
            <Form.Select
              name="product"
              label={() => (
                <Form.Select.Label content="Product" imageSrc={ProductIcon} />
              )}
              options={productItems}
            />
          </div>
          <div className="w-full px-5 py-2 border-r border-r-gray-300">
            <Form.Select
              name="variant"
              label={() => (
                <Form.Select.Label content="Variant" imageSrc={VariantIcon} />
              )}
              options={variantItems}
            />
          </div>
          <div className="w-full px-5 py-2 border-r border-r-gray-300">
            <Form.Select
              name="Description"
              label={() => (
                <Form.Select.Label
                  content="Description"
                  imageSrc={DescriptionIcon}
                />
              )}
              options={descriptionItems}
            />
          </div>
          <div className="w-full px-5 py-2">
            <Form.AutoComplete.Label content="From" imageSrc={LocationImage} />
            <div>
              <p>
                {selectedVariant?.loadingPort.port},{" "}
                {selectedVariant?.loadingPort.country}
              </p>
            </div>
          </div>
        </div>
        <div className="flex border mt-30 border-gray-300 rounded-lg w-9/12 place-content-stretch py-2">
          <div className="w-full px-5 py-2 border-r border-r-gray-300">
            <Form.Select.Label
              content="Container Type"
              imageSrc={ContainerIcon}
            />
            <p>{selectedVariant?.containerType}</p>
          </div>
          <div className="w-full px-5 py-2 border-r border-r-gray-300">
            <Form.Select.Label content="Loadability" imageSrc={ProductIcon} />
            <p>{selectedVariant?.typicalLoadability}</p>
          </div>
          <div className="w-full px-5 py-2 ">
            <Form.Select
              name="unloadingport"
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
        <div className="relative -bottom-50 text-center">
          <Button className="text-center mx-auto px-100">Get Quotes</Button>
        </div>
      </div>
    </Form>
  );
}
