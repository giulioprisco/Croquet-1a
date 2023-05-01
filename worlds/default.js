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
		  	translation: [-5, -1.65, -5],
			scale: [1.5, 1.5, 1.5],
			rotation: [0, 0, 0],
			layers: ["pointer", "walk"],
			name: "/tesla-cybertruck.glb",
			dataLocation: "./assets/3D/tesla-cybertruck.glb",
			fileName: "/tesla-cybertruck.glb",
			modelType: "glb",
			shadow: false,
			singleSided: true,    type: "3d",
            }
	},

	{
            card: {
		  	translation: [14, -1.65, -32],
			scale: [1.5, 1.5, 1.5],
			rotation: [0, Math.PI / 4, 0],
			layers: ["pointer", "walk"],
			name: "/tesla-cybertruck.glb",
			dataLocation: "./assets/3D/tesla-cybertruck.glb",
			fileName: "/tesla-cybertruck.glb",
			modelType: "glb",
			shadow: false,
			singleSided: true,    type: "3d",
            }

        },

{
            card: {
		translation: [20, -4.5, -20],
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
		translation: [18, -1.8, -21],
		scale: [5, 5, 5],
		rotation: [0, 0, 0],
		layers: ["pointer", "walk"],
		name: "/radio_tower.glb",
		dataLocation: "./assets/3D/radio_tower.glb",
		dataScale: [0.003, 0.003, 0.003],
		fileName: "/radio_tower.glb",
		modelType: "glb",
		shadow: false,
		singleSided: true,
		type: "3d",
                
            }
        },

{
            card: {
		translation: [18, -1.8, -38],
		scale: [5, 5, 5],
		rotation: [0, 0, 0],
		layers: ["pointer", "walk"],
		name: "/radio_tower.glb",
		dataLocation: "./assets/3D/radio_tower.glb",
		dataScale: [0.003, 0.003, 0.003],
		fileName: "/radio_tower.glb",
		modelType: "glb",
		shadow: false,
		singleSided: true,
		type: "3d",
                
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
		translation: [19.5, -0.4, -30],
		rotation: [0, Math.PI / 2, 0],
                layers: ["pointer", "portal"],
                className: "PortalActor",
                color: 16737996,
                cornerRadius: 0.05,
                depth: 0.05,
                frameColor: 8947848,
                height: 6,
                portalURL: "?world=whitebox",
                type: "2d",
                width: 4,
            }
            },

    ];
}
