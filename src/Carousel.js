import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0
  };

  static getDerivedStateFromProps({ media }) {
    let photos = ['"http://placekitten.com/600/600"'];

    if (media.length) {
      photos = media.map(({ large }) => large);
    }

    return { photos };
  }

  // Using an arrow function here ensures that 'this' refers to Carousel, similar to the .bind syntax when using a constructor
  // We need it here since we're using class fields and not the class constructor syntax
  handleIndexClick = event => {
    this.setState({
      active: parseInt(event.target.dataset.index)
    });
  };

  render() {
    const { photos, active } = this.state;

    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            // don't do this in prod!
            // eslint-disable-next-line
            <img
              src={photo}
              alt="animal thumbnail"
              key="photo"
              data-index={index}
              className={index === active ? "active" : ""}
              onClick={this.handleIndexClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
