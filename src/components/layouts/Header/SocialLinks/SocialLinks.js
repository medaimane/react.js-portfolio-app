import React from 'react';

function SocialLinks({socialLinks}) {
  return socialLinks.map(({name, icon, color, to}) => (
    <a
      className={`button ${color}`}
      href={to}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="icon">
        <i className={`fab fa-${icon}`} />
      </span>
      <span>{name}</span>
    </a>
  ));
}

export default SocialLinks;
