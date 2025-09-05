import PropTypes from "prop-types";
const Panel = ({ title, children }) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};
export default Panel;
Panel.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
