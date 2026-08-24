import variants from './image-variants.json';

type VariantEntry = { variants: number[]; srcWidth: number | null };
const MANIFEST = variants as Record<string, VariantEntry>;

/**
 * Default `sizes` for standard in-flow content images.
 * Full-bleed heroes/sliders should pass sizes="100vw".
 */
export const SIZES_CONTENT =
  '(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px';
export const SIZES_FULLBLEED = '100vw';

/**
 * Build a `srcset` string for an image path that has pre-generated width
 * variants (see scripts/img-gen-variants.mjs + src/lib/image-variants.json).
 *
 * Returns '' when the path has no variants — callers then just omit srcset,
 * leaving the plain `src` untouched. Safe for every image path on the site.
 */
export function srcsetFor(src: string | undefined | null): string {
  if (!src) return '';
  const entry = MANIFEST[src];
  if (!entry) return '';
  const parts = entry.variants.map((w) => {
    const variantPath = src.replace(/\.webp$/i, `-${w}.webp`);
    return `${variantPath} ${w}w`;
  });
  // include the original as the largest candidate at its true width
  if (entry.srcWidth) parts.push(`${src} ${entry.srcWidth}w`);
  return parts.join(', ');
}

/**
 * Convenience: returns attributes to spread onto an <img>.
 * When no variants exist, returns {} so nothing is added.
 */
export function responsiveImg(
  src: string | undefined | null,
  sizes: string = SIZES_CONTENT
): { srcset?: string; sizes?: string } {
  const srcset = srcsetFor(src);
  if (!srcset) return {};
  return { srcset, sizes };
}
