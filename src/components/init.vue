<template>
  <div ref="canvas"></div>
</template>
<script>
export default {
  name: 'geometries',
  mounted () {
    this.init()
    this.animate()
  },
  methods: {
    init () {
      this.scene = new this.$THREE.Scene()
      this.camera = new this.$THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

      this.renderer = new this.$THREE.WebGLRenderer()
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      this.$refs.canvas.appendChild(this.renderer.domElement)

      this.geometry = new this.$THREE.BoxGeometry(1, 1, 1)
      this.material = new this.$THREE.MeshBasicMaterial({color: 0x00ff00})
      this.cube = new this.$THREE.Mesh(this.geometry, this.material)
      this.cube.position.x = 0
      this.cube.position.y = 0
      this.cube.position.z = 0
      this.scene.add(this.cube)

      this.camera.position.z = 5
    },
    animate () {
      requestAnimationFrame(this.animate)
      this.cube.rotation.x += 0.1
      this.cube.rotation.y += 0.1
      this.renderer.render(this.scene, this.camera)
    }
  }
}
</script>
<style lang="css" scoped>

</style>
