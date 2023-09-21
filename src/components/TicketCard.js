import { Link } from "react-router-dom";
import PreviewDisplay from "./PreviewDisplay";
import TitleDisplay from "./TitleDisplay";
import DescDisplay from "./DescDisplay";
import DeleteBlock from "./DeleteBlock";
import StatusDisplay from "./StatusDisplay";

const TicketCard = ({ ticket }) => {
  return (
    <div className="ticket-card">
      <Link to={`/ticket/${ticket.documentId}`} id="link">
        <StatusDisplay status={ticket.status} />
        <h3>{ticket.title}</h3>
        <PreviewDisplay ticket={ticket} />
        <TitleDisplay />
        <DescDisplay />
      </Link>
      <DeleteBlock />
    </div>
  );
};

export default TicketCard;
