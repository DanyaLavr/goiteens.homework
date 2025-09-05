import PropTypes from "prop-types";
const GalleryItem = ({ url, title, price, author, quantity, discount }) => {
  return (
    <li>
      <img src={url} alt={title} width={280} />
      <h3>{title}</h3>
      <p>Price:{discount ? (price / 100) * (100 - discount) : price}</p>
      <div className="">
        <h3>Creator: {author.tag}</h3>
        <a href={author.url}>Link</a>
      </div>
      <p>Quantity : {quantity}</p>
    </li>
  );
};
export default GalleryItem;
GalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  author: PropTypes.shape({
    tag: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
  quantity: PropTypes.number.isRequired,
  discount: PropTypes.number,
};
// GalleryItem.defaultProps = {
//   discount: 0,
// };
