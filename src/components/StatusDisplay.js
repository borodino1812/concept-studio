const StatusDisplay = ({ status }) => {
  //
  //
  const getColor = (status) => {
    let color;
    switch (status) {
      case "not uploaded":
        color = "#e59866";
        break;
      case "uploaded":
        color = "#080";
        break;
      case "hidden":
        color = "#566";
        break;
      default:
        color = "#0f0";
    }
    return color;
  };
  return (
    <div
      className="status-display"
      style={{ backgroundColor: getColor(status) }}
    >
      {status}
    </div>
  );
};

export default StatusDisplay;
