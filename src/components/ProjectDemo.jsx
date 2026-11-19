import { useRef, useState } from 'react';
import { Expand, X } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { productTours } from '../data/productTours';
import { captureSizes } from '../data/captureSizes';

function ProductTour({ tour }) {
  const [index, setIndex] = useState(0);
  const dialog = useRef(null);
  const reducedMotion = useReducedMotion();
  const chapter = tour.chapters[index];
  const count = tour.chapters.length;
  const size = captureSizes[chapter.image] || [1142, 786];
  function select(i) {
    setIndex(i);
  }
  return <section id="interactive-demo" className="product-tour" aria-labelledby="tour-heading">
    <header className="tour-intro">
      <p className="tour-eyebrow">À l’intérieur du produit</p>
      <h2 id="tour-heading">Voir. Comprendre.<br/><em>À votre rythme.</em></h2>
      <p>Choisissez un écran. Ouvrez les détails qui vous intéressent.</p>
    </header>
    <nav className="tour-nav" aria-label={`Écrans de ${tour.name}`}>
      {tour.chapters.map((item, i) => <button key={item.id} type="button" aria-current={index === i ? 'step' : undefined} onClick={() => select(i)} aria-controls="tour-screen">{item.label}</button>)}
    </nav>
    <div className="tour-stage" id="tour-screen">
      <div className="tour-screen-heading"><p>{chapter.label} <span>{index + 1} / {count}</span></p><h3 aria-live="polite" aria-atomic="true">{chapter.title}</h3></div>
      <motion.div key={chapter.id} initial={reducedMotion ? false : {opacity:0.5,y:4}} animate={{opacity:1,y:0}} transition={{duration:0.18,ease:'easeOut'}}>
      {chapter.noteOnly ? <aside className="tour-state-note"><h4>Suivi Gmail indisponible.</h4><p>Le compte nécessite une nouvelle autorisation. L’écran ne peut pas être présenté comme opérationnel.</p></aside> : <figure className="tour-figure">
        <div className={`tour-capture-viewport ${chapter.portrait ? 'portrait' : ''}`} tabIndex={0} role="region" aria-label={`Capture de ${chapter.label}, faire défiler pour voir la suite`}>
          <button type="button" className="tour-capture" onClick={() => dialog.current?.showModal()} aria-label={`Agrandir la capture : ${chapter.label}`}>
            <img src={chapter.image} alt={`${tour.name} — ${chapter.caption}`} width={size[0]} height={size[1]} decoding="async"/>
          </button>
        </div>
        <figcaption><span>Capture réelle · {tour.capturedAt || '18 novembre 2026'}</span><button type="button" onClick={() => dialog.current?.showModal()}><Expand size={16} aria-hidden="true"/> Agrandir</button></figcaption>
      </figure>}
      <div className="tour-details">
        <details className="tour-disclosure"><summary>À quoi sert cet écran ?</summary><div><p>{chapter.action}</p><p>{chapter.why}</p><p className="tour-caption">{chapter.caption}</p></div></details>
        <details className="tour-disclosure"><summary>Les données et leur traitement</summary><dl><div><dt>Données utilisées</dt><dd>{chapter.data}</dd></div><div><dt>Traitement</dt><dd>{chapter.processing}</dd></div><div><dt>Ce que j’en retiens</dt><dd>{chapter.insight}</dd></div></dl></details>
        <details className="tour-disclosure"><summary>Limites vérifiées</summary><div><p>{chapter.limit}</p></div></details>
      </div>
      </motion.div>
      <div className="tour-controls"><button type="button" disabled={index === 0} onClick={() => select(index - 1)}>Précédent</button><span>{index + 1} / {count}</span><button type="button" disabled={index === count - 1} onClick={() => select(index + 1)}>Suivant</button></div>
    </div>
    <p className="tour-footnote">Parcours de captures fixes, sans action sur les logiciels. Les coordonnées privées sont exclues du cadrage.</p>
    <dialog ref={dialog} className="tour-dialog" aria-label={`Capture agrandie — ${chapter.label}`} onClick={e => {if (e.target === e.currentTarget) dialog.current?.close();}}>
      <div className="tour-dialog-head"><p>{tour.name} / {chapter.label}</p><button type="button" onClick={() => dialog.current?.close()} aria-label="Fermer la capture agrandie"><X size={22}/></button></div>
      <div className="tour-full-image"><img src={chapter.image} alt={chapter.caption} width={size[0]} height={size[1]}/></div><p>{chapter.caption}</p>
    </dialog>
  </section>;
}
export default function ProjectDemo({ slug }) {
  const tour = productTours[slug];
  return tour ? <ProductTour key={slug} tour={tour}/> : null;
}
