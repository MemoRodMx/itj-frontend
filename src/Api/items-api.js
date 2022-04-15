const { REACT_APP_BACKEND_URI } = process.env;

const readItems = async (_id) => {
  try {
    let query = "";

    if (_id) query = `/${_id}`;

    const response = await fetch(REACT_APP_BACKEND_URI + `/items${query}`);

    if (response.ok) return await response.json();
    else return [];
  } catch (err) {
    console.log(err);
  }
};

const functions = {
  readItems,
};

export default functions;
