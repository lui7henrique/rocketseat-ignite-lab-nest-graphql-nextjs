import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0";
import { GetServerSideProps } from "next";

const Home = () => {
  const { user } = useUser();

  return (
    <>
      <h1>Olá, {user?.name}!</h1>
    </>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = withPageAuthRequired();
