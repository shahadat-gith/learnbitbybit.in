import HeroLeft from './HeroLeft.jsx';
import HeroRight from './HeroRight.jsx';

export default function AnnouncementHero() {
  return (
    <section className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
      <HeroLeft />
      <HeroRight />
    </section>
  );
}
