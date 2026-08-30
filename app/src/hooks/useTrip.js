/**
 * useTrip — React binding for the trip store (FR-79..81).
 * @returns {{tripIds: string[], count: number, isInTrip: (id: string) => boolean,
 *            toggleTrip: (id: string) => boolean, addToTrip: (id: string) => void,
 *            removeFromTrip: (id: string) => void, setTrip: (ids: string[]) => void,
 *            clearTrip: () => void}}
 */
import { useSyncExternalStore } from 'react';
import {
  getTripSnapshot,
  subscribeTrip,
  isInTrip,
  toggleTrip,
  addToTrip,
  removeFromTrip,
  setTrip,
  clearTrip,
} from '../state/trip.js';

export function useTrip() {
  const tripIds = useSyncExternalStore(subscribeTrip, getTripSnapshot);
  return {
    tripIds,
    count: tripIds.length,
    isInTrip,
    toggleTrip,
    addToTrip,
    removeFromTrip,
    setTrip,
    clearTrip,
  };
}
