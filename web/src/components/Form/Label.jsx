import Image from "next/image";

export default function Label({ content, imageSrc }) {
  return (
    <div className="flex">
      <Image src={imageSrc} alt="" />{" "}
      <p className="ps-2 text-xs lg:text-base opacity-50">{content}</p>
    </div>
  );
}
