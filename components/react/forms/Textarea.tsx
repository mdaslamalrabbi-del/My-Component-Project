export function Textarea({ className = "", ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea rows={3} {...props}
      className={`block min-h-[93px] w-full resize-y rounded-lg border border-transparent bg-[#27272A] p-3 text-sm text-white
        outline-none placeholder:text-[#6C6A64] focus:border-[#333137] ${className}`} />
  );
}
