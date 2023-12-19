export const ComicCard = ({ id, title, thumbnail, description }) => {
    const comicImageUrl = `${thumbnail.path}.${thumbnail.extension}`;
  
    return (
      <div className="col">
        <div className="card h-100">
          <img src={comicImageUrl} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description || 'No hay descripción disponible.'}</p>
          </div>
        </div>
      </div>
    );
  };
  