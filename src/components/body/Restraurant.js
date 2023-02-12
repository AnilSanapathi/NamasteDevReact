import { Link } from "react-router-dom";
import { imageURL } from "../../constants";

const Restraurant = (props) => {
  return (
    <Link to={"/restaurant/" + props.id}>
      <div className="h-80 w-80 text-center font-thin cursor-pointer">
        <img src={imageURL + props.cloudinaryImageId} />
        <div>
          <span className="font-medium"> {props.name}</span>
          <div>
            <span> {props?.cuisines?.join(", ")}</span>
          </div>
        </div>
        <div className="space-x-2  my-2">
          <span className="border border-green-400 w-6 text-white bg-green-400 font-bold">
            {props.avgRating}⭐
          </span>
          <span>•</span>
          <span>{props.costForTwoString}</span>
        </div>
      </div>
    </Link>
  );
};

export default Restraurant;
