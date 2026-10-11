export function InstructionsSetting({ title = "Instructions for Claude", children, action }: {
  title?: string; children: React.ReactNode; action?: React.ReactNode;
}) {
  return (
    <div className="flex w-full max-w-[771px] items-start gap-6">
      <div className="flex flex-1 flex-col gap-3">
        <h3 className="m-0 text-sm font-semibold leading-[18px] text-white">{title}</h3>
        <p className="m-0 text-sm leading-[17px] text-[#A1A1AA]">{children}</p>
      </div>
      <div className="w-[278px] shrink-0">{action}</div>
    </div>
  );
}
// <InstructionsSetting action={<Button>Edit</Button>}>Claude will keep these in mind for this and any of your associated accounts across chats and Cowork within Anthropic's guidelines. <a href="/learn">Learn more</a></InstructionsSetting>
