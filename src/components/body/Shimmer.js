const Shimmer = (props) => {
  const { totalShimmers, classN } = props;

  return (
    <div className="restaurant-list">
      {Array(10)
        .fill("")
        .map((a, index) => (
          <div className="shimmer" key={index}>
            <div className="sub">
                <div></div>
                <h3></h3>
                <h4></h4>
                <h4></h4>
                <h4></h4>
            </div>

          </div>
        ))}
    </div>
  );
};

export default Shimmer;
