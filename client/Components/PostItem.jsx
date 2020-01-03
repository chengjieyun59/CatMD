import React from 'react';

const PostItem = (props) => {
  return (
    <div className="post">
      <div className="postLeft">
        <div>{`Pet name: ${props.pet.name}`}</div>
        <img className="catImg" src={props.pet.photourl} />
      </div>
      <div id="postRight">
        <div>{props.pet.description}</div>
        <button className="button"type="button" onClick={() => props.handleClickEdit(props.pet.name, props.pet.description)}>Edit</button>
        <button className="delbutton" type="button" onClick={() => props.handleClickDelete(props.pet.name)}>Delete</button>
      </div>
    </div>
  );
}

export default PostItem;