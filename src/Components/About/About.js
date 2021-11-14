import React from 'react';
import { Image } from 'react-bootstrap';
import people1 from "../../images/people1.jpg"
import people2 from "../../images/people2.jpg"
const About = () => {
    return (
        <div className="m-5">
           <div className="d-flex align-items-center">
               <div className="w-100 p-4"><Image src={people1} roundedCircle fluid /></div>
               <div className="w-75 p-4"><h1>Director:<h3>Aquib Hossain</h3></h1><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, perferendis? Dolorum voluptates minima, architecto accusamus aut labore mollitia natus nostrum officiis hic id aliquam perferendis assumenda facere eius recusandae maxime dolore deleniti blanditiis! Amet, animi deserunt voluptas atque odio in possimus architecto, sit debitis dolor fugit exercitationem, aspernatur sint dolorum.</p>
               <hr /></div>
           </div>
           <div className="d-flex align-items-center">
               
               <div className="w-75 p-4"><h1>CEO:<h3>Marjia Sultana</h3></h1><p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, perferendis? Dolorum voluptates minima, architecto accusamus aut labore mollitia natus nostrum officiis hic id aliquam perferendis assumenda facere eius recusandae maxime dolore deleniti blanditiis! Amet, animi deserunt voluptas atque odio in possimus architecto, sit debitis dolor fugit exercitationem, aspernatur sint dolorum.<hr /></p></div>
               <div className="w-100 p-4"><Image src={people2} roundedCircle fluid /></div>
           </div>
           
        </div>
    );
};

export default About;