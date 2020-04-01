import React, { Component } from 'react';
import Skills from './Skills';
import SocialLinks from './SocialLinks';
import Bio from './Bio';

class Profile extends Component {
  //skill set
  skills = ['Nodejs', 'React', 'Python'];

  //bio
  bio = {
    name: 'Abir Azim Badhon',
    description: 'Full stack javascript developer !'
  };

  //social Links
  socialLinks = [
    { name: 'Facebook', link: 'https://www.facebook.com/badhonkhan007' },
    { name: 'Github', link: 'https://github.com/AbirAzim' },
    { name: 'Linkedin', link: 'https://www.linkedin.com/in/badhon-khan-007' }
  ];

  render() {
    return (
      <div
        style={{
          textAlign: 'center',
          border: '1px solid blue',
          margin: '50px',
          marginLeft: '400px',
          marginRight: '400px'
        }}
      >
        <Bio bio={this.bio} />
        <Skills skills={this.skills} />
        <SocialLinks socialLinks={this.socialLinks} />
      </div>
    );
  }
}

export default Profile;
