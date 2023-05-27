export default function Button({
  children,
  variant,
  className = "",
  ...orgProps
}) {
  className += " rounded-full px-[50px] py-4 text-xl";
  if (variant === "outline") {
    className += " border border-solid border-black";
  } else {
    className += " bg-black text-white";
  }
  return (
    <button className={className} {...orgProps}>
      {children}
    </button>
  );
}
