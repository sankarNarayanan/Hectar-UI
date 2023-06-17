import CountryPhone from "@/components/Country";
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
      {/* <div className="mt-20">
        <Form.TextField
          name="businessname"
          label="BUSINESS NAME"
          validators={["required"]}
        />
      </div> */}
      <div className="mt-20">
        <Form.TextField
          name="email"
          label="BUSINESS EMAIL"
          validators={["required", "email"]}
        />
      </div>
      
      <div className="mt-20">
        <CountryPhone
          name="phoneNumber"
          label="PHONE NUMBER"
          validators={["required"]}
        />
      </div>
    </>
  );
}
