import Form, { useForm } from "@/components/Form";
import ProductIcon from "@/assets/svg/product-icon.svg";
import LocationImage from "@/assets/svg/location.svg";
import DescriptionIcon from "@/assets/svg/description-icon.svg";
import VariantIcon from "@/assets/svg/variant-icon.svg";
import ContainerIcon from "@/assets/svg/container-icon.svg";

const localtionItems = [
  { title: "Chennai, In", subtitle: "Port Of madras" },
  { title: "Mumbai, In", subtitle: "Port Of mumbai" },
  { title: "Kolkatta, In", subtitle: "Port Of Kolkatta" },
  { title: "Vizag, In", subtitle: "Port Of vizag" },
  { title: "Cochi, In", subtitle: "Port Of cochi" },
  { title: "Goa, In", subtitle: "Port Of Goa" },
];

export default function GetQuoteForm() {
  const methods = useForm();
  return (
    <Form methods={methods} onSubmit={() => console.log("Submitted")}>
      <div className="bg-white rounded-lg mx-130 p-30">
        <div className="flex border border-gray-300 rounded-lg w-full place-content-stretch py-2">
          <div className="w-full px-5 py-2 border-r border-r-gray-300">
            <Form.Select
              name="Product"
              label={() => (
                <Form.Select.Label content="Product" imageSrc={ProductIcon} />
              )}
              options={[
                {
                  value: "Full Container Load",
                  label: "Full Container Load",
                },
                {
                  value: "Less Container Load",
                  label: "Less Container Load",
                },
                { value: "Bulk", label: "Bulk" },
              ]}
            />
          </div>
          <div className="w-full px-5 py-2 border-r border-r-gray-300">
            <Form.Select
              name="variant"
              label={() => (
                <Form.Select.Label content="Variant" imageSrc={VariantIcon} />
              )}
              options={[
                {
                  value: "Full Container Load",
                  label: "Full Container Load",
                },
                {
                  value: "Less Container Load",
                  label: "Less Container Load",
                },
                { value: "Bulk", label: "Bulk" },
              ]}
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
              options={[
                {
                  value: "Full Container Load",
                  label: "Full Container Load",
                },
                {
                  value: "Less Container Load",
                  label: "Less Container Load",
                },
                { value: "Bulk", label: "Bulk" },
              ]}
            />
          </div>
          <div className="w-full px-5 py-2">
            <Form.AutoComplete
              items={localtionItems}
              placeholder="Enter City or Port"
              label={() => (
                <Form.AutoComplete.Label
                  content="From"
                  imageSrc={LocationImage}
                />
              )}
            />
          </div>
        </div>
        <div className="flex border mt-30 border-gray-300 rounded-lg w-9/12 place-content-stretch py-2">
          <div className="w-full px-5 py-2 border-r border-r-gray-300">
            <Form.Select
              name="containerType"
              label={() => (
                <Form.Select.Label content="Container Type" imageSrc={ContainerIcon} />
              )}
              options={[
                {
                  value: "Full Container Load",
                  label: "Full Container Load",
                },
                {
                  value: "Less Container Load",
                  label: "Less Container Load",
                },
                { value: "Bulk", label: "Bulk" },
              ]}
            />
          </div>
          <div className="w-full px-5 py-2 border-r border-r-gray-300">
            <Form.Select
              name="loadability"
              label={() => (
                <Form.Select.Label content="Loadability" imageSrc={ProductIcon} />
              )}
              options={[
                {
                  value: "Full Container Load",
                  label: "Full Container Load",
                },
                {
                  value: "Less Container Load",
                  label: "Less Container Load",
                },
                { value: "Bulk", label: "Bulk" },
              ]}
            />
          </div>
          <div className="w-full px-5 py-2 ">
          <Form.AutoComplete
              items={localtionItems}
              placeholder="Enter City or Port"
              name="unloadingPort"
              label={() => (
                <Form.AutoComplete.Label
                  content="Unloading Port"
                  imageSrc={LocationImage}
                />
              )}
            />
          </div>
          
        </div>
      </div>
    </Form>
  );
}
