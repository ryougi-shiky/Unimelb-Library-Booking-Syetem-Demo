import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const BuildingMap = () => {
    const mount = useRef(null);
    const floors = useRef([]);
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const normalScale = new THREE.Vector3(1, 1, 1);
    const hoverScale = new THREE.Vector3(1.1, 1.1, 1.1); // Slightly larger when hovered

    useEffect(() => {
        const width = mount.current.clientWidth;
        const height = mount.current.clientHeight;

        // Renderer
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setClearColor("#ffffff"); // Set background color to white
        renderer.setSize(width, height);
        mount.current.appendChild(renderer.domElement);

        // Scene
        const scene = new THREE.Scene();

        // Camera
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.set(4, 5, 8); // Increase the x, y, z values to move the camera further away
        camera.lookAt(new THREE.Vector3(0, 0, 0)); // Ensure the camera still looks at the center of the scene


        // Floors
        const floorMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
        const floorGeometry = new THREE.BoxGeometry(4, 0.1, 4); // Create a thin box to represent the floor

        // Function to add floors
        const addFloor = (level, y) => {
            const floor = new THREE.Mesh(floorGeometry, floorMaterial);
            floor.position.y = y;
            floor.scale.copy(normalScale); // Set initial scale
            floors.current.push(floor); // Add the floor to the floors ref array
            scene.add(floor);
        };

        // Create floors as cubes
        for (let i = 0; i < 4; i++) {
            addFloor(i, i * 1.2); // Increase y by 1.2 for each level so they do not overlap
        }

        // Lighting
        const light = new THREE.PointLight(0xffffff, 1, 100);
        light.position.set(0, 5, 0);
        scene.add(light);

        const ambientLight = new THREE.AmbientLight(0x404040, 1); // soft white light
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(1, 1, 1);
        scene.add(directionalLight);

        // Mouse move event listener
        const onDocumentMouseMove = (event) => {
            event.preventDefault();

            mouse.x = (event.clientX / width) * 2 - 1;
            mouse.y = -(event.clientY / height) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);

            const intersects = raycaster.intersectObjects(floors.current);

            floors.current.forEach((floor) => {
                floor.scale.copy(normalScale); // Reset scale
                floor.material.color.set(0xdddddd); // Reset color
            });

            if (intersects.length > 0) {
                intersects[0].object.scale.copy(hoverScale); // Set hover scale
                intersects[0].object.material.color.set(0xffffff); // Set hover color
            }
        };

        // Add event listeners
        document.addEventListener('mousemove', onDocumentMouseMove);

        // Animation
        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        };

        animate();

        // Cleanup
        return () => {
            document.removeEventListener('mousemove', onDocumentMouseMove);
            mount.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mount} style={{ width: '100%', height: '100vh' }} />;
};

export default BuildingMap;
