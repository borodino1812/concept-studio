import prevBlank from "../images/snake1.png";

const PreviewDisplay = ({ ticket }) => {
  return (
    <div className="preview-container">
      <img src={ticket.preview ? ticket.preview : prevBlank} alt="preview" />
    </div>
  );
};

export default PreviewDisplay;
