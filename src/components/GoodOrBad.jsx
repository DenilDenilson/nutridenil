import IconArrow from "./svg/IconArrow";
import IconHearth from "./svg/IconHearth";
import IconSkullNew from "./svg/IconSkullNew";

export default function GoodOrBad(props) {
  return (
    <div className="py-2 fixed mx-auto inset-x-0 bottom-[68px] flex items-center gap-4 justify-center">
      <IconArrow className={""} />
      <IconHearth />
      <IconSkullNew />
      <IconArrow className={"rotate-180"} />
    </div>
  );
}
