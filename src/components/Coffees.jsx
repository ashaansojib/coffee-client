import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CoffeeCart from './coffeeCart';
const Coffees = () => {
    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees)
    const handleDelete = (id) => {
        fetch(`http://localhost:9988/coffees/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount>0){
                    alert('delete success')
                    const remainingCoffee = coffees.filter(coffee => coffee._id != id);
                    setCoffees(remainingCoffee)
                }
            })
    }
    return (
        <div className='coffee-cart'>
            {
                coffees.map(coffee => <CoffeeCart 
                    coffee={coffee}
                    handleDelete={handleDelete}
                    key={coffee._id}></CoffeeCart>)
            }
        </div>
    );
};

export default Coffees;