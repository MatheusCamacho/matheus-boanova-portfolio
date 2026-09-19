import styles from "../app/page.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.monogram} href="/#top" aria-label="Voltar ao início">
        MBC
      </a>

      <nav className={styles.nav} aria-label="Navegação principal">
        <a href="/#projetos">Projetos</a>
        <a href="/#sobre">Sobre</a>
        <a href="/#contato">Contato</a>
      </nav>
    </header>
  );
}
