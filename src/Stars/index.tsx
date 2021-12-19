import IconStar from "../images/icon-star.svg";
import "./index.css";

export default function Stars() {
  return (
    <div className="stars">
      <img src={IconStar} alt="icon-star" />
      <img src={IconStar} alt="icon-star" />
      <img src={IconStar} alt="icon-star" />
      <img src={IconStar} alt="icon-star" />
      <img src={IconStar} alt="icon-star" />
    </div>
  );
}
