(function() {
    const logo = document.getElementById("logo");
    const projectsUrls = [];

    /* Retrieve projects URLs from DOM, in their order of appearance */
    {
        const projectUrlStart = "https://piellardj.github.io/";

        // don't use forEach because not standard and fails on IE11
        const potentialLinks = document.querySelectorAll(".card-footer a");
        for (let i = 0; i < potentialLinks.length; ++i) {
            const href = potentialLinks[i].href;
            if (href && href.indexOf(projectUrlStart) === 0) {
                projectsUrls.push(href);
            }
        }
    }

    /**
     * @param {string[]} list
     */
    function shuffleList(list) {
        let tmp;
        /**
         * Swaps two elements from the list
         * @param {number} index1
         * @param {number} index2
         */
        function swap(index1, index2) {
            tmp = list[index1];
            list[index1] = list[index2];
            list[index2] = tmp;
        }

        for (let max = list.length; max > 0; --max) {
            swap(max - 1, Math.floor(0.9999 * max * Math.random()));
        }
    }

    let nextIndex = 0;
    /**
     * Updates the logo's href with an url from the shuffled list.
     */
    function randomizeLogoHref() {
        if (nextIndex === 0) {
            shuffleList(projectsUrls);
        }

        logo.href = projectsUrls[nextIndex];
        nextIndex = (nextIndex + 1) % projectsUrls.length;
    }

    logo.classList.add("dynamic-logo");
    logo.href = "#"; // default value if no projects on the page
    logo.onclick = randomizeLogoHref;
    logo.onauxclick = randomizeLogoHref;
    randomizeLogoHref();
})();


