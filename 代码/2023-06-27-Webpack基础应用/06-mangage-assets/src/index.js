import helloWorld from './hello-world'
import imgsrc from './assets/img-1.png'
import logoSvg from './assets/webpack-logo.svg'
import exampleTxt from './assets/example.txt'
import jpgMap from './assets/qianfeng-sem.jpg'

import './style.css'
import './style.less'

helloWorld()

const img = document.createElement('img')
img.src = imgsrc
document.body.appendChild(img)

const img2 = document.createElement('img')
img2.style.cssText = 'width: 600px; height: 200px'
img2.src = logoSvg
document.body.appendChild(img2)

const block = document.createElement('div')
block.style.cssText = 'width: 200px; height: 200px; background: aliceblue'
block.classList.add('block-bg')
block.textContent = exampleTxt
document.body.appendChild(block)

const img3 = document.createElement('img')
img3.style.cssText = 'width: 600px; height: 240px; display: block'
img3.src = jpgMap
document.body.appendChild(img3)


document.body.classList.add('hello')
