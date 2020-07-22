;var modal = (function modal() {
    var modalEl = htmlUtils.createHtmlElm('div', { className: 'modal', innerHTML: '<strong class="modal__text">Modal Window</strong>' });
    
    return {
        modalEl: modalEl
    };
})();