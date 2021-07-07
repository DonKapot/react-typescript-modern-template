import React from 'react';

interface Iprops {
  message?: string;
  tag?: keyof JSX.IntrinsicElements;
}

const Message: React.FC<Iprops> = ({
  message = 'Default message',
  tag = 'span',
}): React.ReactElement => <span>{message}</span>;

export default Message;
