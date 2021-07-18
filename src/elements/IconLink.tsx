import React from 'react';

const IconLink: React.FC<{ href: string; title: string }> = ({
  children,
  href,
  title,
}) => {
  return (
    <a
      className="icon-link"
      title={title}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
};

export default IconLink;
