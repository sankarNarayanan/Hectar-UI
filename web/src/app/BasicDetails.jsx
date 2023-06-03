import Form from "@/components/Form";

export default function () {
  return (
    <>
      <div className="mt-100">
        <Form.TextField
          name="basic-marketDetails"
          label="Basic details"
          validators={["required"]}
        />
      </div>
      <div className="mt-20">
        <Form.TextField
          name="basic-another1"
          label="Basic details"
          validators={["required"]}
        />
      </div>
      <div className="mt-20">
        <Form.TextField
          name="basic-another2"
          label="Basic details"
          validators={["required"]}
        />
      </div>
      <div className="mt-20">
        <Form.TextField
          name="basic-another3"
          label="Basic details"
          validators={["required"]}
        />
      </div>
      <div className="mt-20">
        <Form.TextField
          name="basic-another3"
          label="Basic details"
          validators={["required"]}
        />
      </div>
      <div className="mt-20">
        <Form.Textarea
          name="basic-textarea1"
          label="Some details"
          validators={["required"]}
        />
      </div>
    </>
  );
}
