import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { caseStudies, getCaseStudy } from "@/data/caseStudies";
import { siteConfig } from "@/lib/site";
import styles from "./project.module.css";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getCaseStudy(slug);

  if (!project) return {};

  const projectUrl = `${siteConfig.url}/projetos/${project.slug}`;

  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: projectUrl },
    openGraph: {
      type: "article",
      locale: siteConfig.locale,
      url: projectUrl,
      title: `${project.name} — Matheus Boanova Camacho`,
      description: project.summary,
      images: [
        {
          url: project.image,
          alt: project.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — Matheus Boanova Camacho`,
      description: project.summary,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getCaseStudy(slug);

  if (!project) notFound();

  return (
    <main id="top" className={`${styles.page} ${styles[project.theme]}`}>
      <Header />

      <section className={styles.hero}>
        <div className={styles.eyebrow}>
          <Link href="/#projetos">← Projetos</Link>
          <span>{project.role}</span>
          <span>{project.year}</span>
        </div>

        <div className={styles.heroGrid}>
          <div>
            <p className={styles.kicker}>{project.kicker}</p>
            <h1>{project.name}</h1>
          </div>
          <p className={styles.summary}>{project.summary}</p>
        </div>
      </section>

      <section className={styles.coverSection}>
        <div className={styles.cover}>
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            unoptimized={project.image.endsWith(".svg")}
            priority
            sizes="(max-width: 900px) 100vw, 1400px"
          />
        </div>
      </section>

      <section className={styles.contentSection}>
        <div className={styles.sectionIndex}>01 — Visão geral</div>
        <div className={styles.overviewGrid}>
          <div className={styles.copyLarge}>
            {project.overview.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className={styles.stackBlock}>
            <span>Stack</span>
            <div>
              {project.technologies.map((tech) => <span key={tech}>{tech}</span>)}
            </div>
            <a href={project.repository} target="_blank" rel="noopener noreferrer">Ver código no GitHub ↗</a>
            {project.release ? (
              <a href={project.release} target="_blank" rel="noopener noreferrer">Baixar versão desktop ↗</a>
            ) : null}
          </div>
        </div>
      </section>

      <section className={`${styles.contentSection} ${styles.featuresSection}`}>
        <div className={styles.sectionIndex}>02 — O que o projeto faz</div>
        <div className={styles.featuresGrid}>
          {project.highlights.map((feature, index) => (
            <div className={styles.feature} key={feature}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{feature}</p>
            </div>
          ))}
        </div>
      </section>

      {project.secondaryImage && project.secondaryImageAlt ? (
        <figure className={styles.secondaryVisual}>
          <div className={styles.secondaryImage}>
            <Image
              src={project.secondaryImage}
              alt={project.secondaryImageAlt}
              fill
              sizes="(max-width: 900px) 100vw, 1400px"
            />
          </div>
          {project.secondaryImageCaption ? (
            <figcaption>{project.secondaryImageCaption}</figcaption>
          ) : null}
        </figure>
      ) : null}

      <section className={styles.contentSection}>
        <div className={styles.sectionIndex}>03 — Decisões técnicas</div>
        <div className={styles.decisions}>
          {project.decisions.map((decision) => (
            <article key={decision.title}>
              <h2>{decision.title}</h2>
              <p>{decision.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${styles.contentSection} ${styles.learningSection}`}>
        <div className={styles.sectionIndex}>04 — O que levei do projeto</div>
        <div className={styles.learningGrid}>
          <h2>Aprendizados que ficam para o próximo projeto.</h2>
          <ol>
            {project.learnings.map((learning) => <li key={learning}>{learning}</li>)}
          </ol>
        </div>
      </section>

      <section className={styles.nextProject}>
        <span>Próximo projeto</span>
        <Link href={`/projetos/${project.nextSlug}`}>
          {project.nextName}<span>↗</span>
        </Link>
      </section>

      <footer className={styles.footer}>
        <Link href="/#top">Matheus Boanova Camacho</Link>
        <span>Pelotas, RS — Brasil · 2026</span>
      </footer>
    </main>
  );
}
