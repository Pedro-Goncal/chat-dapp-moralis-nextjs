import { useState } from 'react';
import { useMoralis } from 'react-moralis';

const SendMessage = ({ endOfMessagesRef }) => {
  const [message, setMessage] = useState('');

  const { user, Moralis } = useMoralis();

  const sendMessage = (e) => {
    e.preventDefault();

    if (!message) return;

    //Create A Moralis Object and a tabel called messages
    const Messages = Moralis.Object.extend('messages');
    const messages = new Messages();

    messages
      .save({
        message: message,
        username: user.getUsername(),
        ethAddress: user.get('ethAddress'),
      })
      .then(
        (message) => {
          //It was successfull
        },
        (err) => console.log(err)
      );

    endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
    setMessage('');
  };

  return (
    <form className="flex w-11/12 fixed bottom-10 bg-black opacity-80 px-6 py-4 max-w-2xl rounded-full shadow-lg border-2 border-pink-200">
      <input
        className="flex-grow outline-none bg-transparent text-white placeholder-gray-500  pr-5"
        type="text"
        placeholder={`${user.getUsername()} type here...`}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className="font-bold text-pink-500"
        type="submit"
        onClick={sendMessage}
      >
        Send
      </button>
    </form>
  );
};

export default SendMessage;
