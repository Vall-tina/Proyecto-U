const HeroCard = ({  
  id,
  name,
  thumbnail,
  description,
  comics,
  series,
  stories,
}) => {
  const heroImageUrl = `${thumbnail.path}.${thumbnail.extension}`;

  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={heroImageUrl} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          {description && <p className="card-text">{description}</p>}
          {comics.available > 0 && (
            <p>
              <strong>Comics:</strong> {comics.available}
            </p>
          )}

          {series.available > 0 && (
            <p>
              <strong>Series:</strong> {series.available}
            </p>
          )}

          {stories.available > 0 && (
            <p>
              <strong>Historias:</strong> {stories.available}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeroCard;
