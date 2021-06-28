import { HashMap } from "./Delegate";

export const CollectionUtils = {

    max<T>(array: T[], getValue: (item: T) => number) {
        let result = array.length && getValue(array[0]) || 0;
        array.forEach(item => result = Math.max(getValue(item), result));
        return result;
    },

    min<T>(array: T[], getValue: (item: T) => number) {
        let result = array.length && getValue(array[0]) || 0;
        array.forEach(item => result = Math.min(getValue(item), result));
        return result;
    },

    toHashMap<T, TKey extends number | string, TValue>(values: T[], getKey: (value: T, i: number) => TKey, getValue: (value: T, i: number) => TValue): HashMap<TKey, TValue> {
        const result: any = {};
        values.forEach((value, i) => result[getKey(value, i)] = getValue(value, i));
        return result;
    },
    
};