export function TrustedBy() {
  const brands = [
    'Content Creators',
    'Social Media Managers',
    'Marketing Teams',
    'Influencers',
    'Small Businesses',
    'Agencies',
  ];

  return (
    <section className="py-12 border-b border-border/50 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-6">
          Trusted by creators and businesses worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
          {brands.map((brand, index) => (
            <span
              key={index}
              className="text-muted-foreground/60 font-medium text-sm sm:text-base"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
