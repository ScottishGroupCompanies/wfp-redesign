#!/bin/bash
# Copy blog markdown files to dist as clean .md twins
# Blog posts: src/content/blog/*.md → dist/blog/*.md (stripped of frontmatter)

set -e

BLOG_SRC="src/content/blog"
BLOG_DIST="dist/blog"

if [ ! -d "$BLOG_SRC" ]; then
  echo "No blog source directory found, skipping markdown twin generation."
  exit 0
fi

mkdir -p "$BLOG_DIST"

count=0
for md_file in "$BLOG_SRC"/*.md; do
  [ -f "$md_file" ] || continue
  
  slug=$(basename "$md_file" .md)
  
  # Strip frontmatter (everything between the first --- and the second ---)
  # Keep the markdown body only — that's the clean content for LLMs
  awk '
    BEGIN { in_frontmatter=0; body_started=0 }
    /^---$/ && !body_started {
      if (in_frontmatter) { in_frontmatter=0; body_started=1; next }
      else { in_frontmatter=1; next }
    }
    !in_frontmatter && body_started { print }
  ' "$md_file" > "$BLOG_DIST/${slug}.md"
  
  count=$((count + 1))
done

echo "Generated $count markdown twins in $BLOG_DIST"
