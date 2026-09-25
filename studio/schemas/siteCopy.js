/**
 * Site-copy singleton (_id = "siteCopy") — mirrors content/site-copy.json
 * 1:1: hero, home sections, page banners, About chrome, the inquiry modal,
 * header dropdown/drawer copy and the footer dedication.
 */
import {defineType} from 'sanity';
import {S, T, SA} from './_helpers.js';

/** Two-field tuple objects keep JSON shapes with pair arrays intact. */
const option = (labelTitle, valueHidden) => ({
  type: 'object',
  title: 'Option',
  fields: [
    ...(valueHidden ? [S('value', 'Option value', {readOnly: true, hidden: true})] : []),
    S('label', labelTitle),
  ],
});

const siteCopy = defineType({
  name: 'siteCopy',
  title: 'Site Copy (banners, hero, modal)',
  type: 'document',
  groups: [
    {name: 'home', title: 'Home'},
    {name: 'pages', title: 'Page Banners'},
    {name: 'about', title: 'About Chrome & Modal'},
    {name: 'header', title: 'Header'},
    {name: 'footer', title: 'Footer'},
  ],
  fields: [
    {name: 'hero', type: 'object', title: 'Home hero', group: 'home', fields: [
      S('invocation', 'Invocation (Tamil)'),
      S('eyebrow', 'Eyebrow'),
      S('title', 'Title'),
      S('subtitle', 'Subtitle (Tamil)'),
      T('description', 'Description'),
      S('cta', 'Button label'),
    ]},
    {name: 'home', type: 'object', title: 'Home sections', group: 'home', fields: [
      {name: 'featured', type: 'object', title: 'Featured kshetrams', fields: [
        S('eyebrow', 'Eyebrow'), S('title', 'Title'), T('lead', 'Lead'), S('viewAll', 'View-all link'),
      ]},
      {name: 'azhwarStrip', type: 'object', title: 'Azhwars strip', fields: [
        S('eyebrow', 'Eyebrow'), S('title', 'Title'), T('lead', 'Lead'), S('ctaLabel', 'CTA label'),
      ]},
      {name: 'acharyaStrip', type: 'object', title: 'Acharyas strip', fields: [
        S('eyebrow', 'Eyebrow'), S('title', 'Title'), T('lead', 'Lead'), S('ctaLabel', 'CTA label'),
      ]},
    ]},
    {name: 'browse', type: 'object', title: 'Browse banner', group: 'pages', fields: [S('eyebrow', 'Eyebrow'), S('title', 'Title'), T('lead', 'Lead')]},
    {name: 'map', type: 'object', title: 'Map banner', group: 'pages', fields: [S('eyebrow', 'Eyebrow'), S('title', 'Title')]},
    {name: 'trip', type: 'object', title: 'Trip planner banner & empty state', group: 'pages', fields: [S('title', 'Title'), S('emptyTitle', 'Empty-state title'), T('emptyMessage', 'Empty-state message')]},
    {name: 'azhwarsPage', type: 'object', title: 'Azhwars banner', group: 'pages', fields: [S('eyebrow', 'Eyebrow'), S('title', 'Title'), S('titleTamil', 'Title (Tamil, in parens)'), T('lead', 'Lead')]},
    {name: 'acharyasPage', type: 'object', title: 'Acharyas banner', group: 'pages', fields: [S('eyebrow', 'Eyebrow'), S('title', 'Title'), T('lead', 'Lead')]},

    {name: 'about', type: 'object', title: 'About chrome', group: 'about', fields: [
      {name: 'banner', type: 'object', title: 'Banner', fields: [S('eyebrow', 'Eyebrow'), S('title', 'Title'), T('tagline', 'Tagline')]},
      SA('anchors', 'Quick-jump chip labels'),
      {name: 'sections', type: 'object', title: 'Section headings & labels', fields: [
        S('archiveEyebrow', 'Archive eyebrow'), S('toursEyebrow', 'Tours eyebrow'),
        S('contactEyebrow', 'Contact eyebrow'), S('emailLabel', 'Email label'), S('phoneLabel', 'Phone label'),
        S('responseHoursLabel', 'Response-hours label'), S('requestSchedule', 'Request-schedule button'),
        S('ceoEyebrow', 'CEO eyebrow'), S('ceoTitle', 'CEO title'), S('ceoBadge', 'CEO badge'),
        S('quoteAttribution', 'Quote attribution'), S('inquireCeo', 'Inquire-CEO button'), S('directEmailLabel', 'Direct-email label'),
        S('circuitsEyebrow', 'Circuits eyebrow'), S('circuitsTitle', 'Circuits title'), T('circuitsNote', 'Circuits note'),
        S('keyShrinesLabel', 'Key-shrines label'), S('viewAllPrefix', 'View-all prefix'), S('viewAllSuffix', 'View-all suffix'),
        S('inquireCircuit', 'Inquire-circuit button'),
        S('etiquetteEyebrow', 'Etiquette eyebrow'), S('etiquetteTitle', 'Etiquette title'), T('etiquetteLead', 'Etiquette lead'),
      ]},
      {name: 'scheduleModal', type: 'object', title: 'Request-Yatra-Schedule modal', fields: [
        S('deskEyebrow', 'Desk eyebrow'), S('title', 'Modal title'),
        {name: 'labels', type: 'object', title: 'Form labels', fields: [
          S('name', 'Name'), S('phone', 'Phone'), S('email', 'Email'), S('circuit', 'Circuit'),
          S('pilgrims', 'Pilgrims'), S('window', 'Travel window'), S('notes', 'Special requirements'),
        ]},
        {name: 'placeholders', type: 'object', title: 'Placeholders', fields: [
          S('name', 'Name'), S('phone', 'Phone'), S('email', 'Email'), T('notes', 'Special requirements'),
        ]},
        SA('extraCircuitOptions', 'Extra circuit options (beyond the 7 circuits)'),
        {name: 'pilgrimOptions', type: 'array', title: 'Pilgrim-count options', of: [option('Label', true)]},
        {name: 'travelWindowOptions', type: 'array', title: 'Travel-window options', of: [option('Label', true)]},
        S('submit', 'Submit button'), T('privacyNote', 'Privacy note'),
        {name: 'success', type: 'object', title: 'Success state', fields: [
          S('eyebrow', 'Eyebrow'), S('greetingPrefix', 'Greeting prefix'), S('greetingFallback', 'Greeting fallback name'),
          T('bodyLead', 'Body (before the reference)'), T('bodyTail', 'Body (after the reference)'),
          {name: 'summaryLabels', type: 'object', title: 'Summary labels', fields: [
            S('circuit', 'Circuit'), S('devotees', 'Devotees'), S('window', 'Window'), S('contact', 'Contact'), S('pilgrimsSuffix', 'Pilgrims suffix'),
          ]},
          S('done', 'Done button'),
        ]},
      ]},
    ]},

    {name: 'header', type: 'object', title: 'Header dropdowns & drawer', group: 'header', fields: [
      {name: 'regionRows', type: 'array', title: 'Region rows (108-Temples dropdown)', of: [{type: 'object', title: 'Region', fields: [
        S('value', 'Region value (Browse filter)', {readOnly: true, description: 'Must match the kshetram region — managed by tooling.'}),
        S('name', 'Display name'), S('highlight', 'Highlight line'),
      ]}]},
      {name: 'templesDropdown', type: 'object', title: '108-Temples dropdown', fields: [
        S('heading', 'Heading'), S('regionsBadge', 'Regions badge'), S('browseAll', 'Browse-all label'), S('totalBadge', 'Total badge'), S('filterBy', 'Filter-by label'),
      ]},
      {name: 'toursDropdown', type: 'object', title: 'Kshetra Tours dropdown', fields: [
        S('heading', 'Heading'), T('subtitle', 'Subtitle'),
        {name: 'items', type: 'array', title: 'Items', of: [{type: 'object', title: 'Item', fields: [S('title', 'Title'), S('subtitle', 'Subtitle')]}]},
        S('inquire', 'Inquiries link label'),
      ]},
      {name: 'drawer', type: 'object', title: 'Mobile drawer', fields: [
        S('summaryTitle', 'Summary title'), S('summarySubtitle', 'Summary subtitle'),
        S('visitedLabel', 'Visited suffix'), S('tripLabel', 'Trip suffix'),
        S('shrinesGroup', 'Shrines group title'), S('plannerGroup', 'Planner group title'), S('lineageGroup', 'Lineage group title'),
        S('toursGroup', 'Tours group title'), S('toursBadge', 'Tours badge'),
        S('toursOverview', 'Tours overview label'), S('toursOverviewSub', 'Tours overview sub'),
        S('departures', 'Departures label'), S('circuits', 'Circuits label'), S('etiquette', 'Etiquette label'), S('inquireDesk', 'Inquire-desk label'),
      ]},
    ]},

    {name: 'footer', type: 'object', title: 'Footer', group: 'footer', fields: [
      S('prayer', 'Dedicatory prayer (Tamil)'),
      T('compiledNote', 'Compiled-with note'),
      T('goodFaithNote', 'Good-faith note'),
      T('privacyNote', 'Local-storage privacy note'),
      S('mark', 'Footer mark'),
    ]},
  ],
  preview: {prepare: () => ({title: 'Site Copy', subtitle: 'Hero, banners, modal, header, footer'})},
});

export default siteCopy;
