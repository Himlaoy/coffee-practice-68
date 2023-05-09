import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Coffee = ({ coffee, coffees, setCoffees }) => {

    const { category, detail, name, photo, quantity, supplier, taste, _id } = coffee

    const handleDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {

                        console.log(data)
                        if(data.deleteCount>0){
                            Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(coff=>coff._id !== id)
                            setCoffees(remaining)
                        }

                    })

            }
        })


    }

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className=" flex justify-between items-center w-full p-3">
                <div>
                    <h2 className="card-title">Name : {name}!</h2>
                    <p> Quantity : {quantity}</p>
                    <p> Quantity : {taste}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical gap-4">
                        <button className="btn btn-active">View</button>
                        <Link to={`/updateCoffee/${_id}`}><button className="btn">Edit</button></Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coffee;