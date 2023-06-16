export default function Button({
  children,
  variant,
  size,
  className = "",
  ...orgProps
}) {
  className += " rounded-full";
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
  return (
    <button className={className} {...orgProps}>
      {children}
    </button>
  );
}
