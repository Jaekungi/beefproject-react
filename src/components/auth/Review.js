import React from "react";

function Review() {
  <div>
    <Rating
      name="text-feedback"
      value={value}
      readOnly
      precision={0.5}
      emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
    />
    <Box sx={{ ml: 2 }}>{labels[value]}</Box>
  </div>;
}
