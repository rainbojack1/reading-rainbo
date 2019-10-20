import React from 'react';
import { Link } from "react-router-dom";
import "../App.css";

function Card(props) {
    return (
        <div className="card my-2">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-6">
                        <h5 className="card-title">{props.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{props.authors}</h6>
                    </div>
                    <div className="col-md-6 buttons">
                        <button type="button" className="btn btn-primary">Save to Favorites</button>
                    </div>                    
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <img alt={props.title} src={props.image} />
                    </div>
                    <div className="col-md-10 pr-2">
                        <p className="card-text">{props.description}</p>
                        <a href={props.link} target="_blank" rel="noopener noreferrer" className="card-link">
                            <i className="fas fa-external-link-alt"></i> Link to Book</a>
                    </div>
                    
                </div>
            </div>
        </div>
    );

}

export default Card;