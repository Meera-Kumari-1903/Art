import React from "react";

const features = [
  {
    icon: "bi-globe",
    title: "Global Reach",
    description:
      "Connect with artists and enthusiasts from every corner of the world",
  },
  {
    icon: "bi-people-fill",
    title: "Community",
    description:
      "Join a vibrant community celebrating creativity and cultural diversity",
  },
  {
    icon: "bi-stars",
    title: "Inspiration",
    description: "Discover endless inspiration from diverse artistic traditions",
  },
  {
    icon: "bi-heart-fill",
    title: "Passion",
    description:
      "Share your passion and celebrate the beauty of human expression",
  },
];

const CultureSection = () => {
  return (
    <section id="culture" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold fs-1">
            Celebrating <span className="text-primary">Culture</span>
          </h2>
          <p className="text-muted fs-5">
            A platform where tradition meets innovation, and every culture finds
            its voice
          </p>
        </div>

        {/* Features */}
        <div className="row g-4 mb-5">
          {features.map((feature, index) => (
            <div className="col-md-6 col-lg-3" key={index}>
              <div className="card text-center shadow-sm h-100 border-0">
                <div className="card-body">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-circle mb-3"
                    style={{
                      width: "64px",
                      height: "64px",
                      background:
                        "linear-gradient(to bottom right, #0d6efd, #6f42c1)",
                    }}
                  >
                    <i className={`${feature.icon} text-white fs-3`}></i>
                  </div>
                  <h5 className="card-title fw-bold">{feature.title}</h5>
                  <p className="card-text text-muted">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Text & Image */}
        <div className="row align-items-center g-5">
          <div className="col-md-6">
            <h3 className="fw-bold fs-2 mb-3">Where Stories Come to Life</h3>
            <p className="text-muted fs-5">
              Every piece of art tells a story, carries a tradition, and bridges
              generations. Our platform is more than a gallery—it's a living
              testament to the rich tapestry of human creativity and cultural
              heritage.
            </p>
            <p className="text-muted fs-5">
              From ancient crafts passed down through centuries to contemporary
              masterpieces pushing boundaries, we celebrate the full spectrum of
              artistic expression.
            </p>
          </div>
          <div className="col-md-6 position-relative">
            <div className="rounded shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800&auto=format&fit=crop"
                alt="Cultural celebration"
                className="img-fluid"
              />
            </div>
            <div
              className="position-absolute"
              style={{
                bottom: "-20px",
                right: "-20px",
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                background:
                  "linear-gradient(to bottom right, #0d6efd, #6f42c1)",
                opacity: "0.5",
                filter: "blur(20px)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CultureSection;
