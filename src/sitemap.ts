import fs from "fs";
import path from "path";
import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";
import xmlFormat from "xml-formatter";
import * as Data from "./data";

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
        links.push({
            url: projectName + "/",
            lastmod: now,
            priority: 0.8,
        });

        const readmeUrl = `${Data.websiteOrigin}/${projectName}/readme`;
        const readmeRequest = await fetch(readmeUrl);
        if (readmeRequest.status === 200) {
            links.push({
                url: readmeUrl,
                lastmod: now,
                priority: 0.7,
            });
        } else {
            if (!["diamond-webgl/jewelry", "voxelizer-gpu", "parallax-mapping", "fractal-navigator", "particles-gpu", "sampler2D"].includes(projectName)) {
                console.log(`${readmeUrl} has no readme.`);
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

