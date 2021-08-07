import React, { ReactNode } from 'react';
import './Message.css';

interface Children {
  head: ReactNode;
  body: ReactNode;
}

interface Props {
  message?: string;
  children?: Children;
}

const Message: React.FC<Props> = ({
  message = 'Default message',
  children = {} as Children,
}): React.ReactElement => {
  const { head, body } = children;

  return (
    <section className="Message">
      <div>{head}</div>
      <div>{body}</div>
      <div>{message}</div>
    </section>
  );
};

export default Message;
