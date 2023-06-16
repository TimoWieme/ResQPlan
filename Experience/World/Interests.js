import * as THREE from 'three'
import Experience from '../Experience.js'
import { EventEmitter } from 'events'
import gsap from 'gsap'

export default class Interests {
  constructor() {
    this.experience = new Experience()
    this.sizes = this.experience.sizes
    this.scene = this.experience.scene
    this.resources = this.experience.resources
    this.camera = this.experience.camera
    this.debug = this.experience.debug
    this.device = this.sizes.device
    this.scrolling = this.experience.scrolling

    this.sizes.on('switchdevice', (device) => {
      this.device = device
      console.log(device);
    })

    // Debug
    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder('interest1')
    }

    this.obj = {
      x: 4,
      y: 1.2,
      z: 0.5
    }

    // Setup
    this.points = []
    this.raycaster = new THREE.Raycaster()
    this.setInterests()
  }

  setInterests() {
    this.points = [
      {
        position: new THREE.Vector3(-8, 11, -8),
        element: document.querySelector('.kamer1')
      },
      {
        position: new THREE.Vector3(-5, 1.2, -9),
        element: document.querySelector('.kamer2')
      },
      {
        position: new THREE.Vector3(-3.75, 1.2, 10),
        element: document.querySelector('.kamer3')
      },
      {
        position: new THREE.Vector3(-6, 26, 5.5),
        element: document.querySelector('.kamer4')
      },
      {
        position: new THREE.Vector3(6, 26, -4),
        element: document.querySelector('.kamer5')
      },
      {
        position: new THREE.Vector3(-6, 16, -6),
        element: document.querySelector('.kamer6')
      },
    ]

    // Debug
    if (this.debug.active) {
      this.debugFolder
        .add(this.points[2].position, 'x')
        .name('x2')
        .min(-10)
        .max(10)
        .step(0.01)

      this.debugFolder
        .add(this.points[2].position, 'y')
        .name('y2')
        .min(-10)
        .max(10)
        .step(0.01)

      this.debugFolder
        .add(this.points[2].position, 'z')
        .name('z2')
        .min(-10)
        .max(10)
        .step(0.01)

      this.debugFolder
        .add(this.points[1].position, 'x')
        .name('x1')
        .min(-10)
        .max(10)
        .step(0.01)

      this.debugFolder
        .add(this.points[1].position, 'y')
        .name('y1')
        .min(-10)
        .max(10)
        .step(0.01)
    }
  }

  showInfos() {
    const kamer1 = document.querySelector('.kamer1')
    const kamer2 = document.querySelector('.kamer2')
    const kamer3 = document.querySelector('.kamer3')
    const kamer4 = document.querySelector('.kamer4')
    const kamer5 = document.querySelector('.kamer5')
    const kamer6 = document.querySelector('.kamer6')

    if (this.device === 'desktop') {
      infoPanelRightStyle = '-33%'
    } else {
      infoPanelRightStyle = '-100%'
    }

  }

  resize() { }

  update() {
    for (const point of this.points) {
      const screenPosition = point.position.clone()
      screenPosition.project(this.camera.orthographicCamera)

      point.element.classList.add('visible')

      const translateX = screenPosition.x * this.sizes.width * 0.5
      const translateY = - screenPosition.y * this.sizes.height * 0.5
      point.element.style.transform = `translateX(${translateX}px) translateY(${translateY}px)`
    }
  }
}
