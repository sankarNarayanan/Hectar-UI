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
    className += " text-xl py-4 px-[50px]";
  }
  return (
    <button className={className} {...orgProps}>
      {children}
    </button>
  );
}
