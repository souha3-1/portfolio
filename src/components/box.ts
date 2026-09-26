export const BOX = { w: 340, h: 210, d: 230 };

export function folderDepth(index: number): number {
  return BOX.d / 2 - 46 - index * 44;
}

export function folderHeight(index: number): number {
  return 300 + index * 14;
}
