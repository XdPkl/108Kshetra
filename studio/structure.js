/**
 * Desk structure — a non-technical-editor-friendly layout: singletons for the
 * About/Site-Copy/Config content, then the collections grouped the way the
 * site presents them.
 */
import {S} from 'sanity/structure';

const REGIONS = [
  'Thondai Nadu', 'Chola Nadu', 'Nadu Nadu', 'Pandiya Nadu',
  'Malai Nadu', 'Vada Nadu', 'Celestial',
];

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('About & Kshetra Tours')
        .child(S.document().schemaType('about').documentId('about')),
      S.listItem()
        .title('Site Copy (banners, hero, modal)')
        .child(S.document().schemaType('siteCopy').documentId('siteCopy')),
      S.listItem()
        .title('Featured & Settings')
        .child(S.document().schemaType('config').documentId('config')),
      S.divider(),
      S.listItem()
        .title('Kshetrams (108)')
        .child(
          S.list()
            .title('Kshetrams by region')
            .items(
              REGIONS.map((region) =>
                S.listItem()
                  .title(region === 'Celestial' ? 'Vinnulaga Thirupathigal (Celestial)' : region)
                  .child(
                    S.documentList()
                      .title(region)
                      .schemaType('kshetram')
                      .filter('region == $region')
                      .params({region})
                      .defaultOrdering([{field: 'order', direction: 'asc'}]),
                  ),
              ),
            ),
        ),
      S.listItem()
        .title('Azhwars (12)')
        .child(
          S.documentList()
            .title('Azhwars')
            .schemaType('azhwar')
            .defaultOrdering([{field: 'order', direction: 'asc'}]),
        ),
      S.listItem()
        .title('Acharyas (27)')
        .child(
          S.documentList()
            .title('Acharyas')
            .schemaType('acharya')
            .defaultOrdering([{field: 'eraGroup', direction: 'asc'}, {field: 'name', direction: 'asc'}]),
        ),
    ]);
