import { Box, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../store/actions';

function SimpleCart(){

    const { cart } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    // console.log(cart)

    return(
            cart.map((product, index) => (
                <Box key={`cart-${index}`}>
                    {product.name}
                    <Button onClick={() => dispatch(removeFromCart(product))}>X</Button>
                </Box>
            ))
    )

}

export default SimpleCart;