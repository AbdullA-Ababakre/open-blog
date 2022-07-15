

The basic requrements of placing model in web 

- scene

to contain the world or model

- camera

view it


- light

illuminate it

- mesh

 at least one viewable object as a model. All models, whether just a box or a complex character, are made from a mesh of triangles or facets.


#### BabylonJs engine

A class which is responsible to interact with lower level APIs such as WEBGL , audio , etc.

````
const createScene = () => {
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas, true);

    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0));

    const box = BABYLON.MeshBuilder.CreateBox("box", {});

    return scene;
}
````

