import Image from "next/image";

export default function MyImage(props) {
  return (
    <Image
      className="rounded-lg"
      // src={props.src}
      src="https://th.bing.com/th/id/OIP.nlb551bP0GCPA8RSAd9TdwHaE6?pid=ImgDet&rs=1"
      priority={props.priority}
      alt={props.alt}
      width={128}
      height={96}
    />
  );
}
