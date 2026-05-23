import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Legales",
  description: "Mentions legales de TECHNIQ8. Informations sur l'editeur, l'hebergeur et les conditions d'utilisation du site.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="pt-40 pb-32 md:pt-48 md:pb-40">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <span className="text-xs tracking-[0.3em] uppercase text-electric/50 font-mono">
          Legal
        </span>
        <h1 className="text-3xl md:text-4xl font-extralight tracking-tight gradient-text-blue mt-4 mb-12">
          Mentions legales
        </h1>

        <div className="space-y-8 text-sm text-light/45 leading-relaxed">
          <section>
            <h2 className="text-lg font-light text-light mb-4">Editeur du site</h2>
            <p>
              TECHNIQ8<br />
              Cabinet d&apos;ingenierie numerique &amp; IA<br />
              Paris, France<br />
              Email : contact@techniq8.com
            </p>
          </section>

          <section>
            <h2 className="text-lg font-light text-light mb-4">Hebergement</h2>
            <p>
              Ce site est heberge par Vercel Inc.<br />
              340 S Lemon Ave #4133<br />
              Walnut, CA 91789, USA
            </p>
          </section>

          <section>
            <h2 className="text-lg font-light text-light mb-4">Propriete intellectuelle</h2>
            <p>
              L&apos;ensemble des contenus de ce site (textes, images, graphismes, logo,
              icones, sons, logiciels) est la propriete exclusive de TECHNIQ8, a l&apos;exception
              des marques, logos ou contenus appartenant a d&apos;autres societes partenaires
              ou auteurs.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-light text-light mb-4">Responsabilite</h2>
            <p>
              TECHNIQ8 s&apos;efforce d&apos;assurer l&apos;exactitude et la mise a jour
              des informations diffusees sur ce site. Toutefois, TECHNIQ8 ne peut garantir
              l&apos;exactitude, la precision ou l&apos;exhaustivite des informations mises
              a disposition sur ce site.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
