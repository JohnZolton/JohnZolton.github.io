document.addEventListener('DOMContentLoaded', function () {
    let vars = document.querySelectorAll('.tile')
    vars.forEach(tile => tile.addEventListener('click', () => {loadcontent(tile.id)}))

    let return_btns = document.querySelectorAll('.return')
    return_btns.forEach(btn => btn.addEventListener('click', () => show_index()))

})

function loadcontent(id) {
    document.querySelector(`#display-${id}`).style.display = 'block';
    document.querySelector('#display').style.display = 'none';
    document.querySelector('.topgrid').style.display ='none';
}

function show_index() {
    document.querySelectorAll('.project').forEach(proj => proj.style.display = 'none');
    document.querySelector('#display').style.display = 'flex';
    document.querySelector('.topgrid').style.display ='flex';
}