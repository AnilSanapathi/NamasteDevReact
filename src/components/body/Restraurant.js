import { useEffect } from "react";
import { imageURL } from "../../constants";

const Restraurant = (props) => {
  return (
    <div className="restraurant-card">
      <img src={imageURL + props.cloudinaryImageId} />
      <div className="card-heading">
        <h3> {props.name}</h3>
        <span className="text-muted"> {props?.cuisines?.join(", ")}</span>
      </div>
      <div className="sub-details">
        <span className="rating">{props.avgRating}</span>
        <span className="dot">•</span>
        <span className="text-muted">{props.costForTwoString}</span>
      </div>
    </div>
  );
};

export default Restraurant;
