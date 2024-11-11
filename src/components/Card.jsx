import * as React from 'react';

class Card extends React.Component {
  handleAuthorClick = () => {
    window.open(this.props.link, '_blank'); // Opens link in a new tab
  };
    render() {
      return(
          <div className="card">
            <img src={this.props.img} />
            <div className="card-body">
              <h2>{this.props.title}</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
              <h5 onClick={this.handleAuthorClick} style={{ cursor: 'pointer' , width: "fit-content" }}>
            {this.props.author}
          </h5>
            </div>
          </div>
      )
    }
  }
  
  export default Card;
  