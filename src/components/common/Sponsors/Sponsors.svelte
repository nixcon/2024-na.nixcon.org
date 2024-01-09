<script>
  import Sponsor from "./Sponsor.svelte";

  export let sponsors,
    level,
    randomize = true;

  const randomizedSponsors = randomize
    ? sponsors
        .map((sponsor) => ({ sponsor, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ sponsor }) => sponsor)
    : sponsors;
</script>

{#if randomizedSponsors.length === 0}
<p>We have no {level} sponsors yet! Interested? See <a href="https://discourse.nixos.org/t/nixcon-north-america-sponsorship-tracks/37755"> this post</a>.</p>
{:else}
{#each randomizedSponsors as sponsor}
    <Sponsor {level} image={sponsor.image} alt={sponsor.alt} url={sponsor.url} extraClasses={sponsor.extraClasses}/>
{/each}
{/if}
