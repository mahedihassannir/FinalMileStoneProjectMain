import { useContext } from "react";
import { contexM } from "../AuthProvider/ContexSuplier";



const FoodCard = ({ item }) => {
    const { _id, name, image, price, recipe } = item;

  
    const { user } = useContext(contexM)


    const FaShoppingCart = (item) => {
        // console.log(item);

        if (user) {

            const orderItem = { UserID: _id, name, image, price, recipe, UserEmail: user.email }
            console.log(orderItem);
            fetch(`http://localhost:5000/Cart`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(orderItem)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);


                    if (data.insertedId) {
                        
                        alert("cart added done")
                    }
                })
        }

    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => FaShoppingCart(item)} className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400 mt-4">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;