const SERVER_URL = 'http://localhost:4000/products/'

export const getProducts = async () => {
  try {
    const response = await fetch(SERVER_URL);

    if (response.status === 200)
      return response.json();
    else
      return [];

  } catch (error) {
    console.log(error)
  }
}

export const saveProduct = async product => {
  try {
    const response = await fetch(SERVER_URL, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });

    if (response.status === 201)
      return response.json();
    else
      return false;
  } catch (error) {
    console.log(error)
  }
}

export const updateProduct = async product => {
  try {
    const response = await fetch(SERVER_URL + product._id, {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });

    if (response.status === 200)
      return response.json();
    else
      return false;
  } catch (error) {
    console.log(error)
  }
}

export const deleteProduct = async id => {
  try {
    const response = await fetch(SERVER_URL + id, { method: 'DELETE' });
    return response.status === 204
  } catch (error) {
    console.log(error)
  }
}