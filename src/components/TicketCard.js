import { Link } from "react-router-dom";
import PreviewDisplay from "./PreviewDisplay";
import TitleDisplay from "./TitleDisplay";
import DescDisplay from "./DescDisplay";
import DeleteBlock from "./DeleteBlock";
import StatusDisplay from "./StatusDisplay";

const TicketCard = ({ ticket }) => {
  return (
    <div className="ticket-card">
      <Link to={`/ticket/${ticket.id}`} id="link">
        <StatusDisplay status={ticket.status} />
        <h3>{ticket.title}</h3>
        <PreviewDisplay ticket={ticket} />
        <TitleDisplay title={ticket.title} />
        <DescDisplay desc={ticket.desc} />
      </Link>
      <DeleteBlock documentId={ticket.id} />
    </div>
  );
};

export default TicketCard;
