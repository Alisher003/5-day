"use strict"

const elSearch = document.querySelector('.search')
const elBtn = document.querySelector('.btn')
const elInput = document.querySelector('.input')

elBtn.addEventListener('click', () => {
    elSearch.classList.toggle('active')
    elInput.focus()
})