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
        <div className="animate-pulse">
          <h1 className="text-3xl font-bold text-pink-200 py-1 px-5 drop-shadow-xl font-serif">
            WELCOME TO THE MATRIX
          </h1>
        </div>

        {isAuthenticating ? (
          <div className="bg-pink-600 rounded-xl p-5  font-bold   transition-all duration-500 border-x-2 drop-shadow-xl text-white flex">
            <h1 className="pr-5">Authenticate with your Metamask</h1>
            <svg
              className="animate-pulse"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </div>
        ) : (
          <button
            onClick={authenticate}
            className="bg-pink-600 rounded-xl p-5  font-bold  hover:scale-105 transition-all duration-500 border-x-2 drop-shadow-xl text-white"
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
