import Form from "@/components/Form";

export default function BasicDetails() {
  return (
    <>
      <div className="mt-100">
        <Form.TextField
          name="name"
          label="FULL NAME"
          validators={["required"]}
        />
      </div>
      {/* <div className="mt-5">
        <Form.TextField
          name="businessname"
          label="BUSINESS NAME"
          validators={["required"]}
        />
      </div> */}
      <div className="mt-5">
        <Form.TextField
          name="email"
          label="BUSINESS EMAIL"
          validators={["required", "email"]}
        />
      </div>
      
      <div className="mt-5">
        <Form.TextField
          name="phoneNumber"
          label="BUSINESS PHONE NO"
          validators={["required"]}
        />
      </div>
    </>
  );
}
