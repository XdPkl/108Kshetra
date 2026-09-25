/**
 * About singleton (_id = "about") — mirrors content/about.json 1:1: the site
 * intro, tours highlights, contact desk, the Founder & CEO block, the seven
 * pilgrimage circuits and the sanctum-etiquette cards.
 */
import {defineType} from 'sanity';
import {S, T} from './_helpers.js';

const about = defineType({
  name: 'about',
  title: 'About & Kshetra Tours',
  type: 'document',
  groups: [
    {name: 'site', title: 'Digital Archive'},
    {name: 'tours', title: 'Guided Yatras'},
    {name: 'contact', title: 'Contact Desk'},
    {name: 'ceo', title: 'Founder & CEO'},
    {name: 'circuits', title: 'Circuits'},
    {name: 'etiquette', title: 'Sanctum Etiquette'},
  ],
  fields: [
    {name: 'site', type: 'object', title: 'Digital archive section', group: 'site', fields: [
      S('heading', 'Heading'),
      {name: 'paragraphs', type: 'array', title: 'Paragraphs', of: [{type: 'string'}]},
      {name: 'features', type: 'array', title: 'Feature tiles', of: [{type: 'object', title: 'Feature tile', fields: [S('label', 'Label'), T('text', 'Text')]}]},
    ]},
    {name: 'tours', type: 'object', title: 'Guided yatras section', group: 'tours', fields: [
      S('heading', 'Heading'),
      T('intro', 'Intro'),
      {name: 'highlights', type: 'array', title: 'Highlights', of: [{type: 'object', title: 'Highlight', fields: [S('title', 'Title'), T('text', 'Text')]}]},
      T('note', 'Note'),
    ]},
    {name: 'contact', type: 'object', title: 'Contact desk section', group: 'contact', fields: [
      S('heading', 'Heading'),
      S('email', 'Email'),
      S('phone', 'Phone / WhatsApp'),
      T('note', 'Response-hours note'),
    ]},
    {name: 'ceo', type: 'object', title: 'Founder & CEO block', group: 'ceo', fields: [
      S('name', 'Name'),
      S('role', 'Role badge'),
      S('org', 'Organisation'),
      S('title', 'Full title'),
      S('base', 'Based in'),
      S('email', 'Email'),
      S('trustee', 'Trustee line'),
      {name: 'image', type: 'image', title: 'Portrait (uploaded)', options: {hotspot: true}, description: 'An uploaded portrait wins over the URL below.'},
      {name: 'photoUrl', type: 'url', title: 'Portrait URL (absolute https link)'},
      T('quote', 'Founder\u2019s quote'),
      {name: 'bio', type: 'array', title: 'Bio paragraphs', of: [{type: 'string'}]},
      {name: 'pillars', type: 'array', title: 'Pillar tiles', of: [{type: 'object', title: 'Pillar', fields: [S('title', 'Title'), T('text', 'Text')]}]},
    ]},
    {name: 'circuits', type: 'array', title: 'Pilgrimage circuits', group: 'circuits', of: [{type: 'object', title: 'Circuit', fields: [
      S('id', 'Circuit id', {readOnly: true, description: 'Stable identifier — managed by tooling.'}),
      S('region', 'Region (Browse deep-link)', {description: 'Must match a kshetram region, or "Celestial".'}),
      S('title', 'Title'),
      S('subtitle', 'Subtitle'),
      S('count', 'Count badge (e.g. "8 Divya Desams")'),
      S('duration', 'Duration'),
      T('baseCamps', 'Base camps'),
      T('desc', 'Description'),
      {name: 'highlights', type: 'array', title: 'Key shrines', of: [{type: 'string'}]},
    ]}]},
    {name: 'etiquette', type: 'array', title: 'Sanctum etiquette cards', group: 'etiquette', of: [{type: 'object', title: 'Card', fields: [
      S('id', 'Card id', {readOnly: true, description: 'Stable identifier — managed by tooling.'}),
      S('title', 'Title'),
      S('subtitle', 'Subtitle'),
      {name: 'points', type: 'array', title: 'Points', of: [{type: 'object', title: 'Point', fields: [S('lead', 'Lead-in label'), T('text', 'Text')]}]},
    ]}]},
  ],
  preview: {prepare: () => ({title: 'About — Kshetra Tours', subtitle: 'Site intro, tours, CEO desk, circuits, etiquette'})},
});

export default about;
