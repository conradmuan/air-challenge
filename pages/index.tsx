import type { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import { AirLogo } from "../assets/AirLogo";

import { usePeopleContext } from "../components/contexts/PeopleContext";
import { PeopleSearch } from "../components/PeopleSearch";

const Home: NextPage = () => {
  const { people } = usePeopleContext();

  return (
    <div className="border-t-4 border-air-cyan">
      <div className="container mx-auto py-8 px-6">
        <Head>
          <title>The Person Finder</title>
          <meta
            name="description"
            content="Air Challenge - The Person Finder"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="xl:grid xl:grid-cols-7">
          <header className="mb-8 xl:col-span-2">
            <Link href="/">
              <a>
                <AirLogo className="xl:float-right mr-165-px" />
              </a>
            </Link>
          </header>
          <main className="font-sans xl:col-span-3">
            <div className="xl:mt-16 mb-8">
              <h1 className="font-serif font-normal text-air-dark-blue text-3xl mb-4 xl:mb-12">
                The Person Finder
              </h1>
              <p className="text-air-dark-grey-50">
                If you just can’t find someone and need to know what they look
                like, you’ve come to the right place! Just type the name of the
                person you are looking for below into the search box!
              </p>
            </div>
            <PeopleSearch people={people} />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
