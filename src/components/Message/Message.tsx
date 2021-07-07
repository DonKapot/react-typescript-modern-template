import React from 'react';

interface Iprops {
  message?: string;
  tag?: keyof JSX.IntrinsicElements;
}

const defaultProps = { message: 'Default message', tag: 'span' } as Iprops;

const Message: React.FC<Iprops> = ({ message, tag } = defaultProps): React.ReactElement => (
  // const Tag = tag as keyof JSX.IntrinsicElements;
  <span>{message}</span>
);
export default Message;
