import React from 'react';
import { useContext } from 'react';
import { FormContext } from './Form';

export default (props) => {
  const context = useContext(FormContext); //3

  const addToList = (value) => {
    context.setLikes([value].concat(context.likes));
  }; //4
  const removeFromList = (value) =>
    context.setLikes(context.likes.filter((v) => v !== value)); //5
  // console.log(context); 6
  //7
  return (
    <div>
      <label>
        <input
          onChange={(e) =>
            e.target.checked ? addToList('Ruby') : removeFromList('Ruby')
          }
          type="checkbox"
          name="likes[]"
        />{' '}
        Ruby
      </label>
      <label>
        <input
          onChange={(e) =>
            e.target.checked
              ? addToList('Javascript')
              : removeFromList('Javascript')
          }
          type="checkbox"
          name="likes[]"
        />{' '}
        Javascript
      </label>
    </div>
  );
};
