;var util = (function util() {
    var isString = function isString(value) {
        return typeof value === 'string';
    };

    var isNumber = function isNumber(value) {
        return typeof value === 'number' && !isNaN(value);
    };

    var isNan = function isNan(value) {
        return typeof value !== 'symbol' && typeof value === 'number' && isNaN(value);
    };

    var isBool = function isBool(value) {
        return typeof value === 'boolean';
    };

    var isNull = function isNull(value) {
        return value === null;
    };

    var isUndef = function isUndef(value) {
        return typeof value === 'undefined';
    };

    var isSymb = function isSymb(value) {
        return typeof value === 'symbol';
    };

    var isObj = function isObj(value) {
        return value !== null && typeof value === 'object';
    };

    var toNumber = function toNumber(value) {
        value = value || 0;
        return isSymb(value) 
            || isNan(value) 
                || isObj(value) 
                    || isUndef(value) ? 0 : Number(value);
    };

    var toStr = function toStr(value) {
        value = value || '';
        return isSymb(value)
            || isNan(value)
                || isObj(value)
                    || isNull(value)
                        || isUndef(value) ? '' : String(value);
    };

    var toBool = function toBool(value) {
        return !!value;
    };

    var toObj = function toObj(value) {
        return Object(value);
    };

    return {
        isString: isString,
        isNumber: isNumber,
        isNan: isNan,
        isBool: isBool,
        isNull: isNull,
        isUndef: isUndef,
        isSymb: isSymb,
        isObj: isObj,
        toNumber: toNumber,
        toStr: toStr,
        toBool: toBool,
        toObj: toObj,
    };
})()
