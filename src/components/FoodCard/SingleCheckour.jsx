import useCart from "./UseCart";

const SingleCheckour = () => {

    const [cart] = useCart()

    return (
        <>
            <div className="">



                {
                    cart.map(res => <div key={res._id}>

                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
                                {/* head */}

                                <tbody className="mb-4">
                                    {/* row 1 */}
                                    <tr className="mt-5">

                                        <td className="mb-5">
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={res.image} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{res.name}</div>
                                                    <div className="text-sm opacity-50">United States</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            Zemlak, Daniel and Leannon
                                            <br />
                                            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                        </td>
                                        <td>Purple</td>
                                        <th>
                                            <button className="btn  btn-xs btn-primary" >x</button>
                                        </th>
                                    </tr>
                                    {/* row 2 */}
                                </tbody>

                            </table>
                        </div>

                    </div>)
                }
            </div>





        </>
    );
};

export default SingleCheckour;