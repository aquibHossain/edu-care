import React, { useEffect, useState } from 'react';
import { CardGroup, Row } from 'react-bootstrap';
import FetchData from '../Hook/Hook';


import Service from '../Service/Service';
import Spin from '../Spinner/Spin';

const Services = () => {
   const [service]=FetchData()
    return (
        <div> 
             {
                service.length==0?<Spin></Spin>:(<CardGroup>
                    <Row xs={1} md={3} className="g-4">
                    {
                        service.map(serv=><Service serv={serv} key={serv.id} ></Service>)
                    }
                    </Row>
                   </CardGroup>)
            } 
 
          
        </div>
    );
};

export default Services;