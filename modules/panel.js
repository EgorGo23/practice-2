;var panel = (function Panel() {
    var MAIN_CLASS_NAME = 'panel' 
    var normalStyle = 'normal';

    var getListItemsByClass = function(className) {
        var htmlListItemsByClass = document.getElementsByClassName(className);
        return Array.prototype.slice.call(htmlListItemsByClass);
    }
    
    var setHandler = function(elm, callback) {
        elm.addEventListener('click', callback);
    } 

    
    var setPanelStyle = function(className, resultText) {
        var state = resultText || normalStyle;

        var listItemsByClass = getListItemsByClass(className);
        
        for(var i = 0; i < listItemsByClass.length; i++) {
            if (state === 'success') {
                listItemsByClass[i].classList.add('panel-succeed');
            } else if (state === 'error') {
                listItemsByClass[i].classList.add('panel-error');
            }
        }
    }

    var init = function(initialElm) {
        var listItemsByClass = getListItemsByClass(initialElm);

        for(var i = 0; i < listItemsByClass.length; i++) {
            setHandler(listItemsByClass[i], testUtilsTests.startAllTests);
        }
    }

    init(MAIN_CLASS_NAME);

    return {
        init: init,
        setPanelStyle: setPanelStyle
    }
})();