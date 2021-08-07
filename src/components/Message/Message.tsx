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
interface MessageState {
  hovered: string;
  innerMessage: string;
}

const Message: React.FC<Props> = ({
  message = 'Default message',
  children = {} as Children,
}): JSX.Element => {
  const initialMessageState: MessageState = {
    hovered: '',
    innerMessage: message,
  };

  const [messageState, setMessgeState] =
    React.useState<MessageState>(initialMessageState);

  const { hovered, innerMessage } = messageState;

  const { head, body } = children;

  // typing on RIGHT hand side of =
  const onHover = (e: React.MouseEvent<HTMLElement>): void => {
    setMessgeState({ ...messageState, hovered: ' hovered' });
  };

  // typing on LEFT hand side of =
  const onHoverOut: React.MouseEventHandler<HTMLElement> = () => {
    setMessgeState({ ...messageState, hovered: '' });
  };

  const onChangeMessage: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setMessgeState({ ...messageState, innerMessage: e.currentTarget.value });
  };

  return (
    <section
      className={`Message${hovered}`}
      onMouseEnter={onHover}
      onMouseLeave={onHoverOut}
    >
      <div>{head}</div>
      <div>{body}</div>
      <div>Prop Msg: {message}</div>
      <div>State Msg: {innerMessage}</div>
      <input value={innerMessage || ''} onChange={onChangeMessage} />
    </section>
  );
};

export default Message;
