import fs from "fs";
import path from "path";
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";
import xmlFormat from "xml-formatter";
import * as Data from "./data";

async function doesUrlExist(url: string): Promise<boolean> {
    const request = await fetch(url);
    return (request.status === 200);
}

async function generate(projectNames: string[]): Promise<void> {
    const now = new Date().toJSON();

    type Link = {
        url: string;
        lastmod: string;
        priority: number;
    };
    const links: Link[] = [{
        url: "/",
        lastmod: now,
        priority: 1,
    }];

    for (const projectName of projectNames) {
        const projectUrl = `${Data.websiteOrigin}/${projectName}`;
        if (await doesUrlExist(projectUrl)) {
            links.push({
                url: projectName + "/",
                lastmod: now,
                priority: 0.8,
            });

            const readmeUrl = `${Data.websiteOrigin}/${projectName}/readme`;
            if (await doesUrlExist(readmeUrl)) {
                links.push({
                    url: readmeUrl,
                    lastmod: now,
                    priority: 0.7,
                });
            } else {
                if (!["diamond-webgl/jewelry"].includes(projectName)) {
                    console.log(`${projectUrl} has no readme.`);
                }
            }
        } else {
            if (!["voxelizer-gpu", "parallax-mapping", "fractal-navigator", "particles-gpu", "sampler2D"].includes(projectName)) {
                console.log(`${projectUrl} has no link.`);
            }
        }
    }

    const stream = new SitemapStream({ hostname: Data.websiteOrigin });
    const data = await streamToPromise(Readable.from(links).pipe(stream));
    const sitemapContentRaw = data.toString();
    const sitemapContent = xmlFormat(sitemapContentRaw, {
        collapseContent: true,
    });
    fs.writeFileSync(path.resolve(__dirname, "..", "sitemap.xml"), sitemapContent);
}

export {
    generate
};

