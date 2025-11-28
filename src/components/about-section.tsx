export function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              À Propos de Moi
            </h2>
            <p className="max-w-[900px] font-elegant text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Je suis le roi des développeurs, principalement un développeur web. 
              Évidemment, comme je suis l'excellence incarnée, je suis un développeur full stack, 
              c'est-à-dire tant front-end que back-end. Je maîtrise l'art de concevoir et 
              réaliser des solutions robustes et performantes. Mon expertise garantit une 
              qualité d'exécution irréprochable et une vitesse de livraison qui défie toute 
              concurrence, évitant de faire perdre un temps précieux à mes clients. Choisir 
              mon savoir-faire, c'est opter pour l'efficacité et la perfection.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
