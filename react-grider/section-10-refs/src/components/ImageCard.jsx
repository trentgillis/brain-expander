import React from "react";

// React Refs
// - the React refs system gives us access to a single DOM element
// - We create refs in the constructor, assign them to instance variables, then pass to a particular JSX element as props

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = { spans: 0 };

    // The below is how we create a React ref (ref is short for reference)
    // Refs allow us to reach into the DOM and obtain data pertaining to an individual element
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    // We can ensure that the image data we are working with is valid by using an event listener and listening for the load event
    // ^ we must do this to avoid timing issues where we try to access properties of the image when it is not yet available
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10 + 1);
    this.setState({ spans });
  }

  render() {
    // The below is an example of object destructuring
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        {/* We can wire up a React ref by passing the desired ref to the ref prop of an element */}
        {/* Doing this allows us to access imageRef anywhere inside of this component to gain information about the elements DOM node */}
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;