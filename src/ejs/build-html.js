/* Page content */
const WebGLSection = {
    title: "WebGL",
    cards: []
};

const OpenGLSection = {
    title: "OpenGL",
    cards: []
};

const OtherSection = {
    title: "Other",
    cards: []
};

WebGLSection.cards.push({
    background: "images/projects/pool.jpg",
    title: "Pool",
    body: ["This project is a WebGL water simulation running entirely on your GPU.\nYou can interact with the water, and visualize it both in 2D and 3D.",
        "The water surface is modelled as a grid of springs."],
    projectName: "pool-webgl",
    githubLink: true,
    liveLink: true
});

WebGLSection.cards.push({
    background: "images/projects/navier-stokes.jpg",
    title: "Navier-Stokes",
    body: ["This project is a WebGL incompressible fluid simulation running entirely on your GPU.\nYou can interact with the fluid with the left mouse button and visualize both the velocity and the pressure of the fluid.",
        "This is an implementation of the Stable Fluid described by J. Stam."]
        ,
    projectName: "navier-stokes-webgl",
    githubLink: true,
    liveLink: true
});

WebGLSection.cards.push({
    background: "images/projects/waterfall.jpg",
    title: "Waterfall",
    body: ["'Waterfall' is a simple waterfall simulation, based on a particle system.\nThe particles bounce off obstacles, creating water streams and droplets.",
        "The whole simulation runs on GPU."],
    projectName: "waterfall-webgl",
    githubLink: true,
    liveLink: true
});

WebGLSection.cards.push({
    background: "images/projects/paint.jpg",
    title: "Paint",
    body: ["'Paint' is a dynamic painting simulation.\nThe moving paint strokes highlight the geometry, and you can interact with them to shape the painting.",
        "The whole simulation runs on GPU."],
    projectName: "paint-webgl",
    githubLink: true,
    liveLink: true
});

OpenGLSection.cards.push({
    background: "images/projects/voxelizer.jpg",
    title: "Voxelizer",
    body: ["'Voxelizer' is a project that efficiently turns any 3D mesh into a grid of voxels.\nThe voxels are stored as a compact bit array.",
        "The whole processing runs fully on GPU."],
    projectName: "voxelizer-gpu",
    githubLink: true,
    liveLink: false
});

OpenGLSection.cards.push({
    background: "images/projects/parallax_256.jpg",
    title: "Parallax mapping",
    body: ["'Parallax' is a simple demonstration of parallax mapping, with a comparison to other techniques such as normal mapping."],
    projectName: "parallax-mapping",
    githubLink: true,
    liveLink: false
});

OpenGLSection.cards.push({
    background: "images/projects/fractal.jpg",
    title: "Fractal navigator",
    body: ["'Fractal' is a Mandelbrot and Julia fractal navigator.",
        "The Julia fractal seed can be chosen dynamically on the Mandelbrot render, making it easy to visualize when the set is connected or not."],
    projectName: "fractal-navigator",
    githubLink: true,
    liveLink: false
});

OpenGLSection.cards.push({
    background: "images/projects/particles.jpg",
    title: "Particles",
    body: ["'Particles' is an interactive particle system evolving with the law of gravitation.\nYou can use mouse buttons to either attract or repulse the particles.",
        "The whole simulation runs on GPU."],
    projectName: "particles-gpu",
    githubLink: true,
    liveLink: false
});

OtherSection.cards.push({
    background: "images/projects/bomberman.jpg",
    title: "Bomberman",
    body: ["<p>'Bomberman' is one of my first projects.\nIt is my take on the 80's classic."],
    projectName: "bomberman-sfml",
    githubLink: true,
    liveLink: false
});

OtherSection.cards.push({
    background: "images/projects/sampler-2D.png",
    title: "Sampler 2D",
    body: ["'Sampler 2D' is a micro-project.\nIt provides a way to efficiently generate random samples from a discrete 2D density function."],
    projectName: "sampler2D",
    githubLink: true,
    liveLink: false
});

const data = {
    page: {
        description: "Portfolio of small OpenGL and WebGL projects",
        title: "Projects - Jérémie Piellard"
    },
    css: ["css/min/concatenated.css"],
    sections: [WebGLSection, OpenGLSection, OtherSection]
};


const OUTPUT = "index.html";
const VIEWS_FOLDER = "src/ejs/views/";

const fs = require("fs");

/* Custom file loader */
const ALIASES = [
    {keyword: "#=", open: "<%=", close: "%>"},
    {keyword: "#_", open: "<%_", close: "_%>"},
    {keyword: "#",  open: "<%",  close: "%>"}];

const fileLoader = function(filepath) {
    let template = '' + fs.readFileSync(filepath, ['utf-8']);

    ALIASES.forEach(function(alias) {
        const replacement = alias.open + " $1 " + alias.close;

        /* inline commands, then full line commands */
        template = template.replace(new RegExp(alias.keyword + "\\(([^\)]*)\\)", "mg"), replacement);
        template = template.replace(new RegExp("[ \t]*" + alias.keyword + " (.*)", "mg"), replacement);
    });

    return template;
};

const ejs = require("ejs");
ejs.render
ejs.fileLoader = fileLoader;

/* HTML generation */
const htmlContent = fs.readFileSync(VIEWS_FOLDER + 'pages/index.ejs', 'utf8');
const generated = ejs.render(htmlContent, data, {filename: VIEWS_FOLDER + 'pages/index.ejs'});

const pretty = require('pretty');
prettyfied = pretty(generated);

fs.writeFileSync(OUTPUT, prettyfied, ['utf8']);