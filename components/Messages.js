import { useRef } from 'react';
import { ByMoralis, useMoralis, useMoralisQuery } from 'react-moralis';
import Message from './Message';
import SendMessage from './SendMessage';

const MINS_DURATION = 1440;

const Messages = () => {
  const { user } = useMoralis();
  const endOfMessagesRef = useRef(null);

  const { data, loading, error } = useMoralisQuery(
    'messages',
    (query) =>
      query.ascending('createdAt').greaterThan(
        'createdAt',
        new Date(Date.now() - 1000 * 60 * MINS_DURATION) //Only Show the chat for the last MINS_DURATION
      ),
    [],
    {
      live: true,
    }
  );

  return (
    <div className="pb-56 pt-10">
      <div className="space-y-10">
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <div className="flex justify-center">
        <SendMessage endOfMessagesRef={endOfMessagesRef} />
      </div>
      <div ref={endOfMessagesRef} className="text-center text-gray-400 mt-5">
        <p>You're up to date {user.get('username')}</p>
      </div>
      <div className="my-5">
        <ByMoralis
          style={{ marginLeft: 'auto', marginRight: 'auto' }}
          variant="dark"
        />
      </div>
    </div>
  );
};

export default Messages;
