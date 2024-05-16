import Image from "next/image";
import TextNumberCard from "../text-number-card";
import { prefix } from "@/app/prefix";

function JyotishBabaComponent() {
  return (
    <div
      id="jyotish-baba"
      className="flex w-full items-center justify-center py-16"
    >
      <div className="relative">
        <div className="hidden sm:flex absolute w-full h-full items-center justify-center">
          <div className="flex-none border-2 border-solid border-primary-800 rounded-full justify-center  w-[446px] h-[446px]  bg-transparent "></div>
        </div>
        <div className="hidden sm:flex  absolute w-full h-full items-center justify-center bg-transparent ">
          <div className="grid grid-cols-2 shrink-0 w-[480px] h-[446px]   ">
            <TextNumberCard text="Bhagyank" number={6} />
            <TextNumberCard
              text="Kua Number"
              number={6}
              className="justify-self-end"
            />
            <TextNumberCard text="Moolank" number={6} className="content-end" />
            <TextNumberCard
              text="Name Numerology Total"
              number={6}
              className="justify-self-end content-end"
            />
          </div>
        </div>
        <Image
          alt=""
          src={`${prefix}/icons/jyotish.png`}
          width={400}
          height={400}
          className="z-10"
          unoptimized
        />
        <div className="sm:hidden block py-8 space-y-3 justify-items-center w-full">
          <TextNumberCard
            text="Bhagyank"
            number={6}
            className="flex justify-center"
          />
          <TextNumberCard
            text="Kua Number"
            number={6}
            className="flex justify-center"
          />
          <TextNumberCard
            text="Moolank"
            number={6}
            className="flex justify-center"
          />
          <TextNumberCard
            text="Name Numerology Total"
            number={6}
            className="flex justify-center"
          />
        </div>
      </div>
    </div>
  );
}
export default JyotishBabaComponent;
