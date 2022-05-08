import {
  getAccessToken,
  useUser,
  withPageAuthRequired,
} from "@auth0/nextjs-auth0";
import { GetServerSideProps } from "next";
import { withApollo } from "../../lib/withApollo";
import {
  useGetProductsQuery,
  useMeQuery,
} from "../../graphql/generated/graphql";
import { getServerPageGetProducts } from "../../graphql/generated/page";

const Home = () => {
  const { user } = useUser();

  const { data: me } = useMeQuery();

  return (
    <>
      <h1>Olá, {user?.name}!</h1>

      <pre>ok: {JSON.stringify(me, null, 2)}</pre>

      <div className="bg-buffy">
        <p className="text-nosferatu ">I vant to suck your blood...</p>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = withPageAuthRequired({
  getServerSideProps: async (ctx) => {
    // getServerPageGetProducts({}, ctx);

    return {
      props: {},
    };
  },
});

export default withApollo(Home);
