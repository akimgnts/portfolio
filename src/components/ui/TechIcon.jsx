import {
  siPython, siFastapi, siPostgresql, siLangchain, siDocker, siCoolify, siNextdotjs, siTypescript,
  siReact, siTailwindcss, siTelegram, siGooglesheets, siGoogleappsscript, siJinja, siPydantic,
  siMeta, siInstagram, siN8n, siMake, siGit, siGithub, siDatabricks, siDataiku, siSqlalchemy,
  siPandas, siGooglebigquery, siUipath, siGmail,
} from "simple-icons";

// Une seule banque d'icônes (Simple Icons, CC0) rendue en monochrome pour rester cohérente.
// Les marques absentes de la banque (Microsoft, OpenAI…) reçoivent un monogramme au même gabarit.
const icons = {
  "python": siPython,
  "fastapi": siFastapi,
  "postgresql": siPostgresql,
  "langchain": siLangchain,
  "docker": siDocker,
  "coolify": siCoolify,
  "next.js": siNextdotjs,
  "typescript": siTypescript,
  "react": siReact,
  "tailwind css": siTailwindcss,
  "telegram": siTelegram,
  "google sheets": siGooglesheets,
  "apps script": siGoogleappsscript,
  "google apps script": siGoogleappsscript,
  "jinja2": siJinja,
  "pydantic": siPydantic,
  "meta api": siMeta,
  "instagram insights": siInstagram,
  "n8n": siN8n,
  "make": siMake,
  "git": siGit,
  "git / github": siGithub,
  "github": siGithub,
  "databricks": siDatabricks,
  "dataiku": siDataiku,
  "sqlalchemy": siSqlalchemy,
  "pandas": siPandas,
  "bigquery": siGooglebigquery,
  "uipath": siUipath,
  "gmail": siGmail,
};

const monograms = {
  "power bi": "BI", "power query": "PQ", "dax": "DAX", "excel": "XL", "powerpoint": "PPT",
  "sql": "SQL", "openai": "AI", "openai api": "AI", "tableau": "TB", "esco": "ES",
  "api rest": "API", "rest apis": "API", "aws": "AWS", "power platform": "PP",
  "shotgun api": "SG", "playwright": "PW", "alembic": "AL", "seo": "SEO",
};

export function TechIcon({ name, size = 14, className = "" }) {
  const key = (name || "").toLowerCase().trim();
  const icon = icons[key];
  if (icon) {
    return <svg role="img" aria-hidden="true" viewBox="0 0 24 24" width={size} height={size} className={"shrink-0 fill-current " + className}><path d={icon.path} /></svg>;
  }
  const label = monograms[key] || (name || "?").replace(/[^A-Za-z0-9]/g, "").slice(0, 2).toUpperCase();
  return <span aria-hidden="true" style={{ width: size, height: size, fontSize: Math.max(6, size * (label.length > 2 ? .36 : .46)) }} className={"shrink-0 inline-grid place-items-center rounded-[3px] border border-current font-semibold leading-none tracking-tight " + className}>{label}</span>;
}

/** Pastille technologie : icône + libellé, même style partout. */
export function TechChip({ name, className = "" }) {
  return <span className={"inline-flex items-center gap-1.5 rounded-full border border-[#e1e4dc] bg-[#f6f7f2] px-2.5 py-1 text-[11px] text-[#43564a] " + className}>
    <TechIcon name={name} size={12} className="text-[#5a6e60]" />{name}
  </span>;
}
