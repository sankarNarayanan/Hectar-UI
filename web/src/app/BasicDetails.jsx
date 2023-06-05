import CountryPhone from "@/components/Country";
import Form from "@/components/Form";

export default function () {
  return (
    <>
      <div className="mt-100">
        <Form.TextField
          name="fullname"
          label="FULL NAME"
          validators={["required"]}
        />
      </div>
      <div className="mt-20">
        <Form.TextField
          name="businessname"
          label="BUSINESS NAME"
          validators={["required"]}
        />
      </div>
      <div className="mt-20">
        <Form.TextField
          name="bisonessemail"
          label="BUSINESS EMAIL"
          validators={["required", "email"]}
        />
      </div>
      
      <div className="mt-20">
        <CountryPhone
          name="bisonessemail"
          label="BUSINESS EMAIL"
          validators={["required"]}
        />
      </div>
    </>
  );
}