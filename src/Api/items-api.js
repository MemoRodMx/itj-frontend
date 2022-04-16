const { REACT_APP_BACKEND_URI } = process.env;

const readItems = async (_id) => {
  try {
    let query = "";

    if (_id) query = `/${_id}`;

    const response = await fetch(REACT_APP_BACKEND_URI + `items${query}`);

    if (response.ok) return await response.json();
    else return [];
  } catch (err) {
    console.log(err);
  }
};

const createItem = async (body) => {
  try {
    const response = await fetch(REACT_APP_BACKEND_URI + "items", {
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

const updateItem = async (_id, body) => {
  try {
    const response = await fetch(REACT_APP_BACKEND_URI + "items", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(body),
    });

    if (response.ok) return await response.json();
    else return [];
  } catch (err) {
    console.log(err);
  }
};

const removeItem = async (_id) => {
  try {
    const response = await fetch(REACT_APP_BACKEND_URI + `items/${_id}}`, {
      method: "DELETE",
    });

    if (response.ok) return await response.json();
    else return [];
  } catch (err) {
    console.log(err);
  }
};

const functions = {
  readItems,
  createItem,
  updateItem,
  removeItem,
};

export default functions;
