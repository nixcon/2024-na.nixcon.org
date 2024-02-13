<script>
  export let level,
    image,
    alt,
    url,
    extraClasses = "";

  const sizes = {
    diamond: "w-72 max-h-16",
    gold:    "w-56 max-h-14",
    silver:  "w-48 max-h-12",
    bronze:  "w-36 max-h-10"
  };

  if (image === undefined) throw "Image not set";
  if (alt === undefined) throw "Alt not set";
  if (url === undefined) throw "url not set";

  let src = `sponsors/${image}`;
  let classes = `${sizes[level]} ${extraClasses}`;
</script>

<li class="flex items-center">
  <a href={url} target="_blank" rel="external">
    <img {src} class={classes} {alt} />
  </a>
</li>
