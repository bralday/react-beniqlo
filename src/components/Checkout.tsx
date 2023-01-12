import React from "react";
import { Button } from "react-bootstrap";

const isEmpty = (value: string) => value.trim() === "";
type UserData = {
  name: string;
  email: string;
  address: string;
};

type CartProps = {
  onConfirm: (userData: UserData) => {};
};

export const Checkout: React.FC<{ onConfirm: (userData: UserData) => void }> = (
  props
) => {
  const nameInputRef = React.useRef<HTMLInputElement>(null);
  const emailInputRef = React.useRef<HTMLInputElement>(null);
  const addressInputRef = React.useRef<HTMLInputElement>(null);

  const confirmHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const enteredName = nameInputRef.current!.value;
    const enteredEmail = emailInputRef.current!.value;
    const enteredAddress = addressInputRef.current!.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredEmailIsValid = !isEmpty(enteredEmail);
    const enteredAddressIsValid = !isEmpty(enteredAddress);

    const formIsValid =
      enteredNameIsValid && enteredEmailIsValid && enteredAddressIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      email: enteredEmail,
      address: enteredAddress,
    });
  };
  return (
    <form onSubmit={confirmHandler}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Your Name"
          ref={nameInputRef}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput2"
          placeholder="name@example.com"
          ref={emailInputRef}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="address" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput3"
          placeholder="Your Address"
          ref={addressInputRef}
          required
        />
      </div>
      <div className="ms-auto fw-bold float-end">
        <Button type="submit" className="btn btn-sm btn-secondary ">
          Submit Order
        </Button>
      </div>
    </form>
  );
};
