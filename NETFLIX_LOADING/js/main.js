const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

//选tab content item
function selectItem(e){
    removeBorder();
    removeShow();
    //加边框
    this.classList.add('tab-border');
    //从DOM拿到item
    const tabContentItem = document.querySelector(`#${this.id}-content`)
    //加show class
    tabContentItem.classList.add('show');

}
function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow(){
    tabContentItems.forEach(item => item.classList.remove('show'));
}

//Listen for tab click
tabItems.forEach(item => item.addEventListener('click',selectItem));
