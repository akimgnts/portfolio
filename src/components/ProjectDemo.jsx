import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Database, Expand, X } from 'lucide-react';
import { productTours } from '../data/productTours';
import { captureSizes } from '../data/captureSizes';

function ProductTour({ tour }) {
  const [index, setIndex] = useState(0);
  const dialog = useRef(null);
  const chapter = tour.chapters[index];
  const count = tour.chapters.length;
  const size = captureSizes[chapter.image] || [1142, 786];
  return <section id="interactive-demo" className="product-tour" aria-labelledby="tour-heading">
    <div className="tour-intro">
      <p className="tour-eyebrow">Dans le produit / visite guidée</p>
      <h2 id="tour-heading">Les écrans. Les usages.<br/><em>Les données derrière.</em></h2>
      <p>{tour.intro}</p>
      <div className="tour-meta"><span className="tour-dot"/> Captures réelles · {tour.capturedAt || '18 novembre 2026'} <span>{count} étapes à explorer</span></div>
    </div>
    <div className="tour-shell">
      <nav className="tour-nav" aria-label={`Étapes de la visite ${tour.name}`}>
        {tour.chapters.map((item, i) => <button key={item.id} type="button" aria-current={index === i ? 'step' : undefined} onClick={() => setIndex(i)} aria-controls="tour-screen"><span>{String(i + 1).padStart(2, '0')}</span>{item.label}{index === i && <ArrowRight size={14} aria-hidden="true"/>}</button>)}
      </nav>
      <div className="tour-stage" id="tour-screen">
        <div className="tour-window-bar"><span className="tour-window-dots" aria-hidden="true"><i/><i/><i/></span><span>{tour.name} / {chapter.label}</span><span>Capture du logiciel</span></div>
        {chapter.noteOnly ? <aside className="tour-state-note"><p>État observé en consultation</p><h3>Suivi Gmail indisponible.</h3><p>La page renvoie une erreur de chargement et le compte nécessite une nouvelle autorisation. Je conserve cette limite dans le parcours, sans utiliser l’écran d’erreur comme visuel de démonstration.</p></aside> : <figure className="tour-figure">
          <div key={chapter.id} className={`tour-capture-viewport ${chapter.portrait ? 'portrait' : ''}`} tabIndex={0} role="region" aria-label={`Capture de ${chapter.label}, faire défiler pour voir la suite`}>
          <button type="button" className={`tour-capture ${chapter.portrait ? 'portrait' : ''}`} onClick={() => dialog.current?.showModal()} aria-label={`Agrandir la capture : ${chapter.label}`}>
            <img key={chapter.image} src={chapter.image} alt={`${tour.name} — ${chapter.caption}`} width={size[0]} height={size[1]} decoding="async"/>

          </button>
          </div>
          <div className="tour-image-tools"><span>Faire défiler la capture pour voir la suite</span><button type="button" onClick={() => dialog.current?.showModal()}><Expand size={14} aria-hidden="true"/> Ouvrir en grand</button></div>
          <figcaption>{chapter.caption}</figcaption>
        </figure>}
        <div className="tour-story" key={chapter.id}>
          <div className="tour-step-line"><span>Étape {String(index + 1).padStart(2, '0')} / {count}</span><span>Usage → donnée → décision</span></div>
          <h3 aria-live="polite" aria-atomic="true">{chapter.title}</h3>
          <p className="tour-action">{chapter.action}</p>
          <div className="tour-annotation"><span aria-hidden="true">↳</span><p>{chapter.why}</p></div>
          <details className="tour-data" key={chapter.id + '-details'}>
            <summary><Database size={16} aria-hidden="true"/> Quelles données ? Quels traitements ?</summary>
            <dl><div><dt>Données utilisées</dt><dd>{chapter.data}</dd></div><div><dt>Traitement & analyse</dt><dd>{chapter.processing}</dd></div><div><dt>Ce que je peux en déduire</dt><dd>{chapter.insight}</dd></div></dl>
          </details>
          <p className="tour-limit"><strong>Limite vérifiée.</strong> {chapter.limit}</p>
        </div>
        <div className="tour-controls"><button type="button" disabled={index === 0} onClick={() => setIndex(i => i - 1)}><ArrowLeft size={16} aria-hidden="true"/> Précédent</button><span>{index + 1} / {count}</span><button type="button" disabled={index === count - 1} onClick={() => setIndex(i => i + 1)}>Suivant <ArrowRight size={16} aria-hidden="true"/></button></div>
      </div>
    </div>
    <p className="tour-footnote">Visite interactive de captures fixes du produit connecté. Les boutons naviguent dans cette présentation ; ils n’agissent pas sur les applications. Les zones contenant des coordonnées privées sont exclues du cadrage.</p>
    <dialog ref={dialog} className="tour-dialog" aria-label={`Capture agrandie — ${chapter.label}`} onClick={e => {if (e.target === e.currentTarget) dialog.current?.close();}}>
      <div className="tour-dialog-head"><p>{tour.name} / {chapter.label}</p><button type="button" onClick={() => dialog.current?.close()} aria-label="Fermer la capture agrandie"><X size={22}/></button></div>
      <p className="tour-zoom-hint">Capture à taille lisible : faites défiler verticalement et horizontalement si nécessaire.</p><div className="tour-full-image"><img src={chapter.image} alt={chapter.caption} width={size[0]} height={size[1]}/></div><p>{chapter.caption}</p>
    </dialog>
  </section>;
}
export default function ProjectDemo({ slug }) {
  const tour = productTours[slug];
  return tour ? <ProductTour key={slug} tour={tour}/> : null;
}
