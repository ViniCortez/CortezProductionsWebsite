# FAB Store Description

*Copy and paste the below text into your Epic Games FAB Store product page.*

---

**Physics Hit Sound** is a plug-and-play, highly-customizable audio component for Unreal Engine 5 that brings your physically simulated objects to life. Whether you're throwing a heavy metal barrel, dragging a wooden crate across the floor, or dropping a bunch of loose debris, this plugin calculates impact force, sliding velocity, rolling angular momentum, and even jerk/acceleration to generate incredibly realistic, dynamic audio.

## 🔊 Dynamic Audio Generation
No more repetitive, generic "bonk" sounds every time an object touches a wall. The system scales the volume, pitch, and frequency of your audio assets based on real-time physics calculations:
- **Impacts:** Hard hits sound heavy, light taps sound subtle.
- **Sliding & Rolling:** Smoothly fades in looping audio as an object drags across a surface, modulating pitch based on speed.
- **Rattle & Shake:** Perfect for unstable objects; calculates jerk and sudden acceleration to play "rattling" noises.

## 🧱 Physical Material Support
Fully integrated with Unreal Engine's `PhysicalMaterial` system. Use the included `PhysicalMaterialSoundData` Data Asset to define completely different impacts, slides, and rolls depending on the surface the object hits (e.g., metal hitting concrete vs. metal hitting mud).

## 🚀 Easy to Use
Zero coding required for designers. Simply add the `Collision Sound Component` to any Actor containing a physics-simulating Static Mesh, assign your sounds, and you're done! 

## Features:
* Actor Component that automatically attaches to your physics mesh.
* Intelligent anti-spam: Filters out micro-collisions and "sliding chatter" to prevent sound overload.
* Teleport detection: Prevents audio explosions if the object is moved suddenly via code or replication.
* Extensive tunable parameters (Thresholds, Cooldowns, Concurrency support).
* Full C++ source code included.
* 100% Blueprint Compatible.
* Includes example content folder with base template sounds.

**Documentation:** [https://cortezproductions.com/docs/physicshitsound](https://cortezproductions.com/docs/physicshitsound)  
**Supported Platforms:** Win64, Mac, Linux, Android, iOS  
