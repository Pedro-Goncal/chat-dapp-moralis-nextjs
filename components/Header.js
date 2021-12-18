import Image from 'next/image';

//Moralis
import { useMoralis } from 'react-moralis';

//Components
import Avatar from './Avatar';
import ChangeUsername from './ChangeUsername';

const Header = () => {
  const { user } = useMoralis();

  return (
    <div className="text-pink-500">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center sticky top-0 p-5 z-50 bg-black shadow-sm border-b-2 border-pink-700">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            src="https://links.papareact.com/3pi"
            layout="fill"
            objectFit="cover"
            className="rounded-full "
          />
        </div>
        <div className="col-span-4 text-left lg:text-center">
          <div className="relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full">
            <Avatar logoutOnPress />
          </div>
          <h1 className="text-3xl ">Welcome to the Chat dapp</h1>
          <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>

          <ChangeUsername />
        </div>
      </div>
    </div>
  );
};

export default Header;
