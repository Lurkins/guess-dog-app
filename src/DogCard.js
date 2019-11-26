import React from 'react';
import {
Card,
} from 'reactstrap'; 

const DogCard = (props) => {

  return (
    <Card props={props.props} >
      <img className="w-100 mb-2 rounded" src={props.props} alt={props.props} />
      <div className="p-3">
        <h3>Card title</h3>
        <p>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This card has even longer content than the first to
            show that equal height action.
        </p>
      </div>

      {/* <blockquote className="blockquote mb-0 card-body">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.
      </p>
      <footer className="blockquote-footer">
        <small className="text-muted">
          Someone famous in <cite title="Source Title">Source Title</cite>
        </small>
      </footer>
    </blockquote> */}
   
    </Card>
    // <Card>
    //     <img src={props} alt="dog" />
    //     <Card.Text>
    //     This is a longer card with supporting text below as a natural lead-in to
    //     additional content. This content is a little bit longer.
    //   </Card.Text>
    // </Card>
  );
}

export default DogCard;