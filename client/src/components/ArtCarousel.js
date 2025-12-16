import React from "react";

const artworks = [
  {
    id: 1,
    title: "Abstract Harmony",
    artist: "Elena Rodriguez",
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&auto=format&fit=crop",
    description: "A vibrant exploration of color and form",
  },
  {
    id: 2,
    title: "Cultural Echoes",
    artist: "Yuki Tanaka",
    image:
      "https://images.unsplash.com/photo-1577083553878-c65b2c4d8d5f?w=800&auto=format&fit=crop",
    description: "Traditional meets contemporary in this stunning piece",
  },
  {
    id: 3,
    title: "Nature's Canvas",
    artist: "Marcus Johnson",
    image:
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=800&auto=format&fit=crop",
    description: "Celebrating the beauty of natural landscapes",
  },
  {
    id: 4,
    title: "Urban Symphony",
    artist: "Sofia Chen",
    image:
      "https://images.unsplash.com/photo-1549887534-1541e9326642?w=800&auto=format&fit=crop",
    description: "The rhythm of city life captured in color",
  },
];

const ArtCarousel = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold fs-1">
            Featured <span className="text-primary">Artworks</span>
          </h2>
          <p className="text-muted fs-5">
            Discover exceptional pieces from talented artists around the world
          </p>
        </div>

        <div
          id="artCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          {/* Indicators */}
          <div className="carousel-indicators">
            {artworks.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#artCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>

          {/* Slides */}
          <div className="carousel-inner rounded shadow-lg">
            {artworks.map((art, index) => (
              <div
                key={art.id}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img
                  src={art.image}
                  className="d-block w-100 img-fluid"
                  alt={art.title}
                  style={{ maxHeight: "500px", objectFit: "cover" }}
                />
                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-3">
                  <h3>{art.title}</h3>
                  <p className="mb-1">by {art.artist}</p>
                  <p>{art.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#artCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#artCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ArtCarousel;
