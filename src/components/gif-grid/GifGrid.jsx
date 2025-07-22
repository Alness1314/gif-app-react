import PropTypes from "prop-types";
import { GifCard } from "../gif-card/GifCard";
import { useFetchGif } from "../../hooks/useFetchGif";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGif(category);

  return (
    <>
      <h2 className="pb-5 pt-15 text-4xl font-semibold">{category}</h2>
      {isLoading && (
        <h2 className="pb-5 pt-15 text-4xl font-semibold">Cargando...</h2>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-fr">
        {images.map((image) => (
          <GifCard key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
