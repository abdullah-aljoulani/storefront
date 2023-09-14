import { useSelector } from 'react-redux';
import { Card, Button, Typography, CardMedia, CardContent, CardActions } from '@mui/material';

function Products() {

    const { products } = useSelector((state) => state.products);
    // console.log(products);

    return (
        products.map((product, index) => (
            <>
                {
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
                            <Button size="small">Add to Cart</Button>
                            <Button size="small">View Details</Button>
                        </CardActions>
                    </Card >
                }
            </>
        ))
    )
}

export default Products;