import React from "react";
import Tvs from '../../../Assets/icons/tv5.png';
import Viva from '../../../Assets/icons/viva.png';
import Martin from '../../../Assets/icons/martin.png';
import Falked from '../../../Assets/icons/falked.png';

const Clients = () => {
  const clientsLogo = [Tvs, Viva, Martin, Falked];

  return (
    
      <section className="clients d-flex justify-content-center">
      {clientsLogo.map((logo)=> 
        <img src={logo} alt="Brand Logo" className="clients-logo"/>
      )}
      </section>
    
  );
};

export default Clients;
