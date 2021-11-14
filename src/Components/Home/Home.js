import React from 'react';
import { Carousel, Row } from 'react-bootstrap';
import cover from "../../images/cover.jpg"
import cover2 from "../../images/cover2.jpg"
import cover3 from "../../images/cover3.jpg"
import FetchData from '../Hook/Hook';
import Service from '../Service/Service';
import Spin from '../Spinner/Spin';

const Home = () => {
    const [service]=FetchData()
    return (
        <div> 
            {
                service.length==0?<Spin></Spin>:(<div><div >
                    <Carousel fade>
          <Carousel.Item>
            <img height="500rem"
              className="d-block w-100"
              src={cover}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img height="500rem"
              className="d-block w-100"
              src={cover2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img height="500rem"
              className="d-block w-100"
              src={cover3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
                    </div>
                    <div>
                        <h1 className="text-center mt-5 fw-bold text-danger">Services</h1>
                        <div>
                        <Row xs={1} md={3} className="g-4">
         
            {service.slice(0,3).map(serv=><Service serv={serv} key={serv.id} ></Service>)}
        
        </Row>
                        </div>
                    </div></div>)
            }
            
            
        </div>
    );
};

export default Home;