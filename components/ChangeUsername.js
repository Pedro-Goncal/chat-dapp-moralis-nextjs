import { useState } from 'react';
import { useMoralis } from 'react-moralis';
//Framer Motion
import { motion } from 'framer-motion';

const nextVariants = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 1 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 2 },
  },
};

const ChangeUsername = () => {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState('');
  const { setUserData, isUserUpdating, userError, user } = useMoralis();

  const handleUsername = () => {
    if (username.length <= 0) return;

    setUserData({
      username,
    });
  };

  return (
    <div>
      <div className="text-sm absolute top-5 right-5">
        <button
          disabled={isUserUpdating}
          onClick={() => setShowModal(true)}
          className="py-4 px-6 m-2 bg-fuchsia-300 rounded-xl hover:text-pink-700 font-bold transition-all duration-500"
        >
          <p className="hover:animate-pulse">Change your username</p>
        </button>
      </div>
      {showModal ? (
        <>
          <motion.div
            variants={nextVariants}
            initial="initial"
            animate="visible"
            exit="exit"
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none "
          >
            <div className="relative w-1/3 my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className=" justify-center items-center border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gradient-to-tl from-black to-fuchsia-900 border-x-2 border-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-center justify-between p-5  rounded-t ">
                  <h3 className="text-4xl font-semibold animate-pulse">
                    Change Your Username
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-4 flex-auto space-y-5 w-3/4">
                  <div>
                    <p className="text-xl">
                      Your current username is: {user.get('username')}
                    </p>
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Username"
                      className=" w-full rounded-lg p-2 bg-fuchsia-100"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-fuchsia-500 rounded-b w-3/4">
                  <button
                    className="text-fuchsia-900 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-fuchsia-500 border-x-2 border-white text-white  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      handleUsername();
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default ChangeUsername;
