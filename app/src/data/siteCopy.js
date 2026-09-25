/**
 * Site copy — the marketing/chrome text that lives outside the structured
 * datasets (hero, page banners, About section headings, the inquiry modal,
 * header dropdown/drawer copy, footer dedication). Extracted verbatim from
 * the components during the CMS rollout (US-CMS-01) so admins can edit it.
 *
 * Content lives in content/site-copy.json (editable via the Sanity CMS).
 *
 * Deliberately NOT here: primary nav pill labels (Home / Map / My Yatra / …)
 * and a11y labels/title tooltips — those are structural, developer-owned.
 */

import siteCopyData from './content/site-copy.json';

export const SITE_COPY = siteCopyData;
