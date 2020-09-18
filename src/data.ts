const data = {
    title: "Projects - Jérémie Piellard",
    description: "Portfolio of small OpenGL and WebGL projects",
    sections: [
        {
            "title": "Web",
            "cards": [
                {
                    "background": "images/projects/picasso-fourier.jpg",
                    "title": "Picasso - Fourier",
                    "body": [
                        "This project is at the intersection between art and mathematics. It uses the power of Fourier Transform to decompose the apparent simplicity of Picasso's single line drawings.",
                        "You can dynamically change the complexity of the sketches and visualize how Fourier manages to build a complex signal using only sines and cosines."
                    ],
                    "projectName": "picasso-fourier",
                    "githubLink": true,
                    "liveLink": true
                },
                {
                    "background": "images/projects/strange-attractors.jpg",
                    "title": "Strange Attractors",
                    "body": [
                        "This project is a performant 2D strange attractors plotter. It allows you to explore different types of attractors and play with various parameters.",
                        "Strange attractors are complex mathematical figures representing the path traced by a point iteratively moved following strict rules. Strange attractors often exhibit beautiful fractal patterns."
                    ],
                    "projectName": "strange-attractors-webgl",
                    "githubLink": true,
                    "liveLink": true
                },
                {
                    "background": "images/projects/chaos-game.png",
                    "title": "Chaos Game",
                    "body": [
                        "This project is an implementation of the Chaos Game, running on CPU and rendered with WebGL.",
						"A single point is moved and drawn millions of times on the canvas according to a few very simple rules, and from the randomness emerge beautiful fractals. Discover hundreds of gorgeous fractals by adjusting the parameters offered by the simulation. A few presets highlight the ones I found but there are many more to explore."
                    ],
                    "projectName": "chaos-game-webgl",
                    "githubLink": true,
                    "liveLink": true
                },
				{
                    "background": "images/projects/game-of-life.jpg",
                    "title": "Game of Life",
                    "body": [
                        "This project is a simple simulation of Conway's Game of Life, running on GPU.",
						"The rules can be changed to see how the world evolves."
                    ],
                    "projectName": "game-of-life-webgl",
                    "githubLink": true,
                    "liveLink": true
                },
                {
                    "background": "images/projects/panoramas.jpg",
                    "title": "Panoramas",
                    "body": [
                        "This small project is a simple tool for visualizing, editing and converting panoramas.",
                        "It supports skysphere, skybox and tiny planet formats, and can convert from one to another."
                    ],
                    "projectName": "panoramas-webgl",
                    "githubLink": true,
                    "liveLink": true
                },
                {
                    "background": "images/projects/pool.jpg",
                    "title": "Pool",
                    "body": [
                        "This project is a WebGL water simulation running entirely on your GPU.\nYou can interact with the water, and visualize it both in 2D and 3D.",
                        "The water surface is modeled as a grid of springs."
                    ],
                    "projectName": "pool-webgl",
                    "githubLink": true,
                    "liveLink": true
                },
                {
                    "background": "images/projects/navier-stokes.jpg",
                    "title": "Navier-Stokes",
                    "body": [
                        "This project is a WebGL incompressible fluid simulation running entirely on your GPU.\nYou can interact with the fluid with the left mouse button and visualize both the velocity and the pressure of the fluid.",
                        "This is an implementation of the Stable Fluid described by J. Stam."
                    ],
                    "projectName": "navier-stokes-webgl",
                    "githubLink": true,
                    "liveLink": true
                },
                {
                    "background": "images/projects/waterfall.jpg",
                    "title": "Waterfall",
                    "body": [
                        "'Waterfall' is a simple waterfall simulation, based on a particle system.\nThe particles bounce off obstacles, creating water streams and droplets.",
                        "The whole simulation runs on GPU."
                    ],
                    "projectName": "waterfall-webgl",
                    "githubLink": true,
                    "liveLink": true
                },
                {
                    "background": "images/projects/paint.jpg",
                    "title": "Paint",
                    "body": [
                        "'Paint' is a dynamic painting simulation.\nThe moving paint strokes highlight the geometry, and you can interact with them to shape the painting.",
                        "The whole simulation runs on GPU."
                    ],
                    "projectName": "paint-webgl",
                    "githubLink": true,
                    "liveLink": true
                },
                {
                    "background": "images/projects/ldap-filter-analyzer.png",
                    "title": "LDAP filter analyzer",
                    "body": [
                        "This project is a simple tool for easily visualizing large LDAP filters. Hovering parts of the analyzed result highlights where they were extracted from.",
                        "The input string is analyzed by a scannerless parser: it performs lexing and parsing at once. It uses a factory pattern for building nodes in memory as it scans the input."
                    ],
                    "projectName": "ldap-filter-analyzer",
                    "githubLink": true,
                    "liveLink": true
                }
            ]
        },
        {
            "title": "OpenGL / other",
            "cards": [
                {
                    "background": "images/projects/voxelizer.jpg",
                    "title": "Voxelizer",
                    "body": [
                        "'Voxelizer' is a project that efficiently turns any 3D mesh into a grid of voxels.\nThe voxels are stored as a compact bit array.",
                        "The whole processing runs fully on GPU."
                    ],
                    "projectName": "voxelizer-gpu",
                    "githubLink": true,
                    "liveLink": false
                },
                {
                    "background": "images/projects/parallax_256.jpg",
                    "title": "Parallax mapping",
                    "body": [
                        "'Parallax' is a simple demonstration of parallax mapping, with a comparison to other techniques such as normal mapping."
                    ],
                    "projectName": "parallax-mapping",
                    "githubLink": true,
                    "liveLink": false
                },
                {
                    "background": "images/projects/fractal.jpg",
                    "title": "Fractal navigator",
                    "body": [
                        "'Fractal' is a Mandelbrot and Julia fractal navigator.",
                        "The Julia fractal seed can be chosen dynamically on the Mandelbrot render, making it easy to visualize when the set is connected or not."
                    ],
                    "projectName": "fractal-navigator",
                    "githubLink": true,
                    "liveLink": false
                },
                {
                    "background": "images/projects/particles.jpg",
                    "title": "Particles",
                    "body": [
                        "'Particles' is an interactive particle system evolving with the law of gravitation.\nYou can use mouse buttons to either attract or repulse the particles.",
                        "The whole simulation runs on GPU."
                    ],
                    "projectName": "particles-gpu",
                    "githubLink": true,
                    "liveLink": false
                },
                {
                    "background": "images/projects/sampler-2D.png",
                    "title": "Sampler 2D",
                    "body": [
                        "'Sampler 2D' is a micro-project.\nIt provides a way to efficiently generate random samples from a discrete 2D density function."
                    ],
                    "projectName": "sampler2D",
                    "githubLink": true,
                    "liveLink": false
                }
            ]
        },
    ],
};

function getData(): unknown {
    return "hihi";
}

exports.data = data;
exports.getData = getData;
