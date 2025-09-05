const BuildInStyles = () => {
  const titleStyles = {
    color: "white",
    padding: "15px 10px",
    backgroundColor: "orange",
    borderRadius: 4,
  };
  return (
    <div
      style={{
        backgroundColor: "skyblue",
        padding: 20,
        borderRadius: 10,
        boxShadow: "10px 10px 10px rgba(0 , 0, 0, 0.5)",
        margin: 20,
      }}
      className=""
    >
      <h1 style={titleStyles}>Build In Styles</h1>
      <p>Please update your email!</p>
      <p>Thank you for yor feedback!</p>
    </div>
  );
};
export default BuildInStyles;
