import { useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useReducedMotion } from 'framer-motion'
import * as THREE from 'three'
import { useMediaQuery } from '../../hooks/useMediaQuery'

function createVGeometry() {
  const shape = new THREE.Shape()
  shape.moveTo(-1.05, 1.16)
  shape.lineTo(-0.52, 1.16)
  shape.lineTo(0, -0.06)
  shape.lineTo(0.52, 1.16)
  shape.lineTo(1.05, 1.16)
  shape.lineTo(0.21, -1.2)
  shape.lineTo(-0.21, -1.2)
  shape.closePath()

  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: 0.26,
    steps: 1,
    bevelEnabled: true,
    bevelThickness: 0.04,
    bevelSize: 0.035,
    bevelSegments: 2,
  })
  geometry.center()
  return geometry
}

function GoldV({ reduce }) {
  const group = useRef(null)
  const geometry = useMemo(createVGeometry, [])

  useFrame((state) => {
    if (!group.current || reduce) return
    const t = state.clock.elapsedTime
    group.current.rotation.y = 0.3 + Math.sin(t * 0.25) * 0.55 + state.pointer.x * 0.2
    group.current.rotation.x = Math.sin(t * 0.18) * 0.07 - state.pointer.y * 0.12
    group.current.position.y = Math.sin(t * 0.5) * 0.08
  })

  return (
    <group ref={group} scale={1.45}>
      <mesh geometry={geometry} castShadow>
        <meshStandardMaterial
          color="#c9a96a"
          metalness={0.72}
          roughness={0.24}
          emissive="#2a1e0c"
          emissiveIntensity={0.32}
        />
      </mesh>
      <mesh geometry={geometry} scale={1.09} position={[0, 0, -0.05]}>
        <meshBasicMaterial color="#e7d3a8" transparent opacity={0.08} wireframe />
      </mesh>
    </group>
  )
}

function OrbitRing({ radius = 2.6, opacity = 0.25, rotation = [0.25, 0.2, 0], speed = 0.06 }) {
  const ref = useRef(null)
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.z += delta * speed
  })

  return (
    <mesh ref={ref} rotation={rotation} scale={[1.45, 1, 1]}>
      <torusGeometry args={[radius, 0.0045, 6, 180]} />
      <meshBasicMaterial color="#e7d3a8" transparent opacity={opacity} depthWrite={false} />
    </mesh>
  )
}

function Dust({ count = 55, reduce }) {
  const ref = useRef(null)
  const positions = useMemo(() => {
    const array = new Float32Array(count * 3)
    for (let i = 0; i < count; i += 1) {
      const radius = 2.1 + Math.random() * 2.6
      const theta = Math.random() * Math.PI * 2
      array[i * 3] = Math.cos(theta) * radius
      array[i * 3 + 1] = (Math.random() - 0.5) * 5
      array[i * 3 + 2] = Math.sin(theta) * radius * 0.6
    }
    return array
  }, [count])

  useFrame((state) => {
    if (!ref.current || reduce) return
    ref.current.rotation.y = state.clock.elapsedTime * 0.028
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.08
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        color="#e7d3a8"
        size={0.035}
        sizeAttenuation
        transparent
        opacity={0.75}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

export default function HeroScene() {
  const reduce = useReducedMotion()
  const isMobile = useMediaQuery('(max-width: 767px)')
  const wrapRef = useRef(null)
  const [active, setActive] = useState(true)

  useEffect(() => {
    const node = wrapRef.current
    if (!node) return undefined
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { rootMargin: '100px' }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={wrapRef} className="h-full w-full" aria-hidden="true">
      <Canvas
        dpr={[1, isMobile ? 1.25 : 1.7]}
        camera={{ position: [0, 0, 6.2], fov: 38 }}
        frameloop={active ? 'always' : 'never'}
        gl={{ alpha: true, antialias: !isMobile, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 5, 6]} intensity={2.6} color="#fff4df" />
        <pointLight position={[-4, -2, 4]} intensity={26} distance={12} color="#c9a96a" />
        <pointLight position={[4, 0, 3]} intensity={16} distance={10} color="#f7f2e8" />

        <group position={[0.2, 0.15, 0]}>
          <GoldV reduce={reduce} />
          <OrbitRing radius={2.45} opacity={0.28} rotation={[0.35, 0.3, 0]} />
          <OrbitRing radius={2.95} opacity={0.14} rotation={[-0.2, 0.6, 0.4]} speed={-0.04} />
          <Dust count={isMobile ? 28 : 60} reduce={reduce} />
        </group>
      </Canvas>
    </div>
  )
}
