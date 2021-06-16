
const RandomUtils = {

    getNumbersArray(min: number, max: number, length: number) {
        const result: number[] = [];
        const diff = max - min;
        for(let i = 0; i < length; i++) {
            let value = 0;
            do {
                value = Math.floor((Math.random() * diff) + min);
            } while(result.includes(value));
            result.push(value);
        }
        return result;
    }

};

export default RandomUtils;