import { Activity, Database, Server, ShieldCheck } from 'lucide-react';

const evidence = {
 'yeva-site': {
  checkedAt:'19 novembre 2026',
  architecture:'Le site public relie une identité, une programmation, les fiches de soirée et des points de contact. Cette visite vérifie les pages accessibles ; elle ne constitue pas un audit du serveur.',
  rows:[
   ['Identité et contenus','Observés en ligne','Logo YEVA original, accueil, fiche Trap Session #2, présentation du collectif et formulaire pour proposer un projet.'],
   ['Billetterie','Lien observé','Lien Shotgun avec paramètres UTM depuis la fiche événement. Aucun achat ; attribution des ventes non démontrée.'],
   ['Parcours pratiques','Liens présents','Lien agenda au format .ics et itinéraire. Leur présence est vérifiée, sans ajout à un compte personnel.'],
   ['Formulaires','Interface consultée seulement','Aucun envoi. Réception des messages, stockage, validation serveur et antispam non vérifiés.']
  ],
  note:'Quatre captures authentiques du 19 novembre, prises sur des pages publiques. Le logo provient du SVG visible sur l’accueil. Aucun chiffre de fréquentation ou de conversion n’est extrapolé.',
  source:'https://yeva.club/'
 },
 'nuit-blanche': {
  checkedAt:'18–19 novembre 2026',
  architecture:'Google Sheets et interface Apps Script pour la saisie et la sélection. Dans le dépôt : FastAPI / Pydantic → normalisation → tri et groupement → templates Jinja2 → Playwright → PNG, manifest et ZIP. Les exports existants ont été ouverts dans Drive.',
  source:'https://github.com/akimgnts/nuitblanche',
  rows:[
   ['Parcours Sheets','Observé dans la session connectée','Référentiel des lieux, variantes, mode d’emploi, formulaire et panneau de génération présents. Prévisualisation de quatre événements validés obtenue sans lancer de rendu.'],
   ['Livrables','Fichiers existants consultés','Dossier Drive contenant une couverture, trois slides de jours, une fin, payload.json et manifest.json. Couverture et vendredi ouverts puis capturés.'],
   ['Traitements Python','Vérifiés dans le code','Validation Pydantic, normalisation, tri, groupement par jour, pagination à huit événements, rendu HTML en PNG et ZIP. Pas de base PostgreSQL dans cette architecture : fichiers et tableur portent les données.'],
   ['Intégration Drive','Deux versions à distinguer','Des fichiers existent dans le Drive connecté, mais GoogleDriveStorageProvider reste un stub dans le dépôt. Le menu Apps Script installé diffère du code versionné ; je ne certifie pas leur correspondance.'],
   ['Planification & exploitation','Activation non vérifiée','Déclencheur hebdomadaire et Dockerfile présents dans le dépôt. Aucun historique de tâche active ni configuration Coolify de ce produit inspecté pendant cette visite.'],
   ['Fiabilité','Limite observée','Erreur 422 présente à la reprise : certains événements n’ont pas d’identifiant. L’aperçu fonctionne ensuite ; aucune génération n’a été relancée.']
  ],
  note:'Je montre des écrans et des fichiers réels. Je distingue le code du dépôt, la version installée dans Sheets et le résultat d’une génération antérieure.'
 },
 'job-apply-assistant': {
  architecture:'Interface HTML / CSS / JavaScript → API FastAPI → services Python → PostgreSQL via SQLAlchemy. Documents et analyses restent rattachés au dossier. Le Dockerfile web prévoit les migrations Alembic et un contrôle de disponibilité.',
  source:'https://github.com/akimgnts/job-apply-assistant',
  rows:[
   ['Web & API','Observé en ligne','Pages et dossiers existants consultés dans Chrome. Application indiquée Running dans Coolify.'],
   ['Collecte planifiée','Exécutions vérifiées','Tâche Coolify « Collecte offres Business France + APEC », cron 0 8,18 * * *. Historique observé à 08 h et 18 h UTC, soit 09 h et 19 h à Paris en novembre.'],
   ['Qualité de la collecte','Échecs par source','Exécution du 18 novembre à 08:00 UTC marquée Success par Coolify, mais logs : timeout Business France, HTTP 403 APEC et aucune nouvelle offre. Le statut du processus ne suffit pas à valider la collecte.'],
   ['Persistance & contrôles','Vérifié dans le code','Modèles SQLAlchemy pour offres, dossiers, analyses, documents, profil et emails. Transactions, migrations, filtres par propriétaire et contrôles de complétude.'],
   ['Génération Data/IA','Code et livrables existants','Analyse par modèle si configurée, qualification par règles sinon ; génération documentaire avec repli déterministe. Documents existants consultables, aucune génération relancée pendant la visite.'],
   ['Gmail & assistant','Validation partielle','Gmail déconnecté et page de suivi en erreur. Une réponse de l’assistant obtenue sur les offres SQL ; pertinence et actions non évaluées. Ordonnanceur Gmail présent dans le code, activation non vérifiée.']
  ],
  note:'Je distingue le code disponible, l’interface déployée et le fonctionnement observé. La collecte tourne réellement à heures fixes ; sa réussite métier reste à contrôler source par source.'
 },
 'event-signal': {
  architecture:'Next.js 15 / React / TypeScript → connecteurs métier → PostgreSQL 17. Bronze conserve les relevés et les journaux ; Silver normalise les objets ; Gold expose les agrégations SQL utilisées par le cockpit.',
  source:'https://github.com/akimgnts/event',
  rows:[
   ['Application privée','Observée en ligne','Cockpit connecté exploré pour deux événements. Accès protégé ; données et dates de collecte visibles dans les pages.'],
   ['Synchronisations','Succès successifs observés','Shotgun, Meta et Instagram affichent des succès à 16:22–16:23 puis 16:38, heure de Paris. Le worker du dépôt attend 900 secondes entre les cycles ; ce délai ne constitue pas une garantie de service.'],
   ['Docker & persistance','Configuration du dépôt','Compose Coolify : services web, worker et PostgreSQL 17 ; volume postgres-data ; redémarrage et healthchecks. Cette configuration complète les preuves visibles, sans certifier un test de restauration.'],
   ['Fiabilité du pipeline','Vérifiée dans le code','Pagination avant publication, validations de schéma, mises à jour par identifiant, transaction et rollback, journal des erreurs et verrou PostgreSQL contre les cycles concurrents.'],
   ['Intégrations métier','Trois sources actualisées','Shotgun pour la billetterie, Meta pour la publicité, Instagram pour les contenus. ManyChat manuel ; SumUp en erreur 401 ; trafic Smartboard non configuré lors du relevé.'],
   ['Planning & assistant','Limites vérifiées','Planning stocké localement dans le navigateur. Assistant à analyses prédéfinies, sans LLM externe ; une réponse de bilan obtenue en consultation.']
  ],
  note:'Les métriques indisponibles restent inconnues. Les campagnes et les contenus sont associés explicitement aux événements ; cela ne démontre pas l’attribution individuelle des achats.'
 }
};
export default function ProductionEvidence({slug}){
 const item=evidence[slug];if(!item)return null;
 return <section className="mt-10 mb-10 rounded-3xl overflow-hidden border border-[#cdd9c8] bg-[#edf1e9]" aria-labelledby="production-proof-heading">
  <header className="p-6 md:p-8 bg-[#2b4437] text-[#f3f3e9]">
   <p className="flex items-center gap-2 text-[10px] tracking-[.17em] uppercase text-[#c0d2bb]"><Server size={15} aria-hidden="true"/> Derrière les écrans</p>
   <h2 id="production-proof-heading" className="font-serif text-3xl md:text-4xl mt-3 tracking-tight">Du code au serveur.</h2>
   <p className="text-sm leading-7 text-[#d6e1d1] max-w-4xl mt-4">{item.architecture}</p>
  </header>
  <div className="p-5 md:p-8">
   <div className="flex items-center gap-2 text-[11px] text-[#546d56] mb-5"><Activity size={15} aria-hidden="true"/> État vérifié · {item.checkedAt || '18 novembre 2026'} · consultation seule</div>
   <div className="overflow-x-auto"><table className="w-full min-w-[540px] text-left border-collapse text-xs"><caption className="sr-only">Éléments techniques, niveau de vérification et preuves de {slug === 'event-signal' ? 'Signal' : slug === 'nuit-blanche' ? 'Nuit Blanche' : slug === 'yeva-site' ? 'YEVA' : 'Job Apply'}</caption><thead><tr className="text-[10px] uppercase tracking-wider text-[#6a705b] border-b border-[#cdd8c4]"><th scope="col" className="pb-3 pr-5">Élément</th><th scope="col" className="pb-3 pr-5">Vérification</th><th scope="col" className="pb-3">Preuve et périmètre</th></tr></thead><tbody>{item.rows.map(([name,status,detail])=><tr key={name} className="border-b border-[#d6dfd0]"><th scope="row" className="py-5 pr-5 align-top font-semibold text-[#34523c] w-[20%]">{name}</th><td className="py-5 pr-5 align-top text-[#856244] w-[24%]">{status}</td><td className="py-5 align-top leading-6 text-[#506451]">{detail}</td></tr>)}</tbody></table></div>
   <p className="flex gap-2 items-start mt-6 text-xs leading-6 text-[#5c715b]"><ShieldCheck size={16} className="shrink-0 mt-1" aria-hidden="true"/>{item.note}</p>
   <a href={item.source} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 mt-5 text-xs underline underline-offset-4 text-[#3d6144]"><Database size={14} aria-hidden="true"/> {slug === 'yeva-site' ? 'Site public consulté' : 'Dépôt source · accès selon permissions GitHub'}</a>
  </div>
 </section>;
}
