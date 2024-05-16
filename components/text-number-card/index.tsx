function TextNumberCard({
  text,
  number,
  className = "",
}: {
  text: string;
  number: number;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="flex shrink-0 h-fit w-fit justify-between items-center py-1 px-2 space-x-1 bg-primary-100 rounded-full">
        <div className="text-primary-900">{text}</div>
        <div className="rounded-full bg-primary-400 px-2">{number}</div>
      </div>
    </div>
  );
}
export default TextNumberCard;
