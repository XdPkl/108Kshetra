/**
 * Small schema-authoring helpers — each returns a COMPLETE Sanity field or
 * type definition, so schema files stay terse but valid.
 */
import {defineField, defineType} from 'sanity';

/** String field. */
export const S = (name, title, extra = {}) =>
  defineField({name, type: 'string', title, ...extra});

/** Text (textarea) field. */
export const T = (name, title, extra = {}) =>
  defineField({name, type: 'text', title, rows: 3, ...extra});

/** Number field. */
export const N = (name, title, extra = {}) =>
  defineField({name, type: 'number', title, ...extra});

/** Array-of-strings field. */
export const SA = (name, title, extra = {}) =>
  defineField({name, type: 'array', title, of: [{type: 'string'}], ...extra});

/** Reference field to one document type. */
export const R = (name, to, title, extra = {}) =>
  defineField({name, type: 'reference', title, to: [{type: to}], ...extra});

/** Array of references. */
export const RA = (name, to, title, extra = {}) =>
  defineField({name, type: 'array', title, of: [{type: 'reference', to: [{type: to}]}], ...extra});

/** Inline object type definition (for nested one-off shapes). */
export const O = (name, title, fields, extra = {}) =>
  defineType({name, type: 'object', title, fields, ...extra});
