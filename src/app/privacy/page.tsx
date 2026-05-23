import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialite",
  description: "Politique de confidentialite de TECHNIQ8. Protection des donnees personnelles et droits des utilisateurs.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-40 pb-32 md:pt-48 md:pb-40">
      <div className="max-w-3xl mx-auto px-6 md:px-12">
        <span className="text-xs tracking-[0.3em] uppercase text-electric/50 font-mono">
          Legal
        </span>
        <h1 className="text-3xl md:text-4xl font-extralight tracking-tight gradient-text-blue mt-4 mb-12">
          Politique de confidentialite
        </h1>

        <div className="space-y-8 text-sm text-light/45 leading-relaxed">
          <section>
            <h2 className="text-lg font-light text-light mb-4">1. Collecte des donnees</h2>
            <p>
              TECHNIQ8 collecte uniquement les donnees strictement necessaires au traitement
              de vos demandes : nom, adresse email, organisation et message. Ces donnees sont
              collectees via notre formulaire de contact et ne sont jamais revendues a des tiers.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-light text-light mb-4">2. Utilisation des donnees</h2>
            <p>
              Vos donnees sont utilisees exclusivement pour repondre a vos demandes,
              vous fournir des informations sur nos services et ameliorer notre site web.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-light text-light mb-4">3. Protection des donnees</h2>
            <p>
              Nous mettons en oeuvre les mesures techniques et organisationnelles appropriees
              pour proteger vos donnees contre tout acces non autorise, modification, divulgation
              ou destruction.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-light text-light mb-4">4. Vos droits</h2>
            <p>
              Conformement au RGPD, vous disposez d&apos;un droit d&apos;acces, de rectification,
              de suppression et de portabilite de vos donnees. Pour exercer ces droits,
              contactez-nous a : contact@techniq8.com
            </p>
          </section>

          <section>
            <h2 className="text-lg font-light text-light mb-4">5. Cookies</h2>
            <p>
              Ce site utilise des cookies strictement necessaires au fonctionnement du site.
              Aucun cookie de tracking ou publicitaire n&apos;est utilise.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
