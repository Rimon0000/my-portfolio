import React from 'react';
import react1 from "../../../assets/projects ss/react1.png"

const ReactProjects = () => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure><img src={react1} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">Real Champions</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Details</button>
                </div>
              </div>
            </div>
        </div>
    );
};

export default ReactProjects;