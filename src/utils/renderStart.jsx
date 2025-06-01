export const renderStars = (rating) => {
  const stars = [];

  for (let i = 0; i <= rating - 1; i++) {
    stars.push(
      <span key={i} className=" text-yellow-400">
        ★
      </span>
    );
  }

  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <span key={`empty-${i}`} className="text-gray-300">
        ★
      </span>
    );
  }

  return stars;
};
