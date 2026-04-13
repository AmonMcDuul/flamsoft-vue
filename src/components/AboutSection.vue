<template>
  <div class="section-bg-white scroll-target" id="about">
    <div class="container">
      <h2 class="about-title">Over mij</h2>
      <p class="about-text">
        Ik ben Joran, softwareontwikkelaar uit omgeving Halsteren, Bergen op
        Zoom. Ik ontwerp en bouw maatwerksoftware en webapplicaties, van idee
        tot werkend product. Met een focus op duidelijke architectuur en
        praktische oplossingen zorg ik dat software niet alleen werkt, maar ook
        blijft werken.
      </p>
      <br />
      <p class="about-text mt-4">
        Naast softwareontwikkelaar ben ik vader van vier geweldige kinderen. Die
        rol leert me elke dag om creatief, flexibel en oplossingsgericht te
        zijn. Precies dezelfde insteek die ik meeneem in ieder project. Geen
        gedoe, gewoon bouwen aan iets moois dat écht werkt.
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.about-title {
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 0.75rem;
}

.about-text {
  color: $color-text-secondary;
  font-size: 1rem;
  line-height: 1.5;
  max-width: 42rem;

  @media (min-width: $breakpoint-sm) {
    font-size: 1.125rem;
  }
}
</style>
