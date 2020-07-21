;var utilTests = (function getUtilTests(util) {
    if (typeof util === 'undefined') {
        return console.error('Подключите библиотеку util');
    }

    var num = 12;
    var bool = true;
    var str = '123';
    var nul = null;
    var undef = undefined;
    var obj = {a: 1, b: '2'};
    var sym = Symbol('name');
    var nan = NaN;

    var displayTest = function displayTest(func) {
        if (typeof func === 'undefined') {
            return console.error('Передайте функцию для тестирования');
        }

        return [
            console.log('Arg is Number', func(num)),
            console.log('Arg is Undefined', func(undef)),
            console.log('Arg is Boolean', func(bool)),
            console.log('Arg is String', func(str)),
            console.log('Arg is Null', func(nul)),
            console.log('Arg is Obj', func(obj)),
            console.log('Arg is Symbol', func(sym)),
            console.log('Arg is NaN', func(nan)),
            console.log('Arg is empty', func()),
        ];
    }

    var isString = function isString() {
        displayTest(util.isString);
    };

    var isNumber = function isNumber() {
        displayTest(util.isNumber);
    };

    var isNan = function isNan() {
        displayTest(util.isNan);
    };

    var isBool = function isBool() {
        displayTest(util.isBool);
    };

    var isNull = function isNull() {
        displayTest(util.isNull);
    };

    var isUndef = function isUndef() {
        displayTest(util.isUndef);
    };

    var isSymb = function isSymb() {
        displayTest(util.isSymb);
    };

    var isObj = function isObj() {
        displayTest(util.isObj);
    };

    var toNumber = function toNumber() {
        displayTest(util.toNumber);
    };

    var toStr = function toStr() {
        displayTest(util.toStr);
    };

    var toBool = function toBool() {
        displayTest(util.toBool);
    };

    var toObj = function toObj() {
        displayTest(util.toObj);
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
    }
})(util);