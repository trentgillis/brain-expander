import React from "react";

const ImageList = (props) => {
  // The below shows how we can take an array of items and create a list of DOM elements to be displayed to the user
  // A key property should added to all elements that are being rendered as part of a list
  // ^ This allows React to be better performing when rendering a list of items 
  // We want the key property on our elements to be unique in order for React to be able to know when two items are different
  const images = props.images.map(({urls, id, description}) => {
    return <img src={urls.regular} alt={description} key={id} />;
  });

  return (
    <div>{images}</div>
  );
}

export default ImageList;