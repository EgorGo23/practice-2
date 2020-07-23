;var table = (function Table() {
    var getListItemsByClass = function(className) {
        var htmlListItemsByClass = document.getElementsByClassName(className);
        return Array.prototype.slice.call(htmlListItemsByClass);
    }

    var setDisableState = function(tableClassName) {
        var listItemsByClass = getListItemsByClass(tableClassName);

        for(var i = 0; i < listItemsByClass.length; i++) {
            listItemsByClass[i].classList.contains('table_disabled')
                ? listItemsByClass[i].classList.remove('table_disabled')
                    : listItemsByClass[i].classList.add('table_disabled');
        }
    } 

    var setTableDisplay = function(tableClassName, displayValue) {
        var listItemsByClass = getListItemsByClass(tableClassName);

        for(var i = 0; i < listItemsByClass.length; i++) {
            var tableDisplayClass = 'table_display_' + displayValue;
            listItemsByClass[i].classList.add(tableDisplayClass)
        }
    }

    return {
        setDisableState: setDisableState,
        setTableDisplay: setTableDisplay,
    }
})();

