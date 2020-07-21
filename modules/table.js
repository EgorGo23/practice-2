;var table = (function table() {
    var clickHandler = function(e) {
        e.stopPropagation();

        if (e.target.tagName !== 'TD') {
            return;
        }

        var app = document.getElementById('app');
        app.append(modal);
    };

    var tableEl = document.createElement('table');
    tableEl.className = 'table';
    tableEl.innerHTML = '<thead class="table__head"><tr><th>First Name</th><th>Last Name</th></tr></thead><tbody class="table__body body"><tr><td class="body__item">James</td><td class="body__item">Maxwell</td></tr><tr><td class="body__item">James</td><td class="body__item">Maxwell</td></tr></tbody>';
    tableEl.addEventListener('click', clickHandler);

    return tableEl;
})();
