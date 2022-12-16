import axios from 'axios';

const BASE_API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZR0nQylHgbvq3hdVIrjx/books';

const response = await axios.get(BASE_API).then(
  (response) => response.data,
);

console.log(response);
