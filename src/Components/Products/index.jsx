import { useDispatch, useSelector } from 'react-redux';
import { Card, Button, Typography, CardMedia, CardContent, CardActions, Grid } from '@mui/material';
import { When } from 'react-if';
import { addToCart } from '../../store/actions';
import { getProducts } from '../../store/products';
import { useEffect } from 'react';

function Products() {

    const { products } = useSelector((state) => state.products);
    const { activeCategory } = useSelector((state) => state.categories);
    const dispatch = useDispatch();
    // console.log(products);

    useEffect(() => {
        dispatch(getProducts())
    }, [activeCategory])

    return (
        <When condition={activeCategory}>
            <Grid container spacing={2} width="80%" margin="auto">
                {products.map((product, index) => (
                    <>
                        {
                            <Grid item xs={12} sm={6} md={6} lg={4}>
                                <Card key={`products-${index}`} sx={{ maxWidth: 345 }}>
                                    <CardMedia id="img-container"
                                        sx={{ height: 140 }}
                                        image={`https://source.unsplash.com/random/?${product.name}`}
                                        title="random image"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Name: {product.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Price: {product.price}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            In-Stock: {product.inStock}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <When condition={product.inStock}>
                                            <Button size="small" onClick={() => dispatch(addToCart(product))}>Add to Cart</Button>
                                        </When>
                                        <Button size="small">View Details</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        }
                    </>
                ))}
            </Grid>
        </When>
    )
}

export default Products;