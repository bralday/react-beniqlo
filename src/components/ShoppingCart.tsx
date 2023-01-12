import React from "react";
import { useState } from "react";
import { Button, Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useStore } from "../context/StoreContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import { Checkout } from "./Checkout";
import classes from "./ShoppingCart.module.css";

type ShoppingCartProps = {
  isOpen: boolean;
};

type UserData = {
  name: string;
  email: string;
  address: string;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, clearCart, cartItems } = useShoppingCart();
  const { storeItems } = useStore();
  const [didSubmit, setDidSubmit] = useState(false);

  // submit order to firebase
  const submitOrderHandler = async (userData: UserData) => {
    await fetch(
      "https://react-http-d1854-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartItems,
        }),
      }
    );
    setDidSubmit(true);
    clearCart();
  };

  const hasItems = cartItems.length > 0;

  const orderSuccess = (
    <div className={classes["sucess-wrapper text-center"]}>
      <div className={classes.success}>
        <h2 className="text-center">Thank you for your order!</h2>
        <p className={classes["email-msg"]}>
          Check your email inbox for the receipt
        </p>
        <p className={classes.description}>
          If you have any questions please email{" "}
          <a className={classes.email} href="mailto:order@example.com">
            order@example.com
          </a>
        </p>
        <Button
          onClick={() => {
            closeCart(), setDidSubmit(false);
          }}
          type="button"
          className="btn btn-secondary"
        >
          Continue Shopping
        </Button>
      </div>
    </div>
  );

  return (
    <Offcanvas
      show={isOpen}
      onHide={() => {
        closeCart(), setDidSubmit(false);
      }}
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Your Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          {!hasItems && !didSubmit && (
            <p className="text-center">No items in cart...</p>
          )}
          {didSubmit && orderSuccess}
          {!didSubmit && (
            <div className="ms-auto fw-bold fs-5">
              Total{" "}
              {formatCurrency(
                cartItems.reduce((total, cartItem) => {
                  const item = storeItems.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
            </div>
          )}
        </Stack>
      </Offcanvas.Body>
      <div className="sticky-bottom bg-light p-2">
        {hasItems && <Checkout onConfirm={submitOrderHandler} />}
      </div>
    </Offcanvas>
  );
}
