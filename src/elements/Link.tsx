import React from 'react';
import Bold from './Bold';

const Link: React.FC<{ href: string }> = ({ href, children }) => {
  return (
    <a className="link" href={href} target="_blank" rel="noreferrer">
      <Bold>{children}</Bold>
      <span className="bg"></span>
    </a>
  );
};

export default Link;
