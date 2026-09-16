import styles from "../app/page.module.css";

type SectionLabelProps = {
  number: string;
  children: React.ReactNode;
};

export function SectionLabel({ number, children }: SectionLabelProps) {
  return (
    <div className={styles.sectionLabel}>
      <span>{number}</span>
      <span className={styles.sectionLabelLine} />
      <span>{children}</span>
    </div>
  );
}
