import { FormProvider } from "react-hook-form";
import PropTypes from "prop-types";

/**
 * Component that controls the form element
 * and allows to use React Hook form in Fields
 * @returns {JSX}
 */
export default function Form({ methods, onSubmit, onError, children, ...formProps}) {
  if (!onSubmit) onSubmit = () => {};
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit, onError)} {...formProps}>{children}</form>
    </FormProvider>
  );
}

Form.propTypes = {
  methods: PropTypes.object.isRequired,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
};
