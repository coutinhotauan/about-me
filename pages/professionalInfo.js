import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/principalStyle.module.css';
import Link from 'next/link';
import { years } from './index';

export default function ProfessionalInfo(){
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
                    Hi, my name is Tauan. I’m {years()} years old, born and raised in Goiânia - Goiás (Brazil), graduated in Computer Science from the Federal University of Goiás, passionate about technology and its capacity for social transformation.
                </p>

                <p>
                    During my graduation, I had the opportunity to participate in the LabIS-UFG (Informatics Laboratory applied to Health - Federal University of Goiás), performing research on Blockchain, specifically on the use of Permissioned Blockchain on Health-Data access.
                </p>

                <p>
                    As a computer scientist who graduated from a public university, my primary motivation is to contribute to social and humanitarian development through technology. Uniting this tool with a constant pursuit of learning, I can contribute to the integration of society, decreasing the physical, social, and ideological distances and repay society the access to public and quality education granted to me during my life as well.
                </p>
            
            </div>  

    
          </main>
    
          <footer className={styles.footer}>
            <div className={styles.linkPage}>
                <Link href="/">
                    ←
                </Link>
            </div>

            <div className={styles.linkPage}>
              <Link href="/intendInfo">
                    →
              </Link>
            </div>
          </footer>
        </div>
      )
}