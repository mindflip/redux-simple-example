import Redux from "redux";

// action creator
const createPolicy = (name, amount) => {
  return {
    type: "CREATE_POLICY",
    payload: {
      name,
      amount,
    },
  };
};

const deletePolicy = (name) => {
  return {
    type: "DELETE_POLICY",
    payload: {
      name,
    },
  };
};

const createClaim = (name, amountOfMoneyToCollect) => {
  return {
    type: "CREATE_CLAIM",
    payload: {
      name,
      amountOfMoneyToCollect,
    },
  };
};

// reducers
const claimsHistory = (oldListOfClaims = [], action) => {
  if (action.type === "CREATE_CLAIM") {
    return [...oldListOfClaims, action.payload];
  }

  return oldListOfClaims;
};

const accounting = (bagOfMoney = 100, action) => {
  if (action.type === "CREATE_CLAIM") {
    return bagOfMoney - action.payload.amountOfMoneyToCollect;
  } else if (action.type === "CREATE_POLICY") {
    return bagOfMoney + action.payload.amount;
  }

  return bagOfMoney;
};

const policies = (listOfPolicies = [], action) => {
  if (action.type === "CREATE_POLICY") {
    return [...listOfPolicies, action.payload.name];
  } else if (action.type === "DELETE_POLICY") {
    return listOfPolicies.filter((name) => name !== action.payload.name);
  }

  return listOfPolicies;
};

const { createStore, combineReducers } = Redux;

const outDepartments = combineReducers({
  accounting,
  claimsHistory,
  policies,
});

const store = createStore(outDepartments);

console.log(store.getState());

store.dispatch(createPolicy("TAINA", 50));
store.dispatch(createPolicy("MOLLI", 20));
store.dispatch(createPolicy("BANANA", 120));

console.log(store.getState());

store.dispatch(createClaim("MOLLI", 40));
store.dispatch(createClaim("MOLLI", 20));
store.dispatch(createClaim("TAINA", 10));

console.log(store.getState());

store.dispatch(deletePolicy("MOLLI"));

console.log(store.getState());
