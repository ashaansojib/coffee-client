import { FaWindowClose } from "react-icons/fa";
const CoffeeCart = ({ coffee, handleDelete }) => {

    
    return (
        <div className="border text-center p-2">
            <h2>{coffee.name}</h2>
            <span>{coffee.quantity}</span>
            <span>
                <FaWindowClose onClick={() => handleDelete(coffee._id)}></FaWindowClose>
            </span>
        </div>
    );
};

export default CoffeeCart;