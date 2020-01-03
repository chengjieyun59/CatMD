import React from 'react';

const PostItem = (props) => {
  return (
    <div className="post">
      <div className="postLeft">
        <div>{`Pet name: ${props.pet.name}`}</div>
        <img className="catImg" src={props.pet.photourl} />
      </div>
      <div className="postRight">
        {/* <span onclick="this.parentElement.parentElement.style.display='none'" class="closeButton">x</span> */}
        <div>{props.pet.description}</div>
        <button type="button" onClick={() => props.handleClick(props.pet.name)}>Delete</button>
      </div>
    </div>
  );
}

export default PostItem;