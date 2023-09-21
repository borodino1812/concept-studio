import TicketCard from "../components/TicketCard";
import prev1 from "../images/pyramid1.png";

const Showcase = () => {
  const tickets = [
    {
      preview: prev1,
      title: "Scandy Interior",
      desc: "lorem ipsum sit amet et cetera",
      category: "A1 2022",
      color: "#fff",
      status: "uploaded",
    },
    {
      preview: prev1,
      title: "Eco Interior",
      desc: "lorem ipsum sit amet et cetera",
      category: "A1 2022",
      color: "#fff",
      status: "uploaded",
    },
    {
      preview: prev1,
      title: "Eco Interior",
      desc: "lorem ipsum sit amet et cetera id est",
      category: "B2 2023",
      color: "#999",
      status: "uploaded",
    },
    {
      preview: prev1,
      title: "Minimalistic Interior",
      desc: "lorem ipsum sit amet et cetera",
      category: "A1 2023",
      color: "#333",
      status: "uploaded",
    },
    {
      preview: prev1,
      title: "Minimalistic Interior Demo",
      desc: "lorem ipsum sit amet et cetera",
      category: "A1 2023",
      color: "#333",
      status: "hidden",
    },
  ];

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];
  console.log(uniqueCategories);

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
