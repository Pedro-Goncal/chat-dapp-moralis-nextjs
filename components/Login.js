import Image from 'next/image';

//Moralis
import { useMoralis } from 'react-moralis';

const Login = () => {
  const { authenticate, isAuthenticating } = useMoralis();

  return (
    <div className="bg-black relative ">
      <div className="flex flex-col absolute z-50 h-5/6 w-full items-center justify-evenly space-y-4">
        {/* <Image
          className="object-cover rounded-full"
          src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          width={200}
          height={200}
        /> */}
        <div className="animate-pulse text-pink-200 text-center">
          <h1 className="text-3xl font-bold text-pink-200 py-1 px-5 drop-shadow-xl font-serif">
            WELCOME TO TRON
          </h1>
          <p>Let's chat together</p>
        </div>

        {isAuthenticating ? (
          <div className="text-sm md:text-base bg-pink-600 rounded-xl p-5  font-bold   transition-all duration-500 border-x-2 drop-shadow-xl text-white flex justify-center items-center">
            <h1 className="pr-2 sm:pr-5 text-center">
              Authenticate with your Metamask
            </h1>
            {'  '}
            {'>'}
            {'>'}
            {'>'}
          </div>
        ) : (
          <button
            onClick={authenticate}
            className=" text-sm bg-pink-600 rounded-xl p-5  font-bold  hover:scale-105 transition-all duration-500 border-x-2 drop-shadow-xl text-white"
          >
            Login with you Metamask
          </button>
        )}
      </div>
      <div className="w-full h-screen">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Login;
