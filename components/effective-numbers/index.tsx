import NumberSeeDetail from "../number-see-detail";
import PatternNumber from "../pattern-number";

export enum Effective {
  MISSING,
  AVAILABLE,
}

function EffectiveNumbers({ effective }: { effective: Effective }) {
  return (
    <div className="p-10 w-full h-full effective-number">
      <div className={effective === Effective.MISSING ? "missing" : "avalable"}>
        <div
          className={
            effective === Effective.MISSING
              ? "missing--header-top"
              : "avalable--header-top"
          }
        >
          {effective === Effective.MISSING
            ? "Missing Number"
            : "Avalable Number"}
        </div>
        <div
          className={
            effective === Effective.MISSING
              ? "missing--header-bottom"
              : "avalable--header-bottom"
          }
        >
          {effective === Effective.MISSING
            ? "Missing Number"
            : "Avalable Number"}
        </div>
        <div className="p-20">
          <div className="flex p-5 w-full border-3 space-x-14 border-primary-900 rounded-3xl bg-primary-100">
            <div className="flex-none p-8 h-full w-96 space-y-5 bg-primary-900 rounded-3xl">
              <div className="text-2xl font-extrabold">
                These numbers are missing from your Luo Shu grid chart.
              </div>
              <div className="text-lg font-medium">
                Here you will receive information about the impact of the
                missing numbers in your life and what influence they are having
                on your life. Also, you will get to know their remedy.
              </div>
            </div>

            <div className="flex-col w-full space-y-20 items-center justify-center">
              <div className="flex w-full space-x-10 justify-center">
                <NumberSeeDetail number={1} />
                <NumberSeeDetail number={2} />
                <NumberSeeDetail number={3} />
                <NumberSeeDetail number={4} />
              </div>
              <div className="flex w-full space-x-10 justify-center">
                <NumberSeeDetail number={5} />
                <NumberSeeDetail number={6} />
                <NumberSeeDetail number={7} />
                <NumberSeeDetail number={8} />
                <NumberSeeDetail number={9} />
              </div>
            </div>
          </div>

          <div className="text-5xl font-semibold pt-20 pb-10">
            This pattern is missing from your life
          </div>
          <div className="w-full grid grid-cols-4 gap-5">
            <PatternNumber />
            <PatternNumber />
            <PatternNumber />
            <PatternNumber />
            <PatternNumber />
            <PatternNumber />
            <PatternNumber />
            <PatternNumber />
          </div>
        </div>
      </div>
    </div>
  );
}
export default EffectiveNumbers;
