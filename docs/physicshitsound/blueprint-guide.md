# Blueprint Integration Guide

Integrating the **Physics Hit Sound** system via Blueprints is incredibly fast.

## 1. Add the Component
1. Open the Blueprint of the physically simulated Actor you want to have sound (e.g., a prop, a physics crate, etc.).
2. In the **Components** panel, click **+ Add** and search for **Collision Sound**.
3. Make sure your Actor has a `StaticMeshComponent` with **Simulate Physics** set to `true`, and **Simulation Generates Hit Events** checked.

## 2. Configuration Settings

Select the **CollisionSoundComponent** to expose its properties in the Details panel.

### Basic Setup
- **Mesh Component Name:** If you have multiple meshes, type the exact name of the mesh component you want to track. If left blank, it automatically finds the first `StaticMeshComponent`.
- **Sound Data:** Create or assign a `PhysicalMaterialSoundData` Data Asset. This asset allows you to map Physical Materials to specific Impact, Slide, and Roll sounds.
- **Fallback Sounds:** You can assign a generic **Hit Sound**, **Slide Sound**, **Slow Shake Sound**, and **Fast Shake Sound** directly on the component. These are used if no Physical Material overrides them.

### Tunables
The system provides a vast array of tunables to perfectly match the mass and feel of your object:
- **Hit Impulse Threshold:** Minimum impact force required to play a hit sound. Increase this if the object is too noisy.
- **Hit Volume Multiplier:** Global multiplier for all hit sounds.
- **Slide Speed Threshold:** How fast the object must move across a surface to be considered "sliding".
- **Shake Configuration:** Set thresholds for **Acceleration Shake** (sudden stops/starts) and **Rotation Shake** (tumbling).

## 3. Data Assets (UPhysicalMaterialSoundData)
To support different surfaces (e.g., Wood, Metal, Dirt):
1. Right-click in the Content Browser -> **Miscellaneous** -> **Data Asset**.
2. Select **PhysicalMaterialSoundData**.
3. Open it and add entries to the **Surface Sounds** map. Select a Physical Material, and assign the corresponding Impact, Slide, and Roll sounds.
4. Assign this Data Asset to your **CollisionSoundComponent**.

## 4. Disabling at Runtime
You can temporarily silence an object by calling `SetSoundsEnabled(false)` on the component. Calling `SetSoundsEnabled(true)` will re-enable all sound logic.
