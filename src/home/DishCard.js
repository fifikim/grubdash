import React from "react";

function DishCard({ dish, children }) {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 my-2">
      <div className="card h-100">
        <img
          src={dish.image_url}
          className="card-img-top"
          alt={`${dish.name} interior`}
        />
        <div className="card-body">
          <h5 className="card-title">{dish.name}</h5>
          <p className="card-text">{dish.description}</p>
          
        </div>
        <div className="card-footer"> 
          <div className="row">
            <div className="col-4">
              <h6 className="card-title pt-2 text-center">$ {dish.price}</h6>
            </div>
            <div className="col-8">  
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DishCard;
