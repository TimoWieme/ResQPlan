import * as THREE from 'three'
import Experience from '../Experience.js'

export default class Bike {
  constructor() {
    this.experience = new Experience()
    this.scene = this.experience.scene
    this.resources = this.experience.resources
    this.debug = this.experience.debug
    this.ResQplan = this.resources.items.ResQplan
    this.actualResQplan = this.ResQplan.scene
    this.ResQplanChildren = {}

    this.lerp = {
      current: 0,
      target: 0,
      ease: 0.1
    }

    // Debug
    if (this.debug.active) {
      this.debugFolder = this.debug.ui.addFolder('ResQplan')
      this.obj = {
        colorObj: { r: 0, g: 0, b: 0 }
      }
    }

    this.setResQplanModel()
  }

  setResQplanModel() {
    const F1 = this.resources.items.F1
    F1.flipY = false
    F1.encoding = THREE.SRGBColorSpace
    const materialF1 = new THREE.MeshBasicMaterial({ map: F1 })

    const F2 = this.resources.items.F2
    F2.flipY = false
    F2.encoding = THREE.SRGBColorSpace
    const materialF2 = new THREE.MeshBasicMaterial({ map: F2 })

    const F3 = this.resources.items.F3
    F3.flipY = false
    F3.encoding = THREE.SRGBColorSpace
    const materialF3 = new THREE.MeshBasicMaterial({ map: F3 })

    const F4 = this.resources.items.F4
    F4.flipY = false
    F4.encoding = THREE.SRGBColorSpace
    const materialF4 = new THREE.MeshBasicMaterial({ map: F4 })

    const F5 = this.resources.items.F5
    F5.flipY = false
    F5.encoding = THREE.SRGBColorSpace
    const materialF5 = new THREE.MeshBasicMaterial({ map: F5 })

    const F6 = this.resources.items.F6
    F6.flipY = false
    F6.encoding = THREE.SRGBColorSpace
    const materialF6 = new THREE.MeshBasicMaterial({ map: F6 })

    const F7 = this.resources.items.F7
    F7.flipY = false
    F7.encoding = THREE.SRGBColorSpace
    const materialF7 = new THREE.MeshBasicMaterial({ map: F7 })

    const F8 = this.resources.items.F8
    F8.flipY = false
    F8.encoding = THREE.SRGBColorSpace
    const materialF8 = new THREE.MeshBasicMaterial({ map: F8 })

    this.actualResQplan.traverse((child) => {
     if (child.name.match(/^F1.*$/)) {
        child.material = materialF1
      }

      if (child.name.match(/^F2.*$/)) {
        child.material = materialF2
      }

      if (child.name.match(/^F3.*$/)) {
        child.material = materialF3
      }

      if (child.name.match(/^F4.*$/)) {
        child.material = materialF4
      }

      if (child.name.match(/^F5.*$/)) {
        child.material = materialF5
      }

      if (child.name.match(/^F6.*$/)) {
        child.material = materialF6
      }

      if (child.name.match(/^F7.*$/)) {
        child.material = materialF7
      }

      if (child.name.match(/^F8.*$/)) {
        child.material = materialF8
      }
    })

    this.scene.add(this.actualResQplan)
  }

  resize() { }

  update() {
  }
}
