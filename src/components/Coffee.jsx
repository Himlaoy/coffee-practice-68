import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Coffee = ({ coffee }) => {

    const { category, detail, name, photo, quantity, supplier, taste, _id } = coffee


    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className=" flex justify-between">
                <div>
                    <h2 className="card-title">Name : {name}!</h2>
                    <p> Quantity : {quantity}</p>
                    <p> Quantity : {taste}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical">
                        <button className="btn btn-active">Button</button>
                        <button className="btn">Button</button>
                        <button className="btn">Button</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coffee;