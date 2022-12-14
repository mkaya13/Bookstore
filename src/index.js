import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import BookContainer from './components/BookContainer';
import Navbar from './components/Navbar';
import { store } from './redux/configureStore';

class App extends React.PureComponent {
  render() {
    return (
      <>
        <div className="main-holder">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<BookContainer />}
            />
            <Route
              path="/about"
              element={<div>This is gonna be the about page!</div>}
            />
          </Routes>
        </div>
      </>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router basename={process.env.PUBLIC_URL}>
        <App />
      </Router>
    </React.StrictMode>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
