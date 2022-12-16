import axios from 'axios';

const BASE_API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

const response = await axios(BASE_API, { method: 'POST' }).then(
  (response) => response.data,
);

console.log(response);
