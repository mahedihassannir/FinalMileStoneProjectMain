import useCart from "./UseCart";

const SingleCheckour = () => {

    const [cart] = useCart()

    console.log(cart);
    return (
        <>


            {
                cart.map(res => <div key={res._id}>

                    <h1>{res.name}</h1>
                    <img src={res.image} alt="" />


                </div>)
            }



        </>
    );
};

export default SingleCheckour;