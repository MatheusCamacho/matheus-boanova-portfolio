import { Header } from "@/components/Header";
import { ProjectPreview } from "@/components/ProjectPreview";
import { SectionLabel } from "@/components/SectionLabel";
import { moreProjects, selectedProjects } from "@/data/projects";
import { personalLinks } from "@/data/links";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main id="top" className={styles.page}>
      <Header />

      <section className={styles.hero}>
        <div className={styles.heroMeta}>
          <SectionLabel number="01">Desenvolvedor de software</SectionLabel>
          <div className={styles.heroLocation}>
            <span>Pelotas, RS — Brasil</span>
            <span>2026</span>
          </div>
        </div>

        <div className={styles.heroGrid}>
          <div>
            <h1>
              Matheus
              <br />
              Boanova
              <br />
              Camacho
            </h1>
            <h2>Desenvolvedor de software.</h2>
            <p>
              Construo aplicações web e projetos completos enquanto evoluo entre frontend,
              backend e desenvolvimento de sistemas.
            </p>
          </div>

          <div className={styles.heroAside}>
            <a href="#projetos">Projetos <span>—</span></a>
          </div>
        </div>

        <a className={styles.scrollCue} href="#projetos" aria-label="Ir para projetos">↓</a>
      </section>

      <section id="projetos" className={styles.section}>
        <div className={styles.sectionHeader}>
          <SectionLabel number="02">Projetos selecionados</SectionLabel>
          <p>
            Alguns projetos que desenvolvi para aplicar conhecimentos, resolver problemas e
            continuar evoluindo.
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {selectedProjects.map((project) => (
            <ProjectPreview key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section id="sobre" className={`${styles.section} ${styles.aboutSection}`}>
        <div className={styles.aboutIntro}>
          <SectionLabel number="03">Sobre mim</SectionLabel>
          <p className={styles.aboutLead}>
            Sou estudante de Análise e Desenvolvimento de Sistemas e desenvolvedor em formação.
          </p>
          <p>
            Tenho focado meus estudos em desenvolvimento web, trabalhando com frontend, backend,
            APIs, bancos de dados e testes. Gosto de entender como as partes de um sistema se
            conectam e de transformar requisitos em algo que realmente funcione.
          </p>
          <p>
            Meu objetivo é continuar evoluindo como desenvolvedor através de projetos práticos e
            experiências em equipe.
          </p>
        </div>

        <div className={styles.experience}>
          <h2>Experiência / Formação</h2>

          <div className={styles.experienceItem}>
            <h3>CWI Crescer</h3>
            <span>2026</span>
            <p>
              Participei do programa CWI Crescer, passando por banco de dados, JavaScript,
              programação orientada a objetos e Java. Na etapa final, trabalhei em equipe com
              JavaScript, Node.js, testes automatizados e Git.
            </p>
            <p className={styles.muted}>
              O código e os detalhes do projeto não são públicos, conforme orientação da organização.
            </p>
          </div>

          <div className={styles.experienceItem}>
            <h3>Análise e Desenvolvimento de Sistemas</h3>
            <span>UniSenac Pelotas · 2025 — 2028</span>
            <p>
              Graduação focada em desenvolvimento de software, banco de dados, programação e
              fundamentos de sistemas.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.moreSection}`}>
        <SectionLabel number="04">Mais projetos</SectionLabel>
        <div className={styles.moreList}>
          {moreProjects.map((project) => (
            <a href={project.href} target="_blank" rel="noreferrer" className={styles.moreItem} key={project.name}>
              <strong>{project.name}</strong>
              <span>{project.description}</span>
              <span>{project.technologies}</span>
              <span>{project.year}</span>
              <span className={styles.moreArrow}>↗</span>
            </a>
          ))}
        </div>
      </section>

      <section id="contato" className={`${styles.section} ${styles.contactSection}`}>
        <SectionLabel number="05">Vamos conversar?</SectionLabel>
        <div className={styles.contactGrid}>
          <h2>Vamos<br />conversar?</h2>
          <div className={styles.contactContent}>
            <p>
              Estou aberto a oportunidades, projetos e conversas sobre desenvolvimento de software.
            </p>
            <div className={styles.contactLinks}>
              <a href={personalLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <a href={personalLinks.github} target="_blank" rel="noreferrer">GitHub ↗</a>
              <a href={personalLinks.email}>Email ↗</a>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div>
          <strong>Matheus Boanova Camacho</strong>
          <span>Desenvolvedor de software.</span>
        </div>
        <div>
          <span>Pelotas, RS — Brasil</span>
          <span>2026</span>
        </div>
      </footer>
    </main>
  );
}
