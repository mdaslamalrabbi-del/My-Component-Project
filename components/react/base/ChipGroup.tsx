import { Fragment } from "react";
import { Chip } from "./chip";

type Props = { prefix?: string; items: string[]; suffix?: string };

export function ChipGroup({ prefix, items, suffix }: Props) {
  return (
    <div className="flex flex-wrap items-center gap-0.5 text-[13px] leading-[18px] text-white">
      {prefix && <span className="px-0.5">{prefix}</span>}
      {items.map((item, i) => (
        <Fragment key={i}>
          <Chip label={item} leftIcon={false} rightIcon={false} outlined />
          {i < items.length - 1 && <span className="px-0.5">,</span>}
        </Fragment>
      ))}
      {suffix && <span className="px-0.5">{suffix}</span>}
    </div>
  );
}
