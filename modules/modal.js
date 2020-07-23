;var modal = (function Modal(initialElm) {
    var modalTextOpen = 'Test started';
    var modalTextClose = 'Test finished';

    var getListItemsByClass = function(className) {
        var htmlListItemsByClass = document.getElementsByClassName(className);
        return Array.prototype.slice.call(htmlListItemsByClass);
    }

    var open = function() {
        alert(modalTextOpen);
    }
    
    var close = function() {
        alert(modalTextClose);
    }

    var setHandler = function(elm, callback) {
        elm.addEventListener('click', callback);
    }

    var setModalOpenText = function(text) {
        modalTextOpen = text;
    }

    var setModalCloseText = function(text) {
        modalTextClose = text;
    }

    var init = function() {
        var listItemsByClass = getListItemsByClass(initialElm);

        for(var i = 0; i < listItemsByClass.length; i++) {
            setHandler(listItemsByClass[i], open);
        }
    }

    init();

    return {
        init: init,
        setModalOpenText: setModalOpenText,
        setModalCloseText: setModalCloseText,
        close: close,
    };
})('panel__btn');