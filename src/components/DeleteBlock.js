const DeleteBlock = () => {
  const deleteTicket = () => {
    console.log("deleted");
  };

  return (
    <div className="delete-block">
      <div className="delete-icon" onClick={deleteTicket}>
        delete
      </div>
    </div>
  );
};

export default DeleteBlock;
