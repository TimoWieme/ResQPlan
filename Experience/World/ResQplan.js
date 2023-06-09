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
    const textureBuildings = this.resources.items.textureBuildings
    textureBuildings.flipY = false
    textureBuildings.encoding = THREE.SRGBColorSpace
    const materialBuildings = new THREE.MeshBasicMaterial({ map: textureBuildings })

    const textureTerrain = this.resources.items.textureTerrain
    textureTerrain.flipY = false
    textureTerrain.encoding = THREE.SRGBColorSpace
    const materialTerrain = new THREE.MeshBasicMaterial({ map: textureTerrain })

    const lightPanelTexture = new THREE.MeshBasicMaterial({ color: 0xffffe5 })

    this.actualResQplan.traverse((child) => {
      if (child.name.match(/^mdba.*$/)) {
        child.material = materialMdba
      }

      if (child.name.match(/^mudac.*$/)) {
        child.material = materialMudacDetails
      }

      if (child.name.match(/^terrain.*$/)) {
        child.material = materialTerrain
      }

      if (child.name.match(/^buildings.*$/)) {
        child.material = materialBuildings
      }

      if (child.name.match(/^lightPanel.*$/)) {
        child.material = lightPanelTexture
      }
    })

    this.scene.add(this.actualResQplan)
  }

  resize() { }

  update() {
  }
}
