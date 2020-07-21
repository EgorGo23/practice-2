var panel = (function panel() {
    var panelEl = document.createElement('div');
    panelEl.className = 'panel';

    var btn = document.createElement('button');
    btn.className = 'panel__btn';
    btn.textContent = 'Util test start';

    var header = document.createElement('div');
    header.className = 'panel__header';

    var startTest = function startTest() {
        utilTests.startAllTests();
    };

    btn.addEventListener('click', startTest);

    panelEl.append(header);
    panelEl.append(btn);

    return panelEl;
})();