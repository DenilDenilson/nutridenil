import IconArrow from "./svg/IconArrow";
import IconHearth from "./svg/IconHearth";
import IconSkullNew from "./svg/IconSkullNew";

export default function GoodOrBad() {
  return (
    <div className="backdrop-blur-sm fixed mx-auto inset-x-0 bottom-20 flex items-center gap-4 justify-center">
      <IconArrow className={""} />
      <IconHearth />
      <IconSkullNew />
      <IconArrow className={"rotate-180"} />
    </div>
  );
}
