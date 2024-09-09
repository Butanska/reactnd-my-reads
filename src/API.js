const api = "https://reactnd-books-api.udacity.com";

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token;
if (!token) {
  token = localStorage.token = Math.random().toString(36).substr(-8);
}

const headers = {
  Accept: "application/json",
  Authorization: token,
};

// Abstract fetch operation
async function customFetch(url, options) {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('Server response was not OK');
  }
  return response.json();
}

export const get = async (bookId) => {
  const data = await customFetch(`${api}/books/${bookId}`, { headers });
  return data.book;
};

export const getAll = async () => {
  const data = await customFetch(`${api}/books`, { headers });
  return data.books;
};

export const search = async (query) => {
  const options = {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };
  const data = await customFetch(`${api}/search`, options);
  return data.books;
};

export const update = async (book, shelf) => {
  const options = {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ shelf }),
  };
  return customFetch(`${api}/books/${book.id}`, options);
};