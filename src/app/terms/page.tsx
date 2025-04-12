import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for AutoManager",
};

export default function TermsPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Terms of Service
          </h1>
          <p className="text-muted-foreground">
            Please read these terms carefully before using AutoManager.
          </p>
        </div>

        {/* Terms of Service */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Terms of Service
          </h2>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">1. Introduction</h3>
            <p className="leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="leading-7">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">2. Use of Our Service</h3>
            <p className="leading-7">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <p className="leading-7">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet.
            </p>
            <p className="leading-7">
              Consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">3. User Responsibilities</h3>
            <p className="leading-7">
              Ut enim ad minima veniam, quis nostrum exercitationem ullam
              corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur.
            </p>
            <p className="leading-7">
              Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At
              vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">4. Disclaimers</h3>
            <p className="leading-7">
              Sint occaecati cupiditate non provident, similique sunt in culpa
              qui officia deserunt mollitia animi, id est laborum et dolorum
              fuga. Et harum quidem rerum facilis est et expedita distinctio.
            </p>
            <p className="leading-7">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus.
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
