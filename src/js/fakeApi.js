import {cursedDataEntry, dataEntry} from "./dataEntry";

let chunk;
let CUR;
let time;
let result;

export function callApi(chunkSize, cursed, timeout) {
    chunk = chunkSize;
    CUR = cursed;
    time = timeout;
    return getCards().then((res)=>{return res});
}


async function getCards() {
    try {
        return result = await cardSplitter(chunk, CUR, time);

    } catch (error) {
        console.log(error);
    }
}

export function cardSplitter(chunkSize, cursed, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve(
                    cursed ? cursedDataEntry : dataEntry
                );
            } else {
                reject({message: 'Error'});
            }
        }, timeout);
    });
}


//