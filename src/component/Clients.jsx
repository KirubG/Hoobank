import React from "react";
import { clients } from "../constant";
import Marquee from "react-fast-marquee";

const Clients = () => {
  return (
    <div>
      <Marquee
        speed={50}
        pauseOnHover={true}
        className="items-center w-full mt-20 flex justify-between gap-10"
      >
        {clients.map((client, index) => {
          return (
            <div
              key={client.id}
              className="flex items-center justify-between mx-20 "
            >
              <img src={client.logo} alt={client.id} width={200} />
            </div>
          );
        })}
      </Marquee>
      <Marquee
        direction="right"
        speed={50}
        pauseOnHover={true}
        className="items-center w-full mt-20 flex justify-between gap-10"
      >
        {clients.map((client, index) => {
          return (
            <div
              key={client.id}
              className="flex items-center justify-between mx-20 "
            >
              <img src={client.logo} alt={client.id} width={200} />
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default Clients;
