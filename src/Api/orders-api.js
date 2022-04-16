const { REACT_APP_BACKEND_URI } = process.env;

const createOrder = async (body) => {
  try {
    const response = await fetch(REACT_APP_BACKEND_URI + "orders", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(body),
    });

    if (response.ok) return await response.json();
    else return [];
  } catch (err) {
    console.log(err);
  }
};

const functions = {
  createOrder,
};

export default functions;
