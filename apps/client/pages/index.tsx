import styles from './index.module.scss';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { IArchie } from '@archmaster/shared/types';

export const getServerSideProps: GetServerSideProps<IArchie> = async (
  context
) => {
  let archie: IArchie;
  try {
    archie = await (await fetch('http://localhost:3333/api')).json();
  } catch (error) {
    console.warn(
      `Error fetching Archie (${error.message ?? 'Unknown error.'})`
    );
  }

  return {
    props: {
      ...archie,
    },
  };
};

export function Index(
  archie: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <h3 className={styles.page}>
      Archie is my Name! I was born on the {archie.dateOfBirth}!
    </h3>
  );
}

export default Index;
