const fallbackUrl = "http://localhost:3000";

export const siteConfig = {
  name: "Matheus Boanova Camacho",
  title: "Matheus Boanova Camacho — Desenvolvedor de software",
  description:
    "Portfólio de Matheus Boanova Camacho, desenvolvedor de software focado em aplicações web, frontend e backend.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || fallbackUrl).replace(/\/$/, ""),
  locale: "pt_BR",
  email: "matheuscamachombc@hotmail.com",
  github: "https://github.com/MatheusCamacho",
  linkedin: "https://www.linkedin.com/in/matheus-boanova-camacho-34193b357/",
};
