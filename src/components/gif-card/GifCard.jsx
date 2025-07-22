import PropTypes from "prop-types";

export const GifCard = ({ title, url }) => {
  return (
    <div className="h-80 w-full flex flex-col bg-zinc-100 border border-zinc-200 rounded-lg shadow-sm dark:bg-zinc-800 dark:border-zinc-700 overflow-hidden">
      {/* Imagen fija arriba */}
      <div className="h-60 w-full overflow-hidden">
        <img className="object-cover w-full h-full" src={url} alt={title} />
      </div>

      {/* Contenedor que empuja el título al fondo */}
      <div className="flex-1 flex flex-col justify-end p-4">
        <h5 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2 mt-auto">
          {title.trim()}
        </h5>
      </div>
    </div>
  );
};

GifCard.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
