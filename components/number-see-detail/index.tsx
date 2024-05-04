import Link from "next/link";

function NumberSeeDetail({ number }: { number: number }) {
  return (
    <div className="flex flex-col w-32 space-y-2 justify-center items-center">
      <Link href={`/pages/${number}`}>
        <div className="flex items-center justify-center w-20 h-20 rounded-full border-primary-900 border-4 border-dashed  text-primary-800 text-4xl font-extrabold">
          {number}
        </div>
      </Link>
      <div className="px-3 py-1 bg-primary-900 rounded-3xl">See Details</div>
    </div>
  );
}
export default NumberSeeDetail;
