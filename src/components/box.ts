export const BOX = { w: 340, h: 210, d: 230 };

const FRONT_Z = BOX.d / 2 - 46;
const BACK_Z = -BOX.d / 2 + 40;
const MAX_SPACING = 44;

export function folderDepth(index: number, total: number): number {
  const spacing = Math.min(MAX_SPACING, (FRONT_Z - BACK_Z) / Math.max(total - 1, 1));
  return FRONT_Z - index * spacing;
}

export function folderHeight(index: number): number {
  return 300 + index * 14;
}

export const VOLUME_SIZE = 5;

export function volumeCount(total: number): number {
  return Math.max(1, Math.ceil(total / VOLUME_SIZE));
}

export function volumeOf(index: number): number {
  return Math.floor(index / VOLUME_SIZE);
}
