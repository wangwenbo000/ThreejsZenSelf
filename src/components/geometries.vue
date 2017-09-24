<template>
  <div ref="canvas"></div>
</template>
<script>
import * as THREE from '../lib/three.module'
export default {
  name: 'geometries',
  data () {
    return {
      textures: 'static/textures/UV_Grid_Sm.jpg'
    }
  },
  mounted () {
    this.init()
    this.animate()
  },
  methods: {
    init () {
      this.camera = new this.$THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000)
      this.camera.position.y = 400
      this.scene = new this.$THREE.Scene()
      this.scene.add(new this.$THREE.AmbientLight(0x404040))
      this.light = new this.$THREE.DirectionalLight(0xffffff)
      this.light.position.set(0, 1, 0)
      this.scene.add(this.light)

      this.map = new this.$THREE.TextureLoader().load(this.textures)
      this.map.wrapS = this.map.wrapT = THREE.RepeatWrapping
      this.map.anisotropy = 16
      this.material = new this.$THREE.MeshLambertMaterial({map: this.map, side: THREE.DoubleSide})
      // 模型1
      this.obj = new this.$THREE.Mesh(new this.$THREE.SphereGeometry(75, 20, 10), this.material)
      this.obj.position.set(-400, 0, 200)
      this.scene.add(this.obj)
      // 模型2
      this.obj = new THREE.Mesh(new THREE.IcosahedronGeometry(75, 1), this.material)
      this.obj.position.set(-200, 0, 200)
      this.scene.add(this.obj)

      this.renderer = new THREE.WebGLRenderer({antialias: true})
      this.renderer.setPixelRatio(window.devicePixelRatio)
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      this.$refs.canvas.appendChild(this.renderer.domElement)
      this.stats = new Stats()
      this.$refs.canvas.appendChild(this.stats.dom)

      window.addEventListener('resize', this.onWindowResize, false)
    },
    onWindowResize () {
      this.camera.aspect = window.innerWidth / window.innerHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(window.innerWidth, window.innerHeight)
    },
    render () {
      const timer = Date.now() * 0.0001
      this.camera.position.x = Math.cos(timer) * 800
      this.camera.position.y = Math.sin(timer) * 800

      this.camera.lookAt(this.scene.position)
      for (var i = 0, l = this.scene.children.length; i < l; i++) {
        const obj = this.scene.children[i]
        obj.rotation.x = timer * 5
        obj.rotation.y = timer * 2.5
      }
      this.renderer.render(this.scene, this.camera)
    },
    animate () {
      requestAnimationFrame(this.animate)
      this.render()
      this.stats.update()
    }
  }
}
</script>
<style lang="css" scoped>

</style>
