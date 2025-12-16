import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="position-relative d-flex align-items-center justify-content-center min-vh-100 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, var(--bs-body-bg), rgba(0,0,0,0.05), var(--bs-body-bg))",
      }}
    >
      {/* Animated background blobs */}
      <div
        className="position-absolute top-0 start-0 rounded-circle"
        style={{
          width: "18rem",
          height: "18rem",
          background: "rgba(var(--bs-primary-rgb), 0.2)",
          filter: "blur(100px)",
          animation: "pulse 4s infinite",
          marginTop: "5rem",
          marginLeft: "2.5rem",
        }}
      ></div>
      <div
        className="position-absolute bottom-0 end-0 rounded-circle"
        style={{
          width: "24rem",
          height: "24rem",
          background: "rgba(var(--bs-info-rgb), 0.2)",
          filter: "blur(100px)",
          animation: "pulse 4s infinite 1s",
          marginBottom: "5rem",
          marginRight: "2.5rem",
        }}
      ></div>

      {/* Content */}
      <div className="container position-relative text-center z-1 px-4">
        {/* Tagline */}
        <div
          className="d-inline-flex align-items-center gap-2 px-4 py-2 border rounded-pill mb-4"
          style={{
            background: "rgba(var(--bs-primary-rgb), 0.1)",
            borderColor: "rgba(var(--bs-primary-rgb), 0.2)",
          }}
        >
          <i className="bi bi-stars text-primary fs-5"></i>
          <span className="fw-medium text-primary">Discover Art & Culture</span>
        </div>

        {/* Heading */}
        <h1 className="fw-bold display-3 mb-3">
          Where{" "}
          <span
            style={{
              background:
                "linear-gradient(90deg, var(--bs-primary), var(--bs-info), var(--bs-primary))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "gradientShift 5s infinite",
            }}
          >
            Creativity
          </span>{" "}
          Meets Culture
        </h1>

        {/* Subtext */}
        <p className="fs-4 text-secondary mx-auto" style={{ maxWidth: "700px" }}>
          Explore a vibrant world of artistic expression, celebrating diverse cultures and inspiring creativity across generations.
        </p>

        {/* Buttons */}
        <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3 pt-3">
          <button
            className="btn btn-lg text-white px-5 py-3"
            style={{
              background:
                "linear-gradient(90deg, var(--bs-primary), var(--bs-info))",
            }}
          >
            Explore Gallery <i className="bi bi-arrow-right ms-2"></i>
          </button>
          <button className="btn btn-outline-primary btn-lg px-5 py-3 border-2">
            Learn More
          </button>
        </div>

        {/* Stats */}
        <div className="row justify-content-center pt-5 gy-4">
          <div className="col-4 text-center">
            <div className="fw-bold fs-2 text-primary">500+</div>
            <div className="text-secondary small">Artworks</div>
          </div>
          <div className="col-4 text-center">
            <div className="fw-bold fs-2 text-primary">50+</div>
            <div className="text-secondary small">Artists</div>
          </div>
          <div className="col-4 text-center">
            <div className="fw-bold fs-2 text-primary">20+</div>
            <div className="text-secondary small">Countries</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="position-absolute bottom-0 start-50 translate-middle-x mb-4"
        style={{ animation: "bounce 2s infinite" }}
      >
        <div
          className="d-flex align-items-start justify-content-center rounded-pill border"
          style={{
            width: "24px",
            height: "40px",
            borderColor: "rgba(var(--bs-primary-rgb), 0.3)",
            padding: "4px",
          }}
        >
          <div
            className="rounded-pill"
            style={{
              width: "4px",
              height: "12px",
              background: "rgba(var(--bs-primary-rgb), 0.5)",
            }}
          ></div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
        }

        @keyframes bounce {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, -10px); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
