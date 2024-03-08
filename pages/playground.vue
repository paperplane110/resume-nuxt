<template>
  <div>
    <br />
    <Text hero>Oops! you find a secret place</Text>
    <Text>
      Welcome to my playground, here, I build new components' prototypes.
    </Text>
    <Text>
      So everything might seem very simple or crude.
    </Text>
    <Text h2 code>SandBox</Text>
    <SandBox />

    <Text h2 code>Threejs</Text>
    <div ref="webgl" />

  </div>
</template>

<script setup lang="ts">
import * as THREE from "three"
const webgl = ref()

onMounted(() => {
  // scene and object
  const scene = new THREE.Scene()
  const geometry = new THREE.BoxGeometry(100, 60, 20)
  const material = new THREE.MeshBasicMaterial({
    color: 0xff0000,//0xff0000设置材质颜色为红色
    transparent: true,
    opacity: 0.5
  })
  const mesh = new THREE.Mesh(geometry, material)
  mesh.position.set(50, 0, 0)
  scene.add(mesh)

  // AxesHelper：辅助观察的坐标系
  const axesHelper = new THREE.AxesHelper(150);
  scene.add(axesHelper);

  // camera
  // 定义相机输出画布的尺寸(单位:像素px)
  const width = 800; //宽度
  const height = 500; //高度
  const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000)
  // 相机在Three.js三维坐标系中的位置
  // 根据需要设置相机位置具体值
  camera.position.set(200, 200, 200)
  camera.lookAt(mesh.position)


  // 创建渲染器对象
  const renderer = new THREE.WebGLRenderer()
  renderer.setSize(width, height)
  renderer.render(scene, camera)

  webgl.value.appendChild(renderer.domElement)
})
</script>
