import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/principalStyle.module.css';
import Link from 'next/link';

export default function IntendInfo(){
    return (
        <div className={styles.container}>
          <Head>
            <title>Tauan Coutinho</title>
            <meta name="description" content="about me" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
    
          <main className={styles.main}>
            <Image
              src="/photo.jfif"
              height={120}
              width={120}
              alt='profile image'
              className={styles.profilePhoto}
            />
    
            <h2>Tauan Coutinho</h2>
            
            <div className={styles.text}>

                <p>
                    Nowadays, I intend to perform as a Front-End/Mobile Developer, using my knowlegde as Computer Scientist to contribute with the improvement of any team that I could possible integrate.
                </p>

                <br/>

                <p>
                    <div className={styles.quote}>
                    "... Because the people who are crazy enough to think they can change the world, are the ones who do."
                    </div>
                    - Steve Jobs
                </p>
            
            </div>  

    
          </main>
    
          <footer className={styles.footerIntend}>
            <div className={styles.linkPage}>
                <Link href="/professionalInfo">
                    ←
                </Link>
            </div>
          </footer>
        </div>
      )
}