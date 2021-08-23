const copier = (users) => users.map((users) => ({ ...users }));
function save(object) {
  const stringObj = JSON.stringify(object);
  localStorage.setItem("accounts", stringObj);
}
export default function accountsReducer(state, action) {
  switch (action.type) {
    case "add": {
      const copy = copier(state);
      const foundUser = copy.find(function (user) {
        return user.email.toLowerCase() === action.payload.email.toLowerCase();
      });
      if (foundUser) {
        save(state);
        return state;
      } else {
        copy.push(action.payload);
        save(copy);
        return copy;
      }
    }
    case "deposit": {
      const copy = copier(state);
      const foundUser = copy.find(function (user) {
        return user.id === action.payload.id;
      });
      if (foundUser) {
        foundUser.balance =
          Number(foundUser.balance) + Number(action.payload.amount);
        save(copy);
        return copy;
      } else {
        return state;
      }
    }
    case "withdraw": {
      const copy = copier(state);
      const foundUser = copy.find(function (user) {
        return user.id === action.payload.id;
      });
      console.log(foundUser);
      if (foundUser && foundUser.balance >= action.payload.amount) {
        foundUser.balance =
          Number(foundUser.balance) - Number(action.payload.amount);
        save(copy);
        return copy;
      } else {
        return state;
      }
    }
    case "transfer": {
      const { from, to, amount } = action.payload;
      const copy = copier(state);
      const sender = copy.find(function (user) {
        return user.id === action.payload.from;
      });
      const receiver = copy.find(function (user) {
        return user.id === action.payload.to;
      });
      if (from && to && amount <= sender.balance) {
        sender.balance = Number(sender.balance) - Number(amount);
        receiver.balance = Number(receiver.balance) + Number(amount);
        return copy;
      } else {
        save(copy);
        return state;
      }
    }
  }
}
