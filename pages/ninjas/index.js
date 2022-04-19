import Head from "next/head";
import Link from "next/Link";
// import style from "../../styles/Ninjas.modules.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return { props: { ninjas: data } };
};
function Ninjas({ ninjas }) {
  return (
    <>
      {" "}
      <Head>
        <title>ninja list | home</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <div>
        {ninjas.map((ninja) => {
          return (
            <Link href={`ninjas/${ninja.id}`} key={ninja.id}>
              <a
              // className={style.single}
              >
                {" "}
                <h3>{ninja.name}</h3>
              </a>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Ninjas;
