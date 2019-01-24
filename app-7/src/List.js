//format here
import React from 'react';
import Todo from './ToDo';

export default function List( props ) {
  let list = props.tasks.map( ( element, index ) => {
    return (
      <Todo key={ index } task={ element } />
    )
  })

  return (
    <div>
      { list }
    </div>
  )
}