# C++ Integration Guide

If you're building systems entirely in C++, you can easily attach and configure the `UCollisionSoundComponent` to your native actors.

## 1. Setup Build.cs
Ensure that `PhysicsHitSound` is included in your project's `Build.cs` file:

```csharp
PublicDependencyModuleNames.AddRange(new string[] { "Core", "CoreUObject", "Engine", "InputCore", "PhysicsHitSound" });
```

## 2. Adding the Component to an Actor
In your Actor's header file (`.h`):

```cpp
#pragma once

#include "CoreMinimal.h"
#include "GameFramework/Actor.h"
#include "CollisionSoundComponent.h" // Include the component
#include "MyPhysicsActor.generated.h"

UCLASS()
class MYGAME_API AMyPhysicsActor : public AActor
{
	GENERATED_BODY()
	
public:	
	AMyPhysicsActor();

protected:
	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category="Components")
	UStaticMeshComponent* MeshComponent;

	UPROPERTY(VisibleAnywhere, BlueprintReadOnly, Category="Audio")
	UCollisionSoundComponent* CollisionSoundComp;
};
```

In your Actor's implementation file (`.cpp`):

```cpp
#include "MyPhysicsActor.h"

AMyPhysicsActor::AMyPhysicsActor()
{
	// Create the Mesh
	MeshComponent = CreateDefaultSubobject<UStaticMeshComponent>(TEXT("MeshComponent"));
	RootComponent = MeshComponent;
	MeshComponent->SetSimulatePhysics(true);
	MeshComponent->SetNotifyRigidBodyCollision(true); // Required for Hit Events!

	// Create the Collision Sound Component
	CollisionSoundComp = CreateDefaultSubobject<UCollisionSoundComponent>(TEXT("CollisionSoundComp"));
	
	// Optional: Configure default thresholds via code
	CollisionSoundComp->HitImpulseThreshold = 10.0f;
	CollisionSoundComp->SlideSpeedThreshold = 50.0f;
}
```

## 3. Assigning Data Assets via Code
If you want to assign a `PhysicalMaterialSoundData` asset natively via Constructor Helpers:

```cpp
static ConstructorHelpers::FObjectFinder<UPhysicalMaterialSoundData> SoundDataObj(TEXT("/Game/Audio/Data/DA_WoodSounds.DA_WoodSounds"));
if (SoundDataObj.Succeeded())
{
    CollisionSoundComp->SoundData = SoundDataObj.Object;
}
```

*(Note: It is generally recommended to expose `SoundData` to Blueprint and assign it in the editor instead of hardcoding paths).*
