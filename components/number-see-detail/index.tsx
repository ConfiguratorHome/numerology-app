import Link from "next/link";

function NumberSeeDetail({ number }: { number: number }) {
  return (
    <div className="flex flex-col shrink-0 w-32 space-y-2 justify-center items-center">
      <div className="flex items-center justify-center w-20 h-20 rounded-full border-primary-900 border-4 border-dashed  text-primary-800 text-4xl font-extrabold">
        {number}
      </div>
      <Link href={`/pages/${number}`}>
        <div className="px-3 py-1 bg-primary-900 rounded-3xl">See Details</div>
      </Link>
    </div>
  );
}
export default NumberSeeDetail;
