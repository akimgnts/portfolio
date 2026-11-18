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
