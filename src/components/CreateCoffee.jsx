import React from 'react';

const CreateCoffee = () => {

    const handleAddCoffee = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const coffees = {name, quantity}

        fetch('http://localhost:9988/coffees', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(coffees)
        })
        .then( res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    return (
        <form onSubmit={handleAddCoffee} className="card w-[550px] mx-auto">
            <div className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Coffee Name</span>
                    </label>
                    <input type="text" name='name' placeholder="type coffee name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Quantity</span>
                    </label>
                    <input type="text" name='quantity' placeholder="How Many Needs" className="input input-bordered" />
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </div>
        </form>
    );
};

export default CreateCoffee;