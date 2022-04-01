import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/principalStyle.module.css';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

export function years(){

  var birth = new Date(1998, 7, 21);
  var now = Date.now();
  var calc = new Date(now - birth)

  //Retrieve the date, month and year
  var calcFormatTmp = calc.getDate() + '-' + (calc.getMonth()+1)+ '-'+calc.getFullYear();
  //Convert to an array and store
  var calcFormat = calcFormatTmp.split("-");
  //Subtract each member of our array from the default date
  var days_passed = parseInt(Math.abs(calcFormat[0]) - 1);
  var months_passed = parseInt(Math.abs(calcFormat[1]) - 1);
  var years_passed = parseInt(Math.abs(calcFormat[2] -   1970));

  //Set up custom text
  const yrsTxt =["year", "years"];
  const mnthsTxt = ["month", "months"];
  const daysTxt = ["day", "days"]; 

  //Convert to days and sum together
  var total_days = (years_passed * 365) + (months_passed * 30.417) + days_passed;

  return Math.floor(total_days/365);

}

export default function Home() {
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
          height={160}
          width={160}
          alt='profile image'
          className={styles.profilePhoto}
        />

        <h1>Tauan Coutinho</h1>
        <h3>{years()}y | Computer Scientist | Brazil</h3>

        <div className={styles.contact}>
          <a href='https://github.com/coutinhotauan' className={styles.icon}>
            <FaGithub size={40}/>
          </a>
          <a href='https://www.linkedin.com/in/coutinhotauan/' className={styles.icon}>
            <FaLinkedin size={40}/>
          </a>
          <a href='https://tinyurl.com/whatsapptauan' className={styles.icon}>
            <FaWhatsapp size={40}/>
          </a>
        </div>

      </main>

      
      <footer className={styles.footerHome}>
        <div className={styles.linkPage}>
          <Link href="/professionalInfo">
            →
          </Link>
        </div>
      </footer>
      
    </div>
  )
}
