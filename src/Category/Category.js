import React from "react";

import Bag from "../Categories/bag.png";
import Pale from "../Categories/pale-order.png";
import Perfume from "../Categories/perfume.png";
import Shoe from "../Categories/shoe.png";
import "../Category/Category.css";

function Category() {
  return (
    <div class="container">
      <h2 class="cat-head">Categories</h2>
      <div className="row">
        <div class="col-md-6">
          <img class="img-fluid" src={Pale} alt="" />
        </div>
        <div class="col-md-3 d-flex align-items-center justify-content-end">
          <div class="cat1 p-3">
            <img class="img-fluid" src={Bag} alt="" />
            <h4 class="text-center p-1">Bag</h4>
          </div>
        </div>
        <div class="col-md-3 d-flex flex-column align-items-center justify-content-center">
        <div>
          <div class="cat2">
            <img class="img-fluid" src={Perfume} alt=""/>
            <h4 class="text-center p-1">Beauty</h4>
          </div>

          <div class="cat3">
            <img class="img-fluid" src={Shoe} alt=""/>
            <h4 class="text-center p-1">Shoe</h4>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Category;
