import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { contexM } from '../AuthProvider/ContexSuplier';

const useCart = () => {
    const { user } = useContext(contexM);

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['Cart', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/cart?email=${user?.email}`)
            return res.json();
        },
    })

    return [cart, refetch]

}
export default useCart;