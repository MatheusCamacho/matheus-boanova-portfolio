import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import styles from "../app/page.module.css";

export function ProjectPreview({ project }: { project: Project }) {
  const href = `/projetos/${project.slug}`;

  return (
    <article className={styles.projectCard} id={project.slug}>
      <Link
        className={`${styles.preview} ${styles[`preview_${project.variant}`]} ${
          project.image ? styles.previewWithImage : ""
        }`}
        href={href}
        aria-label={`Ver case study de ${project.name}`}
      >
        {project.image ? (
          <Image
            className={styles.previewImage}
            src={project.image}
            alt={project.imageAlt ?? `Screenshot do projeto ${project.name}`}
            fill
            quality={90}
            unoptimized={project.image.endsWith(".svg")}
            sizes="(max-width: 720px) 100vw, 50vw"
          />
        ) : (
          <>
            <div className={styles.previewTopbar}>
              <span>{project.name}</span>
              <span>{project.year}</span>
            </div>
            <div className={styles.previewCanvas} aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
            <div className={styles.previewCaption}>PREVIEW / SCREENSHOT A ADICIONAR</div>
          </>
        )}
      </Link>

      <div className={styles.projectHeading}>
        <h3><Link href={href}>{project.name}</Link></h3>
        <Link href={href} aria-label={`Abrir case study de ${project.name}`}>↗</Link>
      </div>
      <p>{project.description}</p>
      <div className={styles.techList}>
        {project.technologies.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </article>
  );
}
