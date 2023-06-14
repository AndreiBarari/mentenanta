import React from "react";
import { Service } from "../atoms/Service";
import { services } from "../data/serviceData";

export const Services = () => {
  const groupedServices = [];

  for (let i = 0; i < services.length; i += 3) {
    groupedServices.push(services.slice(i, i + 3));
  }

  return (
    <div className="services flex-row wrap">
      <h1 className="service-title">Serviciile noastre</h1>
      {groupedServices.map((group, index) => {
        const rowClassName = index % 2 === 0 ? "dark-blue" : "light-blue";
        return (
          <div key={index} className={`service-row flex-row ${rowClassName}`}>
            {group.map(service => (
              <Service
                key={service.id}
                className={`service flex-col ${service.id % 2 === 0 ? "dark-blue" : "light-blue"}`}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};
