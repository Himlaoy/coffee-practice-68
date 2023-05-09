import React from 'react';
import Swal from 'sweetalert2'

const AddCoffee = () => {



    const handleCoffee = (event)=>{
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const taste = form.Taste.value
        const category = form.category.value
        const detail = form.detail.value
        const photo = form.photo.value
        const info = {name, quantity, supplier, taste, category, detail, photo, }
        console.log(info)

        fetch('http://localhost:5000/coffee',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(info)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }


    return (
        <div className='bg-[#F4F3F0] p-24'>
            <form onSubmit={handleCoffee}>
                <div className='md:flex mt-4'>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter coffee name" name='name' className="input input-bordered  w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Quantity" name='quantity' className="input input-bordered w-full ms-3" />
                        </label>
                    </div>
                </div>
                {/* supplier and test row */}
                <div className='md:flex mt-4'>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="supplier" name='supplier' className="input input-bordered  w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Taste" name='Taste' className="input input-bordered w-full ms-3" />
                        </label>
                    </div>
                </div>
                {/* category and detail */}
                <div className='md:flex mt-4'>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter category name" name='category' className="input input-bordered  w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Detail</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="detail" name='detail' className="input input-bordered w-full ms-3" />
                        </label>
                    </div>
                </div>
                <div className=' mt-4'>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Enter coffee name" name='photo' className="input input-bordered  w-full" />
                        </label>
                    </div>
                </div>
                
                <input className="btn btn-block mt-5" type="submit" value="Add Coffee" />
            </form>
        </div>
    );
};

export default AddCoffee;