import { Ref } from 'vue';
import { generateRandomString } from './randomString'

/**
 * Change a ref string to the target string, with random characters effect
 * @param refString The ref object which will be changed
 * @param word The target word you want to convert to
 * @param interval Word changing effect interval
 */
export const randomToWord = (refString: Ref<string>, word: string, interval: number = 60) => {
    let i = 0

    let changeTime: number
    if (word.length < 5) changeTime = 5
    else changeTime = word.length

    const randomTimer = setInterval(() => {
        const dis = 0
        refString.value =
            word.slice(0, i) + generateRandomString(word.length - i + dis)
        i++

        if (i === changeTime) {
            clearInterval(randomTimer)
            refString.value = word
        }
    }, interval)
}