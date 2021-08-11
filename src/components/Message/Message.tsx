import React, { ReactNode, useContext, useEffect } from 'react';
import { AppContext } from '../../storage/contexts';
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
  const { appState, setAppState } = useContext(AppContext);

  const { globalMessage } = appState;

  const initialMessageState: MessageState = {
    hovered: '',
    innerMessage: message,
  };

  const [messageState, setMessageState] =
    React.useState<MessageState>(initialMessageState);

  const { hovered, innerMessage } = messageState;

  const { head, body } = children;

  useEffect(() => {
    console.log('Once when component have initial render', messageState);
  }, []);

  useEffect(() => {
    console.log('innerMessage changed', innerMessage);
  }, [innerMessage]);

  useEffect(() => {
    console.log('Any item in state changed', messageState);
  });

  // typing on RIGHT hand side of =
  const onHover = (e: React.MouseEvent<HTMLElement>): void => {
    setMessageState({ ...messageState, hovered: ' hovered' });
  };

  // typing on LEFT hand side of =
  const onHoverOut: React.MouseEventHandler<HTMLElement> = () => {
    setMessageState({ ...messageState, hovered: '' });
  };

  const onChangeMessage: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const eventMessage = e.currentTarget.value;
    setMessageState({ ...messageState, innerMessage: eventMessage });
    if (typeof eventMessage !== undefined) {
      setAppState({ ...appState, globalMessage: eventMessage });
    }
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
      <div>App Msg: {globalMessage}</div>
      <input value={innerMessage || ''} onChange={onChangeMessage} />
    </section>
  );
};

export default Message;
