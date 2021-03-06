import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Agenda Geral</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/book.png" />
      </Head>

      <main className={styles.main}>
      <ul>
        <li><a href="https://victornotas.tk">Home</a></li>
        <li><a href="#news">News</a></li>
        
        <li className={styles.dropdown}>
        <a href="javascript:void(0)" class="dropbtn">Dropdown</a>
        <div class="dropdown-content">
           <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
        </div>
        </li>
  
        <div className={styles.c}>
        <h2>Agenda Geral</h2>
        </div>

</ul>

        <div className={styles.grid}>
          <a href="https://victornotas.tk/eletric" className={styles.card}>
            <h2>Engenharia Elétrica</h2>
            <p>Matérias e Anotações.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Musculação</h2>
            <p>Rotina de Treinos.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Automação Industrial</h2>
            <p>
            Matérias e Anotações.
            </p>
            
          </a>

          <a
            href="https://victornotas.tk/Novembro/semana1"
            className={styles.card}
          >
            <h2>Anotações Gerais</h2>
            <p>
            NOVEMBRO/2021.
            </p>
          </a>
          <a
            href="https://victornotas.tk/Novembro/semana1"
            className={styles.card}
          >
            <h2>E-Motion</h2>
            <p>
            Relatórios,Regras e .
            </p>
          </a>
        </div>
      </main>

      
    </div>
  )
}
