const parent = document.querySelector('#container');
for (let i = 0; i < 11; i++) {
    for (let j = 0; j < 10; j++) {
        const block = document.createElement('div');
        block.classList.add('gridElement');
        parent.appendChild(block);
    }
}
const gridElements = document.querySelectorAll('.gridElement');
const colors = ['#00A0C7', '#5B5FCC', '#ED482C', '#17D2D5', '#02094F', '#84CF21', '#2921FD', '#FF8364', '#3C984F', '#0CADCA'];
let selectedColor = '';
gridElements.forEach((gridElement, index) => {
    if (index >= 100) {
        gridElement.style.backgroundColor = colors[index - 100];
        gridElement.addEventListener('click', (item) => {
            selectedColor = item.target.style.backgroundColor;
        })
    }
});
gridElements.forEach((gridElement, index) => {
    if (index <= 99) {
        gridElement.setAttribute('draggable', true);
        gridElement.addEventListener('click', (item) => {
            item.target.style.backgroundColor = selectedColor;
        });
        gridElement.addEventListener('dragover', (item) => {
            console.log('drag over me', index)
            item.target.style.backgroundColor = selectedColor;
        });
    }
})