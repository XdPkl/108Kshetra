import kshetram from './kshetram.js';
import azhwar from './azhwar.js';
import acharya from './acharya.js';
import about from './about.js';
import siteCopy from './siteCopy.js';
import configType from './configType.js';

import {
  photo, timelineEntry, lifeEntry, lifeNote, commentaryEntry, wordMeaning, verse,
  legend, saintWork, iconography, saintVisuals,
  deityBrief, timings, pasuramRef,
  namesTri, thaayarDossier, deityDossier, dossierProfile, dossierPuranam,
  excerpt, perAzhwarEntry, mangalasasanam, dossierVisuals,
} from './objects.js';

export const schemaTypes = [
  // documents
  kshetram, azhwar, acharya, about, siteCopy, configType,
  // objects
  photo, timelineEntry, lifeEntry, lifeNote, commentaryEntry, wordMeaning, verse,
  legend, saintWork, iconography, saintVisuals,
  deityBrief, timings, pasuramRef,
  namesTri, thaayarDossier, deityDossier, dossierProfile, dossierPuranam,
  excerpt, perAzhwarEntry, mangalasasanam, dossierVisuals,
];
