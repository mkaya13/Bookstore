import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

export const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <div>
          <h2>{categories}</h2>
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            dispatch(checkStatus());
          }}
        >
          Check Status
        </button>
      </div>
    </>
  );
};

export default Categories;
