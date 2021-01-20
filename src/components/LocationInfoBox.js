const LocationInfoBox = ({ info }) => {
  return (
    <div className="location-info">
      <h2>Orca Location Info</h2>
      <ul>
        <li>
          Type: <strong>{info.species}</strong>
        </li>
        <li>
          Description: <strong>{info.description}</strong>
        </li>
        <li>
          Quantity: <strong>{info.quantity}</strong>
        </li>
      </ul>
    </div>
  );
};

export default LocationInfoBox;
