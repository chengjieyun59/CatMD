import React from 'react';

const PostItem = (props) => {


  return (
    <div className="post">
      <div className="postLeft">
        <div>{`Pet name: ${props.pet.name}`}</div>
        <img className="catImg" src={props.pet.photourl} />
      </div>
      <div className="postRight">
        {/* <span onclick="this.parentElement.parentElement.style.display='none'" class="deleteButton">x</span> */}
        <div>{props.pet.description}</div>
      </div>
    </div>
  );
}

export default PostItem;