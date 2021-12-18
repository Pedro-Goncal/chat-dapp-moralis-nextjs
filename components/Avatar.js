import Image from 'next/image';
import { useMoralis } from 'react-moralis';

const Avatar = ({ username, logoutOnPress }) => {
  const { user, logout } = useMoralis();
  return (
    <Image
      className="rounded-full bg-black cursor-pointer"
      src={`https://avatars.dicebear.com/api/bottts/${
        username || user.get('username')
      }.svg`}
      layout="fill"
      onClick={() => logoutOnPress && logout()}
    />
  );
};

export default Avatar;
