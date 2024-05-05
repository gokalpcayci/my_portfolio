import { getGithubContributions, getGithubStats } from "@/app/actions";
import { GithubStatsCard } from "@/app/components/cards/github";
import { LinkedInCard } from "@/app/components/cards/linkedin";
import { LocationCard } from "@/app/components/cards/location";
import { MeCard } from "@/app/components/cards/me";
import { TimeCard } from "@/app/components/cards/time";
import { Motion } from "@/app/components/motion";
import Projects from "@/app/components/cards/projects";
export async function Cards() {
  const { followers, stars } = await getGithubStats();
  const contributions = await getGithubContributions();

  return (
    <Motion
      asChild
      animate="visible"
      variants={{
        visible: {
          transition: { delayChildren: 0.25, staggerChildren: 0.1 },
        },
      }}
    >
      <section className="mt-8 grid grid-cols-8 grid-rows-5 gap-4 md:grid-cols-7 md:grid-rows-3">
        <MeCard />
        <GithubStatsCard
          followers={followers}
          stars={stars}
          contributions={contributions}
        />
        <Projects />
        <LocationCard />
        <LinkedInCard />
        <TimeCard />
      </section>
    </Motion>
  );
}
