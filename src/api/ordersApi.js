const SERVER_URL = process.env.REACT_APP_API_URL + "/orders/";

export const saveOrder = async (order) => {
  try {
    const response = await fetch(SERVER_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    });

    if (response.status === 201) return response.json();
    else return false;
  } catch (error) {
    console.log(error);
  }
};
