import React from 'react';

const Link = (props) => {
  const { link } = props;
  return (
    <div>
      <div>
        {link.description} (<a href={link.url} target="_blank">{link.url}</a>)
      </div>
    </div>
  );
};

export default Link;
