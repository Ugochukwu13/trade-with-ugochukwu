const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = ' <img src="https://www.mbusa.com/content/dam/mb-nafta/us/myco/my24/g-class/class-page/series/2024-G-SUV-HERO-DR.jpg" alt="">'
    title.innerHTML = 'G-Class'
    excerpt.innerHTML = ' A lifetime of experience. For the experience of a lifetime'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/1.jpg" alt="">'
    name.innerHTML = 'Chuks Daniel'
    date.innerHTML = 'May 31 2024'

    animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
    animated_bg_texts.forEach(bg => bg.classList.remove('animated-by-text'))
}