import React from 'react';

const PostItem = (props) => {
  return (
    <div>
      <img src={props.pet.photo} />
      <div>{`Pet name: ${props.pet.name}`}</div>
      <div>{`Pet description: ${props.pet.description}`}</div>
    </div>
  );
}

export default PostItem;