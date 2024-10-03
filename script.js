// const toggleButton = document.getElementById('toggle');
// const contentDiv = document.getElementById('content');

// if (toggleButton && contentDiv) {
//     toggleButton.addEventListener('click', () => {
//         contentDiv.classList.toggle('toggle');
//     });
// }

const toggleButton=document.getElementById('toggle');
const contentDiv=document.getElementById('content');
if(toggleButton && contentDiv){
    toggleButton.addEventListener('click',()=>{
        contentDiv.classList.toggle('toggle')
    })
}