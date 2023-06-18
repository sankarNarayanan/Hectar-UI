import { Spinner } from "@/components";
import PropTypes from "prop-types";
/**
 * The Custom component acts as a wrapper for Button component
 * @returns {JSX} - the component for Button
 */
export default function Button({
  children,
  variant,
  size,
  isLoading = false,
  className = "",
  disabled = false,
  ...orgProps
}) {
  // compute the class names based on the variants
  // also use the class name passed into the component
  // TODO: Give priority to user defined classnames
  className += " rounded-full transition-all duration-500";
  if (variant === "outline") {
    className += " border border-solid border-black";
  } else {
    className += " bg-black text-white";
  }

  if (size === "xs") {
    className += " text-base py-2 px-[20px]";
  } else {
    className += " text-sm lg:text-xl py-3 lg:py-4 lg:px-50 w-full lg:w-auto";
  }

  if (disabled || isLoading) {
    className += " opacity-30";
  }

  return (
    // Render The button component
    // set computed class names, disaled attribute and pass original props
    <button
      disabled={disabled || isLoading}
      className={className}
      {...orgProps}
    >
      {/* If is loading is set change the children to render loader, else the actual children */}
      {isLoading ? (
        <div className="flex items-center justify-center">
          <Spinner className="mr-3" color="white" /> processing...
        </div>
      ) : (
        children
      )}
    </button>
  );
}

// Defining the PropTypes
Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["outline"]),
  size: PropTypes.oneOf(["xs"]),
  isLoading: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};
