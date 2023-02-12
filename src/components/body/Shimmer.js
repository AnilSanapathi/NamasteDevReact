const Shimmer = (props) => {
  const { totalShimmers, classN } = props;

  return (
    <div className="flex flex-wrap  my-40">
      {Array(12)
        .fill("")
        .map((a, index) => (
          <div className="h-80 w-80" key={index}>
            <div className="ml-52 grid grid-flow-row">
              <span className="border border-slate-300 h-6 w-72 bg-slate-300"></span>
              <span className="border border-slate-200 h-6 w-20 bg-slate-200 my-1"></span>
              <span className="border border-slate-300 h-6 w-72 bg-slate-300 my-1"></span>
              <span className="border border-slate-100 h-6 w-40 bg-slate-200 my-1"></span>
              <span className="border border-slate-300 h-6 w-50 bg-slate-300 my-1"></span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
