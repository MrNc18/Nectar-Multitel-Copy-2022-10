// here we define all the application level states and define actions to make the changes to the state

export const initialState = {
  basket: localStorage.getItem("basket")
    ? JSON.parse(localStorage.getItem("basket"))
    : [],
    wish: localStorage.getItem("wish")
    ? JSON.parse(localStorage.getItem("wish"))
    : [],
};

//Selector

export const getBasketTotal = (basket) => {
  return basket?.reduce(
    (amount, item) => amount + item.price * item.quantity,
    0
  );
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      const newItem = action.item;
      const existItem = state.basket.find((item) => item.id === newItem.id);
      const cartItems = existItem
        ? state.basket.map((item) =>
            item.id === existItem.id ? newItem : item
          )
        : [...state.basket, newItem];

      localStorage.setItem("basket", JSON.stringify(cartItems));
      return {
        ...state,
        basket: cartItems,
      };

    case "REMOVE_FROM_BASKET":
      const newBasket = state.basket.filter((item) => item.id !== action.id)
      localStorage.setItem("basket", JSON.stringify(newBasket));
      return {
        ...state,
        basket: newBasket,
      };
      case "ADD_TO_WISH":
        const newWish = action.item;
        const existWish = state.wish.find((item) => item.id === newWish.id);
        const WishItems = existWish
          ? state.wish.map((item) =>
              item.id === existWish.id ? newWish : item
            )
          : [...state.wish, newWish];
  
        localStorage.setItem("wish", JSON.stringify(WishItems));
        return {
          ...state,
          wish: WishItems,
        };

        case "REMOVE_FROM_WISH":
          const newwish = state.wish.filter((item) => item.id !== action.id)
          localStorage.setItem("wish", JSON.stringify(newwish));
          return {
            ...state,
            wish: newwish,
          };

    case "CHANGE_QTY":
      const prdt = state.basket.find((e) => e.id == action.id);
      if (prdt) {
        if (action.payload == "increment") {
          if(prdt.quantity < "25"){
          prdt.quantity += 1;
        }
        else{
          alert("Quantity Limit Exceeded")
        }
        } else if (action.payload == "decrement") {
          if (prdt.quantity > 1) prdt.quantity -= 1;
        }
      } else {
        alert(`Product doesn't exist in the basket!`);
      }
      localStorage.setItem("basket", JSON.stringify(state.basket));
      return {
        ...state,
        basket: state.basket,
      };
    default:
      return state;
  }
};

export default reducer;
