import googleReviews from "config/googleReviews";

function Reviews() {
  return (
    <section className="reviews">
      <h2>What Our Clients Say</h2>
      {googleReviews.map((review, index) => (
        <div key={index}>
          <h4>
            {review.name} - ⭐ {review.rating}
          </h4>
          <p>{review.review}</p>
          <small>{review.date}</small>
        </div>
      ))}
    </section>
  );
}
