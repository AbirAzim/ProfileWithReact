import React from 'react';

const Skills = props => {
  return (
    <React.Fragment>
      <h3 style={{ textAlign: 'left', marginLeft: '20px' }}>Skills</h3>
      {props.skills.map(skill => (
        <button style={{ marginBottom: '10px', marginRight: '5px' }}>
          {skill}
        </button>
      ))}
    </React.Fragment>
  );
};

export default Skills;
