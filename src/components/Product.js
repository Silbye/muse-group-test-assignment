import "../App.css";
import linkArrow from "../images/link-arrow.svg";

export default function Product(props) {
  return (
    <div className="product">
      <div
        className="product-background"
        style={{ backgroundColor: props.color }}
      ></div>
      <div className="product-data">
        <div className="product-info">
          <h1 className="product-title">{props.title}</h1>
          <p className="product-text">{props.text}</p>
        </div>

        <a href="#" className="product-link">
          Read more <img src={linkArrow} alt="" />
        </a>
      </div>
    </div>
  );
}
