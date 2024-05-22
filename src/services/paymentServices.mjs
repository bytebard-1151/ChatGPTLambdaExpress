//helper function

// to get random enum value
let getRandomEnumValue = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

// exports functions
export const getCurrentBalance = async (mid) => {
  // Simulate a delay of 2 seconds
  //   await new Promise((resolve) => setTimeout(resolve, 2000));
  let data = {
    balance: (Math.random() * (500 - 5) + 5).toFixed(2),
  };
  console.log("here is the mid", mid);
  console.log("getCurrentBalance", data);
  return data;
};

export const getUpcomingPayouts = async (mid) => {
  // Simulate a delay of 2 seconds
  //   await new Promise((resolve) => setTimeout(resolve, 2000));
  let data = {
    payouts: [
      {
        amount: (Math.random() * (500 - 5) + 5).toFixed(2),
        date: new Date(Date.now()).toISOString(),
        status: "pending",
      },
      {
        amount: (Math.random() * (500 - 5) + 5).toFixed(2),
        date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
        status: "sent",
      },
    ],
  };
  console.log("getUpcomingPayouts", data);
  return data;
};

export const status = async (mid) => {
  // Simulate a delay of 2 seconds
  //   await new Promise((resolve) => setTimeout(resolve, 2000));
  let status = ["active", "review", "pending", "blocked"];
  let data = {
    bankStatus: getRandomEnumValue(status),
    accountStatus: getRandomEnumValue(status),
    idStatus: getRandomEnumValue(status),
  };
  console.log("accountStatus", data);
  return data;
};

export const refund = async (mid, amount) => {
  // Simulate a delay of 2 seconds
  //   await new Promise((resolve) => setTimeout(resolve, 2000));
  let data = {
    status: "success",
    amount: (Math.random() * (100 - 5) + 5).toFixed(2),
  };
  console.log("refund", data);
  return data;
};
