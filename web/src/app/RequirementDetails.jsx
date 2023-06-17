import Form from "@/components/Form";

export default function RequiremenrDetails() {
  return (
    <>
      <div className="mt-100">
        <Form.TextField
          name="baseLocation"
          label="WHERE ARE YOU FROM?"
          validators={["required"]}
        />
      </div>
      <div className="mt-20">
        <Form.TextField
          name="compantName"
          label="COMPANY NAME"
          validators={["required"]}
        />
      </div>
      <div className="mt-20">
        <Form.TextField
          name="companyRevenue"
          label="COMPANY REVENUE"
          validators={["required"]}
        />
      </div>
      <div className="mt-20">
        <Form.TextField
          name="interestedCommodities"
          label="INTERESTED COMMODITIES"
          validators={["required"]}
        />
      </div>
      <div className="mt-20">
        <Form.Textarea
          name="moreDetails"
          label="TELL US MORE"
          validators={["optional"]}
        />
      </div>
    </>
  );
}
