import React from "react";
import Image from "next/image";
const Testimonial_v2 = () => {
  return (
    <div className="container">
      <div>
        <h3 className="text-center mt-5 mb-3">
          <span style={{ color: "black" }}>Our</span>
          <span style={{ color: "#293BB1" }}> Testimonials</span>
        </h3>
      </div>
      <div className="row justify-content-center">
        {[
          {
            name: "Mr. Jan Bor",
            position: "Chairman, Telma Retarder India (P) Ltd",
            text: "Drive for Excellence is not just a slogan with RACE, it's within their DNA, in their bloodstream, and they are absolutely the right partner to establish yourself in India.",
            img: "/images/janbor.jpg",
          },
          {
            name: "Mr. Oskar Flach",
            position: "Managing Director - Schmitz Cargobull",
            text: "RACE provided us with a holistic perspective on the Indian Trailer market study for semi trailers.",
            img: "/images/janbor.jpg",
          },
          {
            name: "Mr. Sushil Nowal",
            position: "Vice President, JSW Steel Ltd",
            text: "RACE project management team had been quite instrumental in setting up standards at JSW.",
            img: "/images/Mr.-Sushil-Nowal.jpg",
          },
        ].map((testimonial, index) => (
          <div key={index} className="col-md-4 col-12 mb-4">
            <div
              className="card p-3 text-center"
              style={{
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                borderRadius: "10px",
                backgroundColor: "white",
                height: "100%",
              }}
            >
              <p>{testimonial.text}</p>
              <div className="d-flex flex-column align-items-center">
                <Image
                  src={testimonial.img}
                  width={80} // Set exact width
                  height={80} // Set exact height
                  alt={testimonial.name}
                  style={{
                    objectFit: "cover",
                    borderRadius: "50%", // Makes it a circle
                    marginBottom: ".5rem",
                  }}
                />
                <h3 style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                  {testimonial.name}
                </h3>
                <p
                  style={{
                    fontWeight: "lighter",
                    fontSize: "0.9rem",
                  }}
                >
                  {testimonial.position}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial_v2;
