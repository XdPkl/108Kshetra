/**
 * useVisited — React binding for the visited store (FR-71..73).
 * @returns {{visitedIds: string[], count: number, isVisited: (id: string) => boolean,
 *            toggleVisited: (id: string) => void, markVisited: (id: string, v: boolean) => void,
 *            resetVisited: () => void}}
 */
import { useSyncExternalStore } from 'react';
import {
  getVisitedSnapshot,
  subscribeVisited,
  isVisited,
  markVisited,
  toggleVisited,
  resetVisited,
} from '../state/visited.js';

export function useVisited() {
  const visitedIds = useSyncExternalStore(subscribeVisited, getVisitedSnapshot);
  return {
    visitedIds,
    count: visitedIds.length,
    isVisited,
    markVisited,
    toggleVisited,
    resetVisited,
  };
}
