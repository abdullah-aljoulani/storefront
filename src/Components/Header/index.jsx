import { useSelector } from 'react-redux';
import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material';

function Header() {
    const { cart } = useSelector((state) => state.cart);

    return (
        <AppBar data-testid="header" position='static' sx={{ backgroundColor: 'white' }}>
            <Container>
                <Toolbar disableGutters>
                    <Typography
                        variant='h4'
                        sx={{ color: 'black' }}>
                        The Storefront of Practicing
                    </Typography>
                    <Button>
                        Cart ({cart.length})
                    </Button>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header;