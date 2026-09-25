/**
 * The Acharyas — the guru parampara of Sri Vaishnavism (US-ACH-01..03,
 * FR-92..94), fully populated from the Product Owner's dossier batches 4-7
 * (Reference Content/).
 *
 * Content lives in content/acharyas.json (editable via the Sanity CMS).
 *
 * Shape: id, name, tamilName, eraGroup, era, role (one-line index role),
 * titles?, birthMonth?, birthStar?, tithi?, birthplace? {name, district?, kshetramId?},
 * amsam?, amsamAcharyaId?, timeline? [{when?, event}],
 * lifeHistory? (string | {heading, paragraphs[]}) [],
 * legend? {title?, text}, worksSummary?, works? [{name, pasurams?, language?}],
 * preservation?, philosophicalTheme?, associatedDesams? [],
 * verse? {work?, tamil?, transliteration, meaning?, wordMeanings?,
 *         commentary? [{heading, text}], audio?},
 * visuals? {iconography? (string | {posture, mudras, garments, idol}),
 *           videoSearches? [], digitalTexts? []},
 * guru? (acharya id), sishyas? [], wiki?, sources? []
 */

import acharyas from './content/acharyas.json';

export { acharyas };
