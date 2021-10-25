import styles from './index.module.scss';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

export const getServerSideProps: GetServerSideProps<
  Record<'archie', { age?: number }>
> = async (context) => {
  let archie: unknown;
  try {
    archie = await (await fetch('http://localhost:3333/api')).json();
  } catch (error) {
    console.warn(
      `Error fetching Archie (${error.message ?? 'Unknown error.'})`
    );
  }

  return {
    props: {
      archie: archie,
    },
  };
};

export function Index({
  archie,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <h3 className={styles.page}>
      Archie is my Name! I am {archie.age} years old!
    </h3>
  );
}

export default Index;
