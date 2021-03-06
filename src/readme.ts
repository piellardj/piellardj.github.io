import * as fs from "fs";
import * as path from "path";

interface IReadmeProject {
    background: string;
    title: string;
    projectName: string;
    liveLink?: boolean;
    liveLinkArguments?: string;
}

interface IReadmeSection {
    title: string;
    cards: IReadmeProject[];
}

interface IReadmeData {
    sections: IReadmeSection[];
}

function buildLiveLink(description: IReadmeProject): string {
    const parts: string[] = [
        "https://piellardj.github.io",
        description.projectName,
    ];
    if (typeof description.liveLinkArguments === "string") {
        parts.push("?" + description.liveLinkArguments);
    }
    return parts.join("/");
}

function buildLinks(description: IReadmeProject): string {
    const links: string[] = [];
    if (typeof description.liveLink === "boolean" && description.liveLink) {
        const liveLink = buildLiveLink(description);
        links.push(`[live](${liveLink})`);
    }

    {
        const repoLink = `https://github.com/piellardj/${description.projectName}`;
        links.push(`[repo](${repoLink})`);
    }

    return links.join(" / ");
}

function buildProject(description: IReadmeProject): string {
    const links = buildLinks(description);
    const title = `### ${description.title}: ${links}`;
    const background = `![Screenshot for ${description.title}](${description.background})`;
    return title + "\n" + background;
}

function buildSection(description: IReadmeSection): string {
    const title = `## Projects: ${description.title}`;

    const parts: string[] = [title];
    for (const project of description.cards) {
        const projectString = buildProject(project);
        parts.push(projectString);
    }
    return parts.join("\n\n");
}

function buildReadme(data: IReadmeData): string {
    const introduction =
        `# Homepage

This repo is a hub giving access to all of my projects.
See the live version here: [piellardj.github.io](https://piellardj.github.io).
`;

    const parts: string[] = [introduction];
    for (const section of data.sections) {
        const sectionString = buildSection(section);
        parts.push(sectionString);
    }
    return parts.join("\n");
}

function writeReadme(contents: string) {
    const rootFolder = path.resolve(__dirname, "..");
    const filepath = path.resolve(rootFolder, "README.md");
    fs.writeFileSync(filepath, contents);
}

function generate(data: IReadmeData): void {
    const contents = buildReadme(data);
    writeReadme(contents);
}

export { generate }
