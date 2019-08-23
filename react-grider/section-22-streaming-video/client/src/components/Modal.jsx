import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
  /**
   * The below call creates a React portal and takes two arguments
   * - The first argument is some blob of jsx that we want to display
   * - The second argument is a reference to the element we want to render this portal into
   *  ^ We usually need to create an element in our index.html file to render our component into
   * 
   * We want to use React portals anytime we want to render some React component inside of an element not created by our application
   */
  return ReactDOM.createPortal(
    <div 
      className="ui dimmer modals visible active" 
      onClick={props.onDismiss}
    >
      <div
        className="ui standard modal visible active"
        // e.stopPropagation the event bubbling to the outer div event listener
        onClick={e => e.stopPropagation()}
      >
        <div className="header">
          {props.title}
        </div>
        <div className="content">
          {props.content}
        </div>
        <div className="actions">
          {props.actions}
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
}

export default Modal;