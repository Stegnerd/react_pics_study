import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spans: 0
    };

    // this allows you to interact with the element in the dom
    // kind of like document.queryselector()
    this.imageRef = React.createRef();
  }

  // once the component triggers load, call the setspans method
  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;

    // height of the imnage divided by the styling grid-auto-rows
    // add row to round up so no overlap
    const spans = Math.ceil(height / 10 + 1);
    this.setState({ spans });
  };

  render() {
    // example of deconstruction on image object to get properties we need
    // rather than doing this.props.image.blah everytime
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
