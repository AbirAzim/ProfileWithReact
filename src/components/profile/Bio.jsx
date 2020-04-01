import React from 'react';

const Bio = props => {
  const {
    bio: { name, description }
  } = props;
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Bio;
