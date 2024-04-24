import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const modelPath = 'models/library/scene.gltf';

const BuildingMap = () => {
    const mount = useRef(null);

    useEffect(() => {
        const width = mount.current.clientWidth;
        const height = mount.current.clientHeight;

        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(width, height);
        mount.current.appendChild(renderer.domElement);

        // Scene
        const scene = new THREE.Scene();

        // Camera
        const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 1000);
        camera.position.set(10, 30, 30); // Adjust camera position to properly frame the model

        // OrbitControls allow the camera to orbit around a target.
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.target.set(0, 0, 0); // Look at the origin

        // Lighting
        const ambientLight = new THREE.AmbientLight(0x404040);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(0, 5, 10);
        scene.add(directionalLight);

        // GLTF Loader
        const loader = new GLTFLoader();
        loader.load(modelPath, (gltf) => {
            scene.add(gltf.scene);
            const box = new THREE.Box3().setFromObject(gltf.scene);
            const center = box.getCenter(new THREE.Vector3());
            controls.target.copy(center); // Update controls target to center the model
            camera.lookAt(center); // Ensure the camera looks at the center of the model
        });

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);
            controls.update(); // Only required if controls.enableDamping = true, or if controls.autoRotate = true
            renderer.render(scene, camera);
        };

        animate();

        // Handle window resizing
        const handleResize = () => {
            const newWidth = mount.current.clientWidth;
            const newHeight = mount.current.clientHeight;
            renderer.setSize(newWidth, newHeight);
            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();
            controls.update();
        };

        // Listen for window resize events
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            if (mount.current.contains(renderer.domElement)) {
                mount.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    return <div ref={mount} style={{ width: '100%', height: '100vh' }} />;
};

export default BuildingMap;
