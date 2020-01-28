import React from 'react';

const foodBox = (props) => {
        return (
<div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={props.image} alt="Bild"/>
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{props.name}</strong> <br />
          <small>{props.calories}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input
            className="input"
            type="number" 
            value={props.value}
            defaultValue="1"
           />
        </div>
        <div className="control">
          <button className="button is-info">
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>
   )
}

export default foodBox;