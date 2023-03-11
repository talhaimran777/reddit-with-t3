import AboutCommunity from "components/AboutCommunity";
import Layout from "components/Layout";
import Posts from "components/Posts";
import ProfileCover from "components/ProfileCover";
import ProfileHeader from "components/ProfileHeader";
import { type NextPage } from "next";
import Head from "next/head";

const CommunityProfile: NextPage = () => {
  const left: React.FC = () => {
    return (
      <>
        <Posts />
      </>
    );
  };

  const right: React.FC = () => {
    return (
      <>
        <AboutCommunity />
      </>
    );
  };

  return (
    <>
      <Head>
        <title>Community Profile</title>
        <meta name="description" content="Showing all the blog posts!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProfileCover />
      <ProfileHeader />
      <Layout Left={left} Right={right} />
    </>
  );
};

export default CommunityProfile;
