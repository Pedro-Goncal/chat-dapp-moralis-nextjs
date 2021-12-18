import Head from 'next/head';

//Moralis
import { useMoralis } from 'react-moralis';

//Components
import Login from '../components/Login';

export default function Home() {
  const { isAuthenticated, user, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;

  return (
    <div className="h-screen">
      <Head>
        <title>Chat dapp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>Welcome</h1>
      </div>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
