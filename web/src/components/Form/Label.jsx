import Image from "next/image";

export default function Label({ content, imageSrc }) {
  return (
    <div className="flex">
      <Image src={imageSrc} /> <p className="ps-2 text-sm opacity-30">{content}</p>
    </div>
  );
}
