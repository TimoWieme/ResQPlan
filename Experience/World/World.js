import * as THREE from 'three'
import Experience from "../Experience.js"

import { EventEmitter } from 'events'

import Environment from './Environment.js'
import ResQplan from './ResQplan.js'
import Interests from './Interests.js'
// import Controls from '../Controls.js'


export default class World extends EventEmitter {
  constructor() {
    super()
    this.experience = new Experience()
    this.sizes = this.experience.sizes
    this.scene = this.experience.scene
    this.canvas = this.experience.canvas
    this.camera = this.experience.camera
    this.resources = this.experience.resources

    this.resources.on('ready', () => {
      this.environment = new Environment()
      this.ResQplan = new ResQplan()
      this.interests = new Interests()
      // this.controls = new Controls()
      this.emit('worldready')
    })
  }

  resize() { }

  update() {
    if (this.ResQplan) {
      this.ResQplan.update()
    }

    if (this.controls) {
      this.controls.update()
    }

    if (this.interests) {
      this.interests.update()
    }
  }
}
