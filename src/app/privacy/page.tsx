import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | AutoManager",
  description: "Privacy Policy for AutoManager",
};

export default function PrivacyPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">
            Please read these terms carefully before using AutoManager.
          </p>
        </div>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Privacy Policy
          </h2>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">1. Information We Collect</h3>
            <p className="leading-7">
              Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe eveniet ut et voluptates repudiandae sint et
              molestiae non recusandae. Itaque earum rerum hic tenetur a
              sapiente delectus.
            </p>
            <p className="leading-7">
              Ut aut reiciendis voluptatibus maiores alias consequatur aut
              perferendis doloribus asperiores repellat. Et harum quidem rerum
              facilis est et expedita distinctio.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              2. How We Use Your Information
            </h3>
            <p className="leading-7">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus.
            </p>
            <p className="leading-7">
              Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe eveniet ut et voluptates repudiandae sint et
              molestiae non recusandae. Itaque earum rerum hic tenetur a
              sapiente delectus.
            </p>
            <p className="leading-7">
              Ut aut reiciendis voluptatibus maiores alias consequatur aut
              perferendis doloribus asperiores repellat.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">3. Data Sharing</h3>
            <p className="leading-7">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <p className="leading-7">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">4. Your Rights</h3>
            <p className="leading-7">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem.
            </p>
            <p className="leading-7">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">5. Contact Us</h3>
            <p className="leading-7">
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit
              esse quam nihil molestiae consequatur, vel illum qui dolorem eum
              fugiat quo voluptas nulla pariatur?
            </p>
            <p className="leading-7">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident.
            </p>
          </div>
        </section>

        <div className="text-muted-foreground border-t pt-6 text-sm">
          <p>Last Updated: April 12, 2025</p>
        </div>
      </div>
    </div>
  );
}
