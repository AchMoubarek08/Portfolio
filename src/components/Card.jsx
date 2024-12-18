import * as React from 'react';
import { motion } from "framer-motion";

class Card extends React.Component {
  handleAuthorClick = () => {
    window.open(this.props.link, '_blank'); // Opens link in a new tab
  };
    render() {
      return(
          <motion.div className="card"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          whileDrag={{ scale: 0.9, rotate: 10 }}
          drag
          >
            <img src={this.props.img} />
            <div className="card-body">
              <h2>{this.props.title}</h2>
              <p>{this.props.p}</p>
              <h5 onClick={this.handleAuthorClick} style={{ cursor: 'pointer' , width: "fit-content" }}>
            {this.props.author}
          </h5>
            </div>
          </motion.div>
      )
    }
  }
  
  export default Card;
  