import Form from "@/components/Form";

export default function () {
  return (
    <>
      <div className="mt-100">
        <Form.TextField
          name="marketDetails"
          label="Market Details"
          validators={["required"]}
        />
      </div>
      <div className="mt-20">
        <Form.TextField
          name="another1"
          label="Market Details"
          validators={["required"]}
        />
      </div>
      <div className="mt-20">
        <Form.TextField
          name="another2"
          label="Market Details"
          validators={["required"]}
        />
      </div>
      <div className="mt-20">
        <Form.TextField
          name="another3"
          label="Market Details"
          validators={["required"]}
        />
      </div>
      <div className="mt-20">
        <Form.TextField
          name="another3"
          label="Market Details"
          validators={["required"]}
        />
      </div>
      <div className="mt-20">
        <Form.Textarea
          name="textarea1"
          label="Some details"
          validators={["required"]}
        />
      </div>
    </>
  );
}
