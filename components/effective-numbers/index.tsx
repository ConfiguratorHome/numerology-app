import NumberSeeDetail from "../number-see-detail";
import PatternNumber from "../pattern-number";
import "./style.css";

export enum Effective {
  MISSING,
  AVAILABLE,
}

function EffectiveNumbers({ effective }: { effective: Effective }) {
  return (
    <div className="px-0 p-8 md:p-3 lg:p-10 w-full h-full effective-number">
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
        <div className="px-2 py-12 lg:p-20 md:p-12">
          <div className="flex flex-col lg:flex-row px-5 p-8 w-full border-3 space-x-0 space-y-14 lg:space-x-14 lg:space-y-0 border-primary-900 rounded-3xl bg-primary-100">
            <div className="flex-col p-8 h-full w-full lg:w-96 space-y-5 bg-primary-900 rounded-3xl">
              <div className="text-2xl font-extrabold">
                These numbers are missing from your Luo Shu grid chart.
              </div>
              <div className="text-lg font-medium">
                Here you will receive information about the impact of the
                missing numbers in your life and what influence they are having
                on your life. Also, you will get to know their remedy.
              </div>
            </div>
            <div className="inline-grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 flex-col w-full items-center justify-items-center">
              <NumberSeeDetail number={1} />
              <NumberSeeDetail number={2} />
              <NumberSeeDetail number={5} />
              <NumberSeeDetail number={6} />
              <NumberSeeDetail number={1} />
              <NumberSeeDetail number={2} />
              <NumberSeeDetail number={5} />
              <NumberSeeDetail number={6} />
            </div>
          </div>

          <div className="text-3xl lg:text-5xl font-semibold pt-20 pb-10">
            This pattern is missing from your life
          </div>
          <div className="inline-grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-16 flex-col w-full items-center justify-items-center">
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
