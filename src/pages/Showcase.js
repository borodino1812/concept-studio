import React from "react";
import TicketCard from "../components/TicketCard";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import CategoriesContext from "../context";

const Showcase = () => {
  const [tickets, setTickets] = useState(null);
  const { categories, setCategories } = useContext(CategoriesContext);

  useEffect(async () => {
    const response = await axios.get("http://localhost:8000/tickets");

    const dataObject = response.data || {};

    const arrayOfKeys = Object.keys(dataObject);
    const arrayOfData = Object.keys(dataObject).map((key) => dataObject[key]);
    const formattedArray = [];

    arrayOfKeys.forEach((key, index) => {
      const formattedData = { ...arrayOfData[index] };
      formattedData["documentId"] = key;
      formattedArray.push(formattedData);
    });

    setTickets(formattedArray);
  }, []);

  useEffect(() => {
    setCategories([...new Set(tickets?.map(({ category }) => category))]);
  }, [tickets]);

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div className="showcase">
      <h1>Tickets List</h1>
      <div className="ticket-container">
        {tickets &&
          uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex}>
              <h3>{uniqueCategory}</h3>
              {tickets
                .filter((ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket, _index) => {
                  return <TicketCard id={_index} ticket={filteredTicket} />;
                })}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Showcase;
