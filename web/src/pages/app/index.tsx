import {
  getAccessToken,
  useUser,
  withPageAuthRequired,
} from "@auth0/nextjs-auth0";
import { GetServerSideProps } from "next";

const Home = () => {
  const { user } = useUser();

  return (
    <>
      <h1>Olá, {user?.name}!</h1>

      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = withPageAuthRequired({
  getServerSideProps: async ({ req, res }) => {
    console.log(getAccessToken(req, res));

    return { props: {} };
  },
});
