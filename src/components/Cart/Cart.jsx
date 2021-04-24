import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import CartItem from './CartItem/CartItem';
import useStyles from './styles';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
  const classes = useStyles();

  const handleEmptyCart = () => onEmptyCart();

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">Tu no tienes productos en tu carrito,
      <Link className={classes.link} to="/">empieza ha añadir aqui</Link>!
    </Typography>
  );

  if (!cart.line_items) return 'Loading';

  const renderCart = () => ( 
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((lineItem) => (
          <Grid item xs={12} sm={4} key={lineItem.id}>
            <CartItem item={lineItem} onUpdateCartQty={onUpdateCartQty} onRemoveFromCart={onRemoveFromCart} />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <div>
          <Button className={classes.checkoutButton} component={Link} to="/checkout" size="large" type="button" variant="contained" color="#387c6d">Comprar</Button>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" onClick={handleEmptyCart}>Limpiar Carrito</Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <div className={classes.container_title}>
        <Typography variant="h5" gutterBottom>Tu carrito de compras</Typography>
        <Typography variant="h5">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
      </div>
      { !cart.line_items.length ? renderEmptyCart() : renderCart() }
    </Container>
  );
};

export default Cart;
