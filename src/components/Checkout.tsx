export function Checkout() {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Your Name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput2"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput3"
          placeholder="Your Address"
        />
      </div>
      <div className="ms-auto fw-bold float-end">
        <button type="submit" className="btn btn-sm btn-secondary ">
          Submit Order
        </button>
      </div>
    </form>
  );
}
