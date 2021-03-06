import React, { useState } from "react";
import Nav from "component/Nav";
import { connect } from "react-redux";
import { addCart } from "../../redux/actions/addCartActions";

const LandingPagePresenter = ({ onClickAlert, ...props }) => {
  const [count, setCount] = useState([]);

  const addCart = () => {
    let count = props.amount;
    console.log("count :", props.reduxAddCart(count));
    props.reduxAddCart(count);
    setCount(count);
  };

  return (
    <>
      <div id="Header_01">
        {console.log("addCartCount", count)}
        <svg className="Background_e">
          <rect
            fill="rgba(241,241,241,1)"
            id="Background_e"
            rx="0"
            ry="0"
            x="0"
            y="0"
            width="1440"
            height="900"
          ></rect>
        </svg>
        <div id="Slider_Arrows" className="Slider_Arrows"></div>
        <div id="Next_Product">
          <svg className="Background_fa">
            <rect
              fill="rgba(255,169,0,1)"
              id="Background_fa"
              rx="20"
              ry="20"
              x="0"
              y="0"
              width="80"
              height="80"
            ></rect>
          </svg>
          <img
            id="image_e"
            alt="add product"
            className="productZoom"
            src={require("../../images/landing/addProduct.svg")}
          />
          <div
            id="icons_plus"
            className="icons_plus"
            style={{ cursor: "pointer" }}
            onClick={() => addCart()}
          >
            <svg className="plus" viewBox="0 0 22 22">
              <path
                fill="rgba(103,103,103,1)"
                id="plus"
                d="M 21.08333396911621 9.166666984558105 L 12.83333301544189 9.166666984558105 L 12.83333301544189 0.9166666865348816 C 12.83333301544189 0.4102083444595337 12.42312526702881 0 11.91666698455811 0 L 10.08333301544189 0 C 9.576874732971191 0 9.166666984558105 0.4102083444595337 9.166666984558105 0.9166666865348816 L 9.166666984558105 9.166666984558105 L 0.9166666865348816 9.166666984558105 C 0.4102083444595337 9.166666984558105 0 9.576874732971191 0 10.08333301544189 L 0 11.91666698455811 C 0 12.42312526702881 0.4102083444595337 12.83333301544189 0.9166666865348816 12.83333301544189 L 9.166666984558105 12.83333301544189 L 9.166666984558105 21.08333396911621 C 9.166666984558105 21.58979225158691 9.576874732971191 22 10.08333301544189 22 L 11.91666698455811 22 C 12.42312526702881 22 12.83333301544189 21.58979225158691 12.83333301544189 21.08333396911621 L 12.83333301544189 12.83333301544189 L 21.08333396911621 12.83333301544189 C 21.58979225158691 12.83333301544189 22 12.42312526702881 22 11.91666698455811 L 22 10.08333301544189 C 22 9.576874732971191 21.58979225158691 9.166666984558105 21.08333396911621 9.166666984558105 Z"
              ></path>
            </svg>
          </div>
          <div id="Text_e">
            <div id="_225">
              <span>$225</span>
            </div>
            <div id="Air_Jordan_6_Retro">
              <span>Air Jordan 6 Retro</span>
            </div>
          </div>
        </div>
        <div id="Product_Image">
          <img
            alt="product"
            id="Image_fb"
            className="productZoom"
            src={require("../../images/landing/sideProduct1.svg")}
          />
          <img
            alt="product"
            id="Image_fc"
            className="productZoom"
            src={require("../../images/landing/sideProduct2.svg")}
          />
          <img
            alt="product"
            id="image_fd"
            className="productZoom"
            src={require("../../images/landing/sideProduct3.svg")}
          />
          <svg className="Background_fe">
            <ellipse
              fill="rgba(77,102,255,1)"
              id="Background_fe"
              rx="270"
              ry="270"
              cx="270"
              cy="270"
            ></ellipse>
          </svg>
          <img
            alt="main product"
            id="Image_ff"
            src={require("../../images/landing/mainProduct.svg")}
          />
        </div>
        <div
          id="Buttons_Large_Color_1_Solid_fg"
          className="Buttons_Large_Color_1_Solid"
        >
          <div id="Buttons_Large_Color_1_Solid_fh">
            <svg className="Background_fi">
              <rect
                fill="rgba(77,102,255,1)"
                id="Background_fi"
                rx="15"
                ry="15"
                x="0"
                y="0"
                width="180"
                height="60"
              ></rect>
            </svg>
            <div
              id="Get_Started_fj"
              style={{ cursor: "pointer" }}
              onClick={(e) => onClickAlert(e.target.innerText)}
            >
              <span>Add To Cart</span>
            </div>
          </div>
        </div>
        <div id="Text_fk">
          <div id="_180">
            <span>$180</span>
          </div>
          <div id="Nike_Joyride_Run_Fly">
            <span>Nike Joyride Run Flyknit</span>
          </div>
          <div id="Men_s_Running_Shoe">
            <span>Men's Running Shoe</span>
          </div>
        </div>
        <Nav onClickAlert={onClickAlert} />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    amount: state.addCartReducer.amount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reduxAddCart: (amount) => dispatch(addCart(amount)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPagePresenter);
