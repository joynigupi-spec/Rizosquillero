/**
 * Utility to resolve public asset URLs relative to Vite's BASE_URL.
 * This guarantees seamless loading on GitHub Pages (subfolders), custom domains,
 * and local environments without 404 errors.
 */
export const getAssetUrl = (path: string): string => {
  const base = import.meta.env.BASE_URL || './';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
};

export const LOGO_ROUND_URL = getAssetUrl('assets/brand/rizos_quilleros_logo_round.png');
export const HOSTING_ZIP_URL = getAssetUrl('rizosquilleros-web-hosting.zip');
export const SOURCE_ZIP_URL = getAssetUrl('rizosquilleros-codigo-fuente.zip');
