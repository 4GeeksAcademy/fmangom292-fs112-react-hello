import React from "react";

const Card = ({ title, description }) => {
    return (
        <div className="card">
            <svg aria-label="Placeholder: Image cap" className="bd-placeholder-img card-img-top" height="180" preserveAspectRatio="xMidYMid slice" role="img" xmlns="http://www.w3.org/2000/svg"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">Find out more!</a>
            </div>
        </div>
    );
}

export default Card;