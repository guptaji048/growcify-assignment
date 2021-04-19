import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

function CategoryItem() {
  const { id } = useParams();
  const history = useHistory();

  console.log(id);
  return (
    <div>
      <p>Lorem Ipsum</p>
      <p>Id: {id}</p>
      <button
        onClick={(e) => {
          history.push("/");
        }}
      >
        Back
      </button>
    </div>
  );
}

export default CategoryItem;
