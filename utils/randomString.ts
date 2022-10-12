const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*'

/**
 * Generate a random characters string by given length
 * @param length the random string's length
 * @returns 
 */
export const generateRandomString = (length: number): string => {
    let result = ''
    const l = characters.length
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * l))
    }
    return result
}