// tutorial1.js/Users/mac/croquet-1/worlds/tutorial1.js
// Copyright 2022 by Croquet Corporation, Inc. All Rights Reserved.
// https://croquet.io
// info@croquet.io

export function init(Constants) {
    Constants.AvatarNames = [
        "newwhite", "madhatter", "marchhare", "queenofhearts", "cheshirecat", "alice"
    ];

    Constants.UserBehaviorDirectory = "behaviors/tutorial";
    Constants.UserBehaviorModules = [
        "lights.js", "gridFloor.js", "joeTheBox.js"
    ];

    const frameColor = 0x888888;

    Constants.DefaultCards = [
        
	{
            card: {
                name:"world model",
                layers: ["walk"],
                type: "3d",
                singleSided: true,
                shadow: true,
                translation:[0, -1.7, 0],
                placeholder: true,
                placeholderSize: [400, 0.1, 400],
                placeholderColor: 0x808080,
                placeholderOffset: [0, 0, 0],
            }
        },

	{
            card: {
		translation: [-10, -4.5, 4],
		rotation: [0, 0, 0, 0],
		scale: [1, 1, 1],
		layers: ["pointer", "walk"],
		name: "/hollow_cube.glb",
		dataLocation: "./assets/3D/hollow_cube.glb",
		fileName: "/hollow_cube.glb",
		modelType: "glb",
		shadow: false,
		singleSided: true,
		type: "3d",
                
            }
        },

{
            card: {
		  	translation: [-6, 1, -3],
			scale: [1, 1, 1],
			dataScale: [5, 5, 5],
			rotation: [0, 0, 0],
			layers: ["pointer", "walk"],
			name: "/spacexdragon2.glb",
			dataLocation: "./assets/3D/spacexdragon2.glb",
			fileName: "/spacexdragon2.glb",
			modelType: "glb",
			shadow: false,
			singleSided: true,    type: "3d",
            }

        },

        {
            card: {
                name: "light",
                layers: ["light"],
                type: "lighting",
                behaviorModules: ["Light"],
                dataLocation: "./assets/sky/bluesky.jpg",
                fileName: "/bluesky.jpg",
                dataType: "jpg",
            }
        },

{
            card: {
                name: "image card",
                translation: [-5, 1, -15],
                rotation: [0, 0, 0],
                scale: [4, 4, 4],
                type: "2d",
                textureType: "image",
                textureLocation: "./assets/images/starship-ocean.jpg",
                fullBright: true,
                frameColor: 0xcccccc,
                color: 0xbbbbbb,
                cornerRadius: 0.05,
                depth: 0.05,
                shadow: true,
            }
        },

{
            card: {
                name: "image card",
                translation: [0, 1, -15],
                rotation: [0, 0, 0],
                scale: [4, 4, 4],
                type: "2d",
                textureType: "image",
                textureLocation: "./assets/images/me-to-the-moon.jpg",
                fullBright: true,
                frameColor: 0xcccccc,
                color: 0xbbbbbb,
                cornerRadius: 0.05,
                depth: 0.05,
                shadow: true,
            }
        },

	{
            card: {
                name: "image card",
                translation: [5, 1, -15],
                rotation: [0, 0, 0],
                scale: [4, 4, 4],
                type: "2d",
                textureType: "image",
                textureLocation: "./assets/images/conquerors-of-space.jpg",
                fullBright: true,
                frameColor: 0xcccccc,
                color: 0xbbbbbb,
                cornerRadius: 0.05,
                depth: 0.05,
                shadow: true,
            }
        },

	{
            card: {
                name: "image card",
                translation: [-9, 1, -3],
                rotation: [0, Math.PI / 2, 0],
                scale: [4, 4, 4],
                type: "2d",
                textureType: "image",
                textureLocation: "./assets/images/marsrise-andrew-mccarthy.jpg",
                fullBright: true,
                frameColor: 0xcccccc,
                color: 0xbbbbbb,
                cornerRadius: 0.05,
                depth: 0.05,
                shadow: true,
            }
        },

	{
            card: {
                translation: [0, -0.4, 2.5],
                rotation: [0, 0, 0],
                layers: ["pointer", "portal"],
                className: "PortalActor",
                color: 16737996,
                cornerRadius: 0.05,
                depth: 0.05,
                frameColor: 8947848,
                height: 6,
                portalURL: "?world=default",
                type: "2d",
                width: 4,
            }
            },

    ];
}
