import * as fs from "fs";
import sharp from "sharp";
import { Homepage } from "webpage-templates";
import { IHomepageData } from "webpage-templates/build/script/homepage/i-homepage-data";
import * as Readme from "./readme";
import * as Sitemap from "./sitemap";

if (process.argv.length !== 3) {
    console.log("Usage: <script> <dstDir>");
    process.exit(1);
}

const destinationDir = process.argv[2];

const data = {
    title: "Jérémie Piellard · Portfolio of WebGL and WebGPU projects",
    description: "This website is a portfolio showcasing my projects. My interests resolve around physical simulation and generative art. I mostly use WebGL and WebGPU for GPGPU in the browser.",
    sections: [
        {
            title: "Web",
            cards: [
                {
                    background: "images/projects/fur-threejs_512.jpg",
                    background_light: "images/projects/fur-threejs_512.webp",
                    background_light_highdpi: "images/projects/fur-threejs_1024.webp",
                    title: "Fur",
                    body: [
                        "This project is my take on real-time fur rendering. It is flexible and can adapt to any 3D model. A few properties are customizable, such as length, thickness, orientation and color patterns.",
                        "Technically, I implemented the traditional shells and fins technique, adapted for WebGL.",
                    ],
                    projectName: "fur-threejs",
                    liveLink: true,
                },
                {
                    background: "images/projects/water-webgpu_512.jpg",
                    background_light: "images/projects/water-webgpu_512.webp",
                    background_light_highdpi: "images/projects/water-webgpu_1024.webp",
                    title: "Water (WebGPU)",
                    body: [
                        "This is a water simulation modeling water as thousands of small balls colliding with each other. You can interact with it by adding objects such as a cup or a helix. You can also dynamically change the domain constraints.",
                        "This project runs fully on GPU and can handle up to a million balls. It is implemented with the experimental WebGPU API.",
                    ],
                    projectName: "water-webgpu",
                    liveLink: true,
                },
                {
                    background: "images/projects/non-circular-gears_512.png",
                    background_light: "images/projects/non-circular-gears_512.png",
                    background_light_highdpi: "images/projects/non-circular-gears_1024.png",
                    title: "Non-circular gears",
                    body: [
                        "Gears are not always round. Non-circular gears were first sketched by Leonardo da Vinci. Such gears are designed to convert rotational speed in a nonconstant manner. They also look cool.",
                        "This project is a non-circular gear system generator: the central gear has an unusual shape, and all the other gears are built to accomodate it.",
                    ],
                    projectName: "non-circular-gears",
                    liveLink: true,
                },
                {
                    background: "images/projects/particles-webgpu_512.jpg",
                    background_light: "images/projects/particles-webgpu_512.jpg",
                    background_light_highdpi: "images/projects/particles-webgpu_1024.jpg",
                    title: "Particles (WebGPU)",
                    body: [
                        "This is a basic particles simulation running fully on GPU, using the new WebGPU API.",
                        "Particles evolve independently, following simple gravitational rules. There can be several attraction points at once. You can control one with your mouse by pressing the left mouse button.",
                    ],
                    projectName: "particles-webgpu",
                    liveLink: true,
                    liveLinkArguments: "page%3Acanvas%3Afullscreen=true&page%3Acanvas%3Asidepane=true&page%3Arange%3Aparticles-count-range-id=3"
                },
                {
                    background: "images/projects/tessellation-webgl_512.jpg",
                    background_light: "images/projects/tessellation-webgl_512.webp",
                    background_light_highdpi: "images/projects/tessellation-webgl_1024.webp",
                    title: "Tessellation",
                    body: [
                        "Tessellation is the process of partitioning space into a set of smaller polygons.",
                        "This WebGL project aims at creating colorful art by using iterative tessellation. Each scene is completely random and supports infinite zooming. You can explore anywhere you like by using the left mouse button."
                    ],
                    projectName: "tessellation-webgl",
                    liveLink: true,
                    liveLinkArguments: "page%3Acanvas%3Afullscreen=true"
                },
                {
                    background: "images/projects/stereogram-webgl_512.jpg",
                    background_light: "images/projects/stereogram-webgl_512.webp",
                    background_light_highdpi: "images/projects/stereogram-webgl_1024.webp",
                    title: "Stereogram",
                    body: [
                        "Autostereograms (aka Magic Eye images) were very popular in the '90s. They look random, but actually contain a detailed 3D scene, which can only be seen by looking at the image a certain way. Such images work by using repeated patterns to trick the brain into seeing depth.",
                        "This project can generate such images. It runs on GPU and handles moving scenes."
                    ],
                    projectName: "stereogram-webgl",
                    liveLink: true
                },
                {
                    background: "images/projects/reaction-diffusion-webgl_512.jpg",
                    background_light_highdpi: "images/projects/reaction-diffusion-webgl_1024.webp",
                    title: "Reaction-diffusion",
                    body: [
                        "Reaction-diffusion is a system describing simple chemical reactions. This is a WebGL implementation of the Gray Scott model, running in real time on GPU.",
                        "The results exhibit very natural-looking patterns, similar to corals or animal coats. This project can also be used transform images with a nice effect."
                    ],
                    projectName: "reaction-diffusion-webgl",
                    liveLink: true,
                    liveLinkArguments: "page%3Atabs%3Amap-tabs-id=uniform&page%3Aselect%3Apresets-fixed-select-id=0"
                },
                {
                    background: "images/projects/jewelry_512.jpg",
                    background_light: "images/projects/jewelry_512.webp",
                    background_light_highdpi: "images/projects/jewelry_1024.webp",
                    title: "Jewelry",
                    body: [
                        "This is a real-time rendering engine for jewelry and gemstones. It can render many gemstones simultaneously and supports precise customization of various optical properties.",
                        "The engine runs fully on GPU and uses ray-tracing, as well as post-processing techniques such as bloom and screen-space antialiasing."
                    ],
                    projectName: "diamond-webgl/jewelry",
                    liveLink: true,
                    liveLinkArguments: "page%3Atabs%3Asupport-type-tabs-id=gold&page%3Arange%3Adispersion-range-id=0&page%3Acolor-picker%3Aminor-gem-color-colorpicker-id=%23E33737&page%3Acheckbox%3Adisplay-indicators-checkbox-id=false"
                },
                {
                    background: "images/projects/diamond-webgl_512.jpg",
                    background_light: "images/projects/diamond-webgl_512.webp",
                    background_light_highdpi: "images/projects/diamond-webgl_1024.webp",
                    title: "Diamond",
                    body: [
                        "This is a real-time rendering engine for diamonds and gemstones. It allows precise control of the cut, and customization of various optical properties to simulate countless types of materials.",
                        "The engine runs fully on GPU and uses ray-tracing, as well as post-processing techniques such as bloom and screen-space antialiasing."
                    ],
                    projectName: "diamond-webgl",
                    liveLink: true,
                },
                {
                    background: "images/projects/flowers-webgl_512.jpg",
                    background_light: "images/projects/flowers-webgl_512.webp",
                    background_light_highdpi: "images/projects/flowers-webgl_1024.webp",
                    title: "Flowers",
                    body: [
                        "This project paints a flower field in a naive style. Over time, each flower loses its petals to the wind and eventually dies, only to be replaced by a new one.",
                        "The stems are modelized as weightless ropes and animated with Verlet integration."
                    ],
                    projectName: "flowers-webgl",
                    liveLink: true,
                    liveLinkArguments: "page%3Acanvas%3Afullscreen=true",
                },
                {
                    background: "images/projects/ray-marching-webgl_512.jpg",
                    background_light: "images/projects/ray-marching-webgl_512.webp",
                    background_light_highdpi: "images/projects/ray-marching-webgl_1024.webp",
                    title: "Ray marching",
                    body: [
                        "This project is a simple WebGL experiment that uses basic ray marching to visualize various types 3D or 4D noise fields.",
                        "My main goal was to be explore value, gradient and simplex noises in three dimensions. The shader performance could probably be improved."
                    ],
                    projectName: "ray-marching-webgl",
                    liveLink: true,
                },
                {
                    background: "images/projects/packing-webgl_512.png",
                    background_light: "images/projects/packing-webgl_512.webp",
                    background_light_highdpi: "images/projects/packing-webgl_1024.webp",
                    title: "Packing",
                    body: [
                        "This is the implementation of a simple packing algorithm running on CPU. Each new item is given a random position, and then grows as big as possible without intersecting the others.",
                        "You can zoom anywhere you want by using the left mouse button."
                    ],
                    projectName: "packing-webgl",
                    liveLink: true,
                    liveLinkArguments: "page%3Acanvas%3Afullscreen=true",
                },
                {
                    background: "images/projects/rorschach-webl_512.png",
                    background_light: "images/projects/rorschach-webl_512.webp",
                    background_light_highdpi: "images/projects/rorschach-webl_1024.webp",
                    title: "Rorschach",
                    body: [
                        "Rorschach is the most  fascinating character of the Watchmen comics, hiding behind an ever-changing mask to become a moral judge instead of acknowledging his own issues with violence.",
                        "This is my attempt at recreating these patterns on GPU using WebGL, by computing a 3D multiscale gradient noise and thresholding it."
                    ],
                    projectName: "rorschach-webgl",
                    liveLink: true,
                    liveLinkArguments: "page%3Acanvas%3Afullscreen=true",
                },
                {
                    background: "images/projects/strange-attractors_512.png",
                    background_light: "images/projects/strange-attractors_512.webp",
                    background_light_highdpi: "images/projects/strange-attractors_1024.webp",
                    title: "Strange Attractors",
                    body: [
                        "This project is a performant 2D strange attractors plotter. It allows you to explore different types of attractors and play with various parameters.",
                        "Strange attractors are complex mathematical figures representing the path traced by a point iteratively moved following strict rules. Strange attractors often exhibit beautiful fractal patterns."
                    ],
                    projectName: "strange-attractors-webgl",
                    liveLink: true,
                },
                {
                    background: "images/projects/picasso-fourier_512.png",
                    background_light: "images/projects/picasso-fourier_512.webp",
                    background_light_highdpi: "images/projects/picasso-fourier_1024.webp",
                    title: "Picasso - Fourier",
                    body: [
                        "This project is at the intersection between art and mathematics. It uses the power of Fourier Transform to decompose the apparent simplicity of Picasso's single line drawings.",
                        "You can dynamically change the complexity of the sketches and visualize how Fourier manages to build a complex signal using only sines and cosines."
                    ],
                    projectName: "picasso-fourier",
                    liveLink: true,
                },
                {
                    background: "images/projects/chaos-game_512.png",
                    background_light: "images/projects/chaos-game_512.jpg",
                    background_light_highdpi: "images/projects/chaos-game_1024.jpg",
                    title: "Chaos Game",
                    body: [
                        "This project is an implementation of the Chaos Game, running on CPU and rendered with WebGL.",
                        "A single point is moved and drawn millions of times on the canvas according to a few very simple rules, and from the randomness emerge beautiful fractals. Discover hundreds of gorgeous fractals by adjusting the parameters offered by the simulation. A few presets highlight the ones I found but there are many more to explore."
                    ],
                    projectName: "chaos-game-webgl",
                    liveLink: true,
                },
                {
                    background: "images/projects/game-of-life-webgl_512.png",
                    background_light: "images/projects/game-of-life-webgl_512.webp",
                    background_light_highdpi: "images/projects/game-of-life-webgl_1024.webp",
                    title: "Game of Life",
                    body: [
                        "This project is a simple simulation of Conway's Game of Life, running on GPU.",
                        "The rules can be changed to see how the world evolves."
                    ],
                    projectName: "game-of-life-webgl",
                    liveLink: true,
                },
                {
                    background: "images/projects/panoramas_512.jpg",
                    background_light: "images/projects/panoramas_512.webp",
                    background_light_highdpi: "images/projects/panoramas_1024.webp",
                    title: "Panoramas",
                    body: [
                        "This small project is a simple tool for visualizing, editing and converting panoramas.",
                        "It supports skysphere, skybox and tiny planet formats, and can convert from one to another."
                    ],
                    projectName: "panoramas-webgl",
                    liveLink: true,
                },
                {
                    background: "images/projects/pool-webgl_512.png",
                    background_light: "images/projects/pool-webgl_512.webp",
                    background_light_highdpi: "images/projects/pool-webgl_1024.webp",
                    title: "Pool",
                    body: [
                        "This project is a WebGL water simulation running entirely on your GPU.\nYou can interact with the water, and visualize it both in 2D and 3D.",
                        "The water surface is modeled as a grid of springs."
                    ],
                    projectName: "pool-webgl",
                    liveLink: true,
                    liveLinkArguments: "page%3Acanvas%3Afullscreen=true&page%3Acanvas%3Asidepane=true",
                },
                {
                    background: "images/projects/navier-stokes.jpg",
                    title: "Navier-Stokes",
                    body: [
                        "This project is a WebGL incompressible fluid simulation running entirely on your GPU.\nYou can interact with the fluid with the left mouse button and visualize both the velocity and the pressure of the fluid.",
                        "This is an implementation of the Stable Fluid described by J. Stam."
                    ],
                    projectName: "navier-stokes-webgl",
                    liveLink: true,
                },
                {
                    background: "images/projects/waterfall.jpg",
                    title: "Waterfall",
                    body: [
                        "'Waterfall' is a simple waterfall simulation, based on a particle system.\nThe particles bounce off obstacles, creating water streams and droplets.",
                        "The whole simulation runs on GPU."
                    ],
                    projectName: "waterfall-webgl",
                    liveLink: true,
                },
                {
                    background: "images/projects/paint_512.png",
                    background_light: "images/projects/paint_512.webp",
                    background_light_highdpi: "images/projects/paint_1024.webp",
                    title: "Paint",
                    body: [
                        "'Paint' is a dynamic painting simulation.\nThe moving paint strokes highlight the geometry, and you can interact with them to shape the painting.",
                        "The whole simulation runs on GPU."
                    ],
                    projectName: "paint-webgl",
                    liveLink: true,
                },
            ]
        },
        {
            title: "Cats",
            cards: [
                {
                    background: "images/projects/image-stylization-reaction-diffusion_512.png",
                    background_light_highdpi: "images/projects/image-stylization-reaction-diffusion_1024.png",
                    title: "Reaction-diffusion",
                    body: [
                        "Reaction-diffusion is a system describing simple chemical reactions. This is a WebGL implementation of the Gray Scott model, running in real time on GPU.",
                        "The results exhibit very natural-looking patterns, similar to corals or animal coats. This project can be used transform images, creating a nice effect."
                    ],
                    projectName: "reaction-diffusion-webgl",
                    liveLink: true,
                },
                {
                    background: "images/projects/image-stylization-threading_512.png",
                    background_light: "images/projects/image-stylization-threading_512.png",
                    background_light_highdpi: "images/projects/image-stylization-threading_1024.webp",
                    title: "Threading",
                    body: [
                        "This tool generates string art from any picture of your choice. A single-color thread is repeatedly ran from border to border in a straight line. The stacked segments progressively recreate the original image.",
                        "This process was popularized by Petros Vrellis."
                    ],
                    projectName: "image-stylization-threading",
                    liveLink: true,
                },
                {
                    background: "images/projects/dithering_512.png",
                    background_light: "images/projects/dithering_512.png",
                    background_light_highdpi: "images/projects/dithering_1024.png",
                    title: "Dithering",
                    body: [
                        "This is a simple tool to turn images into a series of lines of varying lengths.",
                        "The result can be exported in the SVG format."
                    ],
                    projectName: "image-stylization-sines",
                    liveLink: true,
                    liveLinkArguments: "page%3Atabs%3Apattern-tabs-id=1&page%3Arange%3Alines-count-range-id=70&page%3Arange%3Amax-frequency-range-id=0.18&page%3Atabs%3Alines-type-tabs-id=1&page%3Arange%3Amax-amplitude-range-id=0.5"
                },
                {
                    background: "images/projects/image-stylization-sines_512.png",
                    background_light: "images/projects/image-stylization-sines_512.png",
                    background_light_highdpi: "images/projects/image-stylization-sines_1024.webp",
                    title: "Sine waves",
                    body: [
                        "This is a simple tool to turn images into a series of sine waves of varying frequency and amplitude.",
                        "The result can be exported in the SVG format."
                    ],
                    projectName: "image-stylization-sines",
                    liveLink: true,
                },
            ]
        },
        {
            title: "Tools",
            cards: [
                {
                    background: "images/projects/ldap-filter-analyzer_512.png",
                    background_light: "images/projects/ldap-filter-analyzer_512.webp",
                    background_light_highdpi: "images/projects/ldap-filter-analyzer_1024.webp",
                    title: "LDAP filter analyzer",
                    body: [
                        "This project is a simple tool for easily visualizing large LDAP filters. Hovering parts of the analyzed result highlights where they were extracted from.",
                        "The input string is analyzed by a scannerless parser: it performs lexing and parsing at once. It uses a factory pattern for building nodes in memory as it scans the input."
                    ],
                    projectName: "ldap-filter-analyzer",
                    liveLink: true,
                },
                {
                    background: "images/projects/i18n_512.png",
                    background_light: "images/projects/i18n_512.webp",
                    background_light_highdpi: "images/projects/i18n_1024.webp",
                    title: "i18n",
                    body: [
                        "This is a silly tool to translate to and from numeronyms such as \"i18n\" (which stands for \"internationalization\").  The reverse translation illustrates how confusing such abbreviations can be.",
                        "Only keep the first and last letters, and add the count of inner letters. Makes communication easier. M3s c11n e4r."
                    ],
                    projectName: "i18n",
                    liveLink: true,
                },
                {
                    background: "images/projects/f5-persistence-cookie_512.png",
                    background_light: "images/projects/f5-persistence-cookie_512.png",
                    background_light_highdpi: "images/projects/f5-persistence-cookie_1024.png",
                    title: "F5 persistence cookie",
                    body: [
                        "This is a simple tool to decode and craft F5 BIG-IP persistence cookies. They contain the local IP and port of the machine.",
                        "The structure of these cookies is explained <a href='https://my.f5.com/manage/s/article/K6917'>here</a>."
                    ],
                    projectName: "f5-persistence-cookie",
                    liveLink: true,
                },
                {
                    background: "images/projects/totp-generator_512.png",
                    background_light: "images/projects/totp-generator_512.webp",
                    background_light_highdpi: "images/projects/totp-generator_1024.webp",
                    title: "TOTP generator",
                    body: [
                        "This is an online tool to generate TOTP codes like an app such as Google Authenticator would do.",
                        "You can bookmark this page to remember the secret. Keep in mind that it is safer to use a dedicated app."
                    ],
                    projectName: "totp-generator",
                    liveLink: true,
                },
            ]
        },
        {
            title: "OpenGL / other",
            cards: [
                {
                    background: "images/projects/voxelizer_512.png",
                    background_light: "images/projects/voxelizer_512.webp",
                    background_light_highdpi: "images/projects/voxelizer_1024.webp",
                    title: "Voxelizer",
                    body: [
                        "'Voxelizer' is a project that efficiently turns any 3D mesh into a grid of voxels.\nThe voxels are stored as a compact bit array.",
                        "The whole processing runs fully on GPU."
                    ],
                    projectName: "voxelizer-gpu",
                    githubLink: true,
                },
                {
                    background: "images/projects/parallax.jpg",
                    title: "Parallax mapping",
                    body: [
                        "'Parallax' is a simple demonstration of parallax mapping, with a comparison to other techniques such as normal mapping."
                    ],
                    projectName: "parallax-mapping",
                    githubLink: true,
                },
                {
                    background: "images/projects/fractal_512.jpg",
                    background_light: "images/projects/fractal_512.webp",
                    background_light_highdpi: "images/projects/fractal_800.webp",
                    title: "Fractal navigator",
                    body: [
                        "'Fractal' is a Mandelbrot and Julia fractal navigator.",
                        "The Julia fractal seed can be chosen dynamically on the Mandelbrot render, making it easy to visualize when the set is connected or not."
                    ],
                    projectName: "fractal-navigator",
                    githubLink: true,
                },
                {
                    background: "images/projects/particles.jpg",
                    title: "Particles",
                    body: [
                        "'Particles' is an interactive particle system evolving with the law of gravitation.\nYou can use mouse buttons to either attract or repulse the particles.",
                        "The whole simulation runs on GPU."
                    ],
                    projectName: "particles-gpu",
                    githubLink: true,
                },
                {
                    background: "images/projects/sampler-2D.png",
                    title: "Sampler 2D",
                    body: [
                        "'Sampler 2D' is a micro-project.\nIt provides a way to efficiently generate random samples from a discrete 2D density function."
                    ],
                    projectName: "sampler2D",
                    githubLink: true,
                }
            ]
        },
    ],
}

async function computeBlurredBackgrounds(): Promise<void> {
    for (const section of data.sections) {
        for (const card of section.cards) {
            const fullBackground = card.background;

            const tmpPath = fullBackground + "_tmp.png";
            const downsizedImage = sharp(fullBackground).resize(16, 8).blur(1.25).png({ compressionLevel: 9 });
            await downsizedImage.toFile(tmpPath);
            const bitmap = fs.readFileSync(tmpPath);
            fs.unlinkSync(tmpPath);

            (card as any).background_blurred = "data:image/png;base64," + bitmap.toString("base64");
        }
    }
}

async function start(): Promise<void> {
    await computeBlurredBackgrounds();

    Homepage.build(data as IHomepageData, destinationDir);
    Readme.generate(data);

    const projectNames: string[] = [];
    data.sections.forEach(section => {
        section.cards.forEach(card => {
            projectNames.push(card.projectName);
        })
    })
    Sitemap.generate(projectNames);
}

start();
