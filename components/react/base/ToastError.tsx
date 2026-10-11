import { TriangleAlert, X } from "lucide-react"; // swap for your icon set

type Props = { message: string; onDismiss?: () => void };

export function ToastError({ message, onDismiss }: Props) {
  return (
    <div role="alert"
      className="inline-flex items-center gap-3 rounded-md bg-[#5A1A1A] p-2 text-xs font-semibold leading-4 text-[#FF9492]">
      <TriangleAlert className="size-4 shrink-0" strokeWidth={1.5} />
      <span>{message}</span>
      <button aria-label="Dismiss" onClick={onDismiss}>
        <X className="size-4" strokeWidth={1.5} />
      </button>
    </div>
  );
}
