/**
 * Get one uid
 * @returns universal unique id
 */
export const getUid = (): string => {
  return String(
    Date.now().toString(32) + 
    Math.random().toString(16)
  ).replace(/\./g, '')
}
