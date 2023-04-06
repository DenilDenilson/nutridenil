import Image from "next/image";

export default function MyImage(props) {
  return (
    <Image
      className="rounded-lg"
      src={props.src}
      priority={props.priority}
      alt={props.alt}
      width={128}
      height={96}
    />
  );
}
