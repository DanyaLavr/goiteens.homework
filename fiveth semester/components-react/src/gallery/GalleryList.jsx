import GalleryItem from "./GalleryItem";

const GalleryList = ({ items, title = "Header" }) => {
  return (
    <>
      <h1>{title}</h1>
      {items.length === 0 ? (
        <p>There are not cards for render</p>
      ) : (
        <ul>
          {items.map(({ id, url, title, price, author, quantity }) => (
            <GalleryItem
              key={id}
              url={url}
              title={title}
              price={price}
              author={author}
              quantity={quantity}
              discount={id === "id-2" ? 10 : 0}
            />
          ))}
        </ul>
      )}
    </>
  );
};
export default GalleryList;
