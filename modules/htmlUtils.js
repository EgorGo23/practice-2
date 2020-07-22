;var htmlUtils = (function htmlUtils() {
    var createHtmlElm = function createItem(tagStr, options) {
        var elm = document.createElement(tagStr);
        for (var key in options) {
            if (key === 'handlers') {
                for (var i = 0; i < options[key].length; i++) {
                    if (!testUtils.isFunc(options[key][i])) {
                        continue;
                    } else {
                        elm.addEventListener('click', options[key][i]);
                    }
                }
            }
            
            elm[key] = options[key];
        }

        return elm; 
    } 

    var addElementsToParent = function addElementsToParent(parentElm, elmArr) {
        for (var i = 0; i < elmArr.length; i++) {
            parentElm.append(elmArr[i]);
        }
        
        return parentElm;
    }

    return {
        createHtmlElm: createHtmlElm,
        addElementsToParent: addElementsToParent,
    }
})();