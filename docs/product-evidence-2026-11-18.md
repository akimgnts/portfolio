# Product evidence — 18 November 2026

## Scope

Read-only exploration of authenticated Chrome sessions. No applications sent, campaigns launched, documents generated or business records changed. One read-only question was asked to the Event Signal assistant after inspecting its route for database writes. Opening the planning screen uses the application's existing local storage behavior; no tasks were edited.

22 JPEG screenshots captured through the connected browser. Cropping is performed at capture time; no interfaces or metrics have been synthesized. Contact lists, account email banners and private document contents are outside published crops. Full-width captures contain aggregate product metrics and public job/event information. Captures are snapshots from different times in the same session, not a live dataset.

## Source revisions inspected

- `akimgnts/job-apply-assistant`: `62c62574f755396265fd8d4ee0eacd4f20de6362`
- `akimgnts/event`: `e2aef1d8b91354820e89711490b96dea89350783`
- Portfolio base: `7cd2f74ab0ac830c1d4fb592e5752cc244b56235`

## Job Apply

- UI: dashboard, recent offers, radar, preparation list and existing application drawer, documents, drafts, companies, profile, career intelligence, Gmail and assistant entry.
- `app/services/offer_signal_service.py`: deterministic radar ranking, not an LLM probability. Separate age and relevance. Thresholds: 65 priority, 45 potential.
- `app/web/api.py`: analyzed application score /10; explicit analysis and generation actions, fallback when no OpenAI configuration, transactional writes.
- `app/services/document_generation_v2.py`: structured rendering and deterministic fallback. Existing document metadata observed; generation not rerun.
- `app/services/assistant_service.py`: bounded resource reads and separate validated actions. Assistant panel opened; response not tested.
- `app/database/models.py`, migrations, `Dockerfile.web`, `scripts/start_web_production.sh`: relational models, Alembic, non-root runtime, ready check.
- Coolify: Running. Enabled collection task `0 8,18 * * *`, command `python -m app.scheduler.ats_scheduler`. Executions at 08:00 / 18:00 UTC observed across several dates.
- Crucial limitation: the 18 Nov 08:00 UTC execution is marked Success by Coolify, but its logs contain Business France timeout, APEC HTTP 403, Created=0 and closures skipped for incomplete sources. Process exit success is not ingestion success.
- Gmail authorization expired in preparation banner; tracking page returns a load error. No active Gmail schedule is asserted.

## Event Signal

- UI: overview, timeline, sales, contents, planning, ads, budget, learning, assistant and sources.
- `package.json`: Next.js 15, React 19, TypeScript, pg.
- `compose.coolify.yaml`: web, worker, PostgreSQL 17 and volume. Deployment configuration inspected in source, not an independent restoration test.
- `scripts/worker.ts`: 900-second delay between cycles, PostgreSQL advisory lock, per-provider sync, shutdown handling. UI shows successive source successes at 16:22/16:23 and 16:38. No SLA inferred.
- `lib/pipeline.ts`: fetch before transaction, schema validation, raw Bronze records, normalized Silver upserts, rollback and run journal.
- `db/001_pipeline.sql`, `db/005_analytics.sql`, `lib/dashboard.ts`, `lib/kpis.ts`: aggregate views, explicit event links, paid/valid/canceled ticket distinctions, counts of distinct orders, compatible currencies, partial balance.
- `app/ui/PlanningPanel.tsx`: browser localStorage, not shared server planning.
- `lib/analyst.ts`, `app/api/assistant/route.ts`: read-only predefined analyses, no external LLM. A real event balance response was obtained.
- Sources: recent Shotgun, Meta, Instagram successes. ManyChat UI observations only. SumUp error 401 and no success. Smartboard traffic token not configured; visits and conversion unknown.

## Validation

- Production build, ESLint and 8 existing service regression tests pass.
- Local browser QA: all 12 Job Apply steps and 10 Event Signal steps, disclosure content, zoom dialog, navigation and image assets.
- Responsive production check and final deployment details are reported in the delivery message.

## Capture review follow-up

All 22 originals were visually reviewed. The 21 displayed product images were recaptured: complete main content for Event Signal; complete public Job Apply pages or deliberately bounded sections for private views. The Gmail failure image is no longer a primary tour visual; its observed state is explained in text. Company view uses an ASTEK filter with counts only. Profile shows complete skill blocks. Drawer captures use page coordinates including scroll offsets.

A real Job Apply assistant query about SQL offers was made without executing proposed actions. Its relevance is not certified. Scrollable capture frames and native-size zoom avoid shrinking long pages and avoid stretching portrait crops. Intrinsic image dimensions are tracked explicitly.

## Nuit Blanche · Content Engine — ajout des 18–19 novembre

- Ordre de présentation : Job Apply, Event Signal, Nuit Blanche · Content Engine ; les deux cas Sidel viennent ensuite dans une section métier. L’accueil et la galerie utilisent cet ordre.
- Huit captures véritables, prises dans Chrome connecté : formulaire vide, étapes du mode d’emploi, référentiel LIEUX, OPTIONS_LIEUX, semaine/statuts, aperçu de quatre événements, couverture PNG et slide du vendredi ouvertes dans Drive.
- Aucune création d’événement, génération d’image, notification, publication ni installation de déclencheur pendant cette visite. Seul « Vérifier les événements » a été actionné dans le panneau de génération.
- Le classeur est un agenda de test. Les données ne certifient pas la programmation des établissements. Les exports d’août et l’aperçu de novembre sont présentés séparément et explicitement.
- Une erreur 422 sur plusieurs identifiants d’événement vides était déjà présente à la reprise. Le contrôle d’aperçu fonctionne mais ne suffit pas à valider le contrat API.
- Code du dépôt nuitblanche inspecté : Pydantic, normalisation, tri, groupement, pagination à huit, Jinja2/Playwright, stockage local, ZIP, URLs signées. GoogleDriveStorageProvider est un stub ; le menu Apps Script du dépôt diffère de la version installée. La présence d’exports Drive ne certifie pas leur production par le commit inspecté.
- Aucun cron actif ni déploiement Coolify Nuit Blanche vérifié. Ne pas annoncer une génération hebdomadaire en production ou une publication Instagram automatique.
- Aucune donnée privée publiée : captures cadrées hors compte Google, adresses personnelles, URLs de fichiers et identifiants Drive. Les ID_LIEU visibles sont des clés métier publiques d’établissements, sans secret d’accès.
- Sidel : suppression des graphiques illustratifs à barres arbitraires ; restitution de la démarche et des cas métier. Les volumes préexistants (six dashboards, portefeuille de 61 comptes) restent des éléments déclarés du bilan d’alternance, sans nouveau gain chiffré inventé.
- Validation portfolio : lint sans erreur, build Vite et huit tests de service réussis ; huit boutons de visite testés dans le navigateur, explications de données et dialogue d’agrandissement ouverts/fermés ; aucun débordement horizontal en desktop.

## Lecture progressive — 19 novembre

- Installation demandée : `npx skills add https://github.com/emilkowalski/skills --skill apple-design`, version épinglée dans skills-lock.json et copie des instructions versionnée.
- Visites des trois produits : navigation horizontale par écran, capture large, titre court ; usage, traitements et limites repliés par défaut. Suppression du panneau latéral dense et des annotations toujours visibles.
- Architecture et étude complète accessibles via deux volets distincts, sans suppression des preuves ni des résultats.
- Retours visuels immédiats au clic, transition brève sans attente imposée, prise en compte des préférences de mouvement réduit, de transparence réduite et de contraste.
- Lint, build et huit tests réussis. Job Apply et Event Signal contrôlés dans le navigateur : volets fermés par défaut, ouverture des données et preuves, changement d’écran réinitialisant les volets, agrandissement et fermeture, absence de débordement desktop.

## Ambiance au scroll — 19 novembre

- Composant Reveal réutilisable : entrée à 12 % de visibilité avec marge basse de 32 px, une seule fois par montage. Déplacement vertical de 12–22 px, opacité, flou de 5 px réservé aux titres et groupes de texte. Durée 650 ms, léger décalage limité à 240 ms, aucun rebond ni blocage du scroll.
- Accueil : titres, introduction, produits, cas Sidel, parcours, paragraphes, étapes de méthode et contact. Galerie : cartes. Études de cas : en-tête, visite et panneaux de l’étude complète.
- Focus clavier : apparition immédiate du groupe ciblé. Mouvement réduit et impression : contenu intégralement visible, sans déplacement ni flou. Contraste renforcé : suppression du flou.
- Contrôle navigateur : 4 groupes visibles / 21 en attente à l’arrivée ; 9 visibles après le premier défilement, 12 après le suivant ; textes du parcours et trois étapes de méthode révélés. Ancres et accès au parcours préservés. Volet de données et zoom testés après apparition. Aucun débordement desktop.

## Typographic branding — 2026-11-19

- Public project name: **Signal**. The `/projects/event-signal` route and original product screenshots are preserved; the guided tour explains the historical interface name.
- Signal wordmark: **DX Brutalist Bold**, designed by Dirtyline Studio. Official source: https://dirtylinestudio.com/products/dx-brutalist-free-font . Obtained using the official email download form, newsletter unchecked.
- Bundled `DX_Brutalist_Free_Desktop_Commercial_License.pdf`, sections 2, 3, 10 and 13, explicitly permits logos, wordmarks, SVG/PNG exports and outlined artwork for commercial projects. Font files are neither committed nor served. Only finished outlined artwork is published.
- SVG glyphs shaped with HarfBuzz (kerning enabled), outlined from the original OTF with fontTools. Deep green and warm white variants; transparent PNG exports.
- **Job Apply / DX Ruiga SemiBold remains pending**: official download includes `Read Me First.pdf.pdf` stating personal use only, in conflict with the product page's commercial label. No Ruiga artwork or font is published. Requires written clarification from the foundry or an appropriately licensed replacement. No paid license purchased.

## Thumbnail correction — 2026-11-19

Supersedes the Brutalist proposal above after visual review. Job Apply uses Manrope at weight 750 on deep green (#244A3A); Signal uses Space Grotesk at weight 600 on warm clay (#D59979). Covers contain only the outlined name and one flat background. Both fonts were obtained from google/fonts, and their bundled SIL OFL 1.1 licenses were checked. No font files are served. Headings retain the portfolio typography. Real screenshots remain inside the guided case studies; original routes remain unchanged. PNG and SVG cover exports are available in public/brand.
