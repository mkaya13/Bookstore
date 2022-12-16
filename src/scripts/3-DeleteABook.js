import axios from 'axios';

const BASE_API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZR0nQylHgbvq3hdVIrjx/books/3';

const response = await axios.delete(BASE_API, {
  item_id: '3',
}).then((response) => response.data);

console.log(response);
