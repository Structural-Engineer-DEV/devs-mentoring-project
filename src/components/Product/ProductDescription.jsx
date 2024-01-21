import React from "react";

const ProductDescription = ({ title, features }) => {
  return (
    <div className="flex flex-col box-border">
      {/* <span className="text-lg">{title}</span> */}
      <ul className="max-w-md list-disc list-inside">
        {features.map((feature, i) => (
          <li key={i} className="my-4">
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDescription;
