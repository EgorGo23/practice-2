;var table = (function table() {
    return function(elementToInsert, modalWindow) {
        if (typeof elementToInsert === 'undefined') {
            return console.error('Необходим элемент, для вставки таблицы');
        }
        
        if (typeof modalWindow === 'undefined') {
            return console.error('Необходим элемент для модального окна');
        }
    
        var openModal = function openModal(e) {
            e.stopPropagation();
    
            if (e.target.tagName !== 'TD') {
                return;
            }
    
            elementToInsert.append(modalWindow);
        };
    
        var closeModal = function closeModal(e) {
    
            if (!e.target.classList.contains('modal')) {
                modalWindow.remove();
            }
        }
    
        elementToInsert.addEventListener('click', closeModal);
        
        var tableEl = document.createElement('table');
        tableEl.className = 'table';
        tableEl.innerHTML = '<thead class="table__head"><tr><th>First Name</th><th>Last Name</th></tr></thead><tbody class="table__body body"><tr><td class="body__item">James</td><td class="body__item">Maxwell</td></tr><tr><td class="body__item">James</td><td class="body__item">Maxwell</td></tr></tbody>';
        tableEl.addEventListener('click', openModal);
        
        return tableEl;
    } 
})();

