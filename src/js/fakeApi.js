import {cursedDataEntry, dataEntry} from "./dataEntry";

let chunk;
let CUR;
let time;
let result;


/**
 * @description
 * @param chunkSize
 * @param cursed
 * @param timeout
 * @returns {Promise<unknown>}
 */
export function callApi(chunkSize, cursed, timeout) {
    chunk = chunkSize || 1;
    CUR = cursed;
    time = timeout;
    return getCards().then((res) => {
        return res
    });
}

/**
 * @description
 * @returns {Promise}
 */
async function getCards() {
    try {
        return result = await cardSplitter(chunk, CUR, time);

    } catch (error) {
        console.log(error);
    }
}

/**
 * @description
 * @param chunkSize
 * @param cursed
 * @param timeout
 * @returns {Promise}
 */
export function cardSplitter(chunkSize, cursed, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve(
                    fakeChunk(chunkSize, cursed)
                );
            } else {
                reject({message: 'Error'});
            }
        }, timeout);
    });
}


/**
 * @description
 * @param times
 * @param cursed
 * @returns {[]}
 */
export function fakeChunk(times, cursed) {
    let response =[];
    let type = cursed ? cursedDataEntry : dataEntry;
    for(let i=0; i < times; i++){
        response = response.concat(type);
    }
    return response;
}



//