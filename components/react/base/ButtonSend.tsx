import { ArrowUp, Square } from "lucide-react"; // swap for your icon set

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { state?: "send" | "pause" | "disabled" };

const GRADIENT =
  "border border-transparent text-white [background:linear-gradient(#9C86FF,#9C86FF)_padding-box,linear-gradient(135deg,#0718D2,#CF8BFF_48%,#A4ABFF)_border-box]";

export function ButtonSend({ state = "send", ...props }: Props) {
  return (
    <button
      disabled={state === "disabled"}
      aria-label={state === "pause" ? "Stop" : "Send"}
      className={`flex size-8 items-center justify-center rounded-lg
        ${state === "send" ? GRADIENT : "bg-[#272729]"}
        ${state === "pause" ? "text-[#D2CFD9]" : ""} ${state === "disabled" ? "text-[#6C6A64]" : ""}`}
      {...props}
    >
      {state === "pause" ? (
        <Square className="size-5" strokeWidth={1.25} />
      ) : (
        <ArrowUp className={state === "send" ? "size-4" : "size-5"} strokeWidth={state === "send" ? 1 : 1.25} />
      )}
    </button>
  );
}
