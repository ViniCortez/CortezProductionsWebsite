# Physics Hit Sound 

Welcome to the **Physics Hit Sound** documentation! 

This plugin provides a lightweight, highly-customizable actor component (`UCollisionSoundComponent`) that automatically generates realistic collision, sliding, rolling, and rattling sounds for any physically simulated Static Mesh in Unreal Engine 5.

## Features

- **Impact Sounds:** Plays sounds on impact, scaling volume and pitch based on impact force.
- **Sliding & Rolling:** Automatically detects if an object is sliding or rolling and plays looping sounds seamlessly.
- **Rattling & Shaking:** Computes acceleration and jerk (sudden changes in speed) to play "shake" or "rattle" sounds when an object is unstable or dragged quickly.
- **Material Support:** Integrates seamlessly with Unreal Engine's `PhysicalMaterial` system via a custom Data Asset (`UPhysicalMaterialSoundData`). Different surfaces can play entirely different impacts, slides, and roll loops!

## Installation
1. Purchase and download the plugin from the Epic Games FAB Store.
2. Ensure the plugin is enabled in your Unreal Engine project by navigating to **Edit > Plugins**.
3. You can find example sounds and configurations in the `PhysicsHitSound Content` folder.

Please see the sidebar for detailed implementation guides for both **Blueprints** and **C++**.
