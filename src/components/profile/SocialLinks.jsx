import React from 'react';

const SocialLinks = props => {
  return (
    <div style={{ marginBottom: '10px' }}>
      <h3 style={{ textAlign: 'left', marginLeft: '20px' }}>Social Links</h3>
      {props.socialLinks.map(socialLink => (
        <a
          href={socialLink.link}
          style={{
            marginBottom: '10px',
            marginRight: '10px',
            textDecoration: 'none',
            color: 'blue'
          }}
        >
          {socialLink.name}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
