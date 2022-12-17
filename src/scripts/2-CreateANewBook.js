import axios from 'axios';

const BASE_API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ZR0nQylHgbvq3hdVIrjx/books';

const response = await axios.post(BASE_API, {
  item_id: '3',
  title: 'Outliers',
  author: 'Malcolm Gladwell',
  category: 'Science',
}).then((response) => response.data);

console.log(response);
