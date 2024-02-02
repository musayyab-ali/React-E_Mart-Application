export const AddtoCart = (product) => {
  return {
    type: "ADDTOCART",
    payload: product,
  };
};

export const DeltoCart = (product) => {
  return {
    type: "DELTOCART",
    payload: product,
  };
};
