import Image from "next/image";

export default function Label({ content, imageSrc }) {
  return (
    <div className="flex">
      <Image src={imageSrc} /> <p className="ps-2">{content}</p>
    </div>
  );
}
