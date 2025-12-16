import React from "react";

const galleryItems = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1580136579312-94651dfd596d?w=600&auto=format&fit=crop",
    title: "Traditional Crafts",
    category: "Heritage",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=600&auto=format&fit=crop",
    title: "Modern Expression",
    category: "Contemporary",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=600&auto=format&fit=crop",
    title: "Cultural Dance",
    category: "Performance",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&auto=format&fit=crop",
    title: "Abstract Vision",
    category: "Modern Art",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=600&auto=format&fit=crop",
    title: "Ancient Wisdom",
    category: "Sculpture",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1578926078115-58c99db2cdad?w=600&auto=format&fit=crop",
    title: "Digital Canvas",
    category: "Digital Art",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-5 bg-body">
      <div className="container px-4">
        {/* Section header */}
        <div className="text-center mb-5 fade-in">
          <h2 className="fw-bold display-5 mb-3">
            Our <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-secondary fs-5 mx-auto" style={{ maxWidth: "700px" }}>
            Explore diverse artistic expressions from cultures around the globe
          </p>
        </div>

        {/* Gallery grid */}
        <div className="row g-4">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className="col-12 col-md-6 col-lg-4 scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className="card border-0 shadow-lg overflow-hidden position-relative h-100"
                style={{ transition: "all 0.5s ease" }}
              >
                <div className="position-relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="card-img-top"
                    style={{
                      objectFit: "cover",
                      aspectRatio: "1 / 1",
                      transition: "transform 0.7s ease",
                    }}
                  />
                  {/* Overlay */}
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-end p-4 text-white"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2), transparent)",
                      opacity: 0,
                      transform: "translateY(100%)",
                      transition: "all 0.5s ease",
                    }}
                  >
                    <h5 className="fw-bold mb-1">{item.title}</h5>
                    <p className="small mb-0 text-white-50">{item.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hover and animation styles */}
      <style>{`
        .fade-in {
          opacity: 0;
          animation: fadeIn 1s ease forwards;
        }

        .scale-in {
          opacity: 0;
          transform: scale(0.9);
          animation: scaleIn 0.6s ease forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scaleIn {
          to { opacity: 1; transform: scale(1); }
        }

        .card:hover img {
          transform: scale(1.1);
        }

        .card:hover div.position-absolute {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
};

export default Gallery;
