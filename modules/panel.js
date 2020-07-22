;var panel = (function panel() {
    var panelEl = htmlUtils.createHtmlElm('div', { className: 'panel' });
    var btn = htmlUtils.createHtmlElm('button', { className: 'panel__btn', textContent: 'Test start', handlers: [ testUtilsTests.startAllTests ] });
    var header = htmlUtils.createHtmlElm('div', { className: 'panel__header' });

    return {
        panelEl: htmlUtils.addElementsToParent(panelEl, [header, btn]),
    };
})();