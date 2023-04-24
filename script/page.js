var Page;
(function (Page) {
    var Homepage;
    (function (Homepage) {
        /* Retrieve projects URLs from DOM, in their order of appearance */
        function retrieveProjectsUrls() {
            var projectUrlStart = "https://piellardj.github.io/";
            var result = [];
            // don't use forEach because not standard and fails on IE11
            var potentialLinks = document.querySelectorAll("a.card-link");
            for (var i = 0; i < potentialLinks.length; ++i) {
                var href = potentialLinks[i].href;
                if (href && href.indexOf(projectUrlStart) === 0) {
                    result.push(href);
                }
            }
            return result;
        }
        function shuffleList(list) {
            function swap(index1, index2) {
                if (index1 !== index2) {
                    var list1 = list[index1];
                    var list2 = list[index2];
                    if (typeof list1 === "undefined" || typeof list2 === "undefined") {
                        throw new Error("Out of bound indices: ".concat(index1, " and ").concat(index2, "."));
                    }
                    list[index1] = list2;
                    list[index2] = list1;
                }
            }
            for (var currentIndex = list.length - 1; currentIndex > 0; --currentIndex) {
                var substituteIndex = Math.floor(0.9999 * currentIndex * Math.random());
                swap(currentIndex, substituteIndex);
            }
        }
        var logo = document.getElementById("random-project-button");
        if (logo) {
            var projectsUrls_1 = retrieveProjectsUrls();
            var nextIndex_1 = 0;
            /**
             * Updates the logo's href with an url from the shuffled list.
             */
            var randomizeLogoHref = function () {
                if (nextIndex_1 === 0) {
                    shuffleList(projectsUrls_1);
                }
                logo.href = projectsUrls_1[nextIndex_1];
                nextIndex_1 = (nextIndex_1 + 1) % projectsUrls_1.length;
            };
            logo.classList.add("dynamic-logo");
            logo.href = "#"; // default value if no projects on the page
            logo.onclick = randomizeLogoHref;
            logo.onauxclick = randomizeLogoHref;
            randomizeLogoHref();
        }
    })(Homepage = Page.Homepage || (Page.Homepage = {}));
})(Page || (Page = {}));

var Page;
(function (Page) {
    var Homepage;
    (function (Homepage) {
        var Card;
        (function (Card) {
            function bindCardsActiveEvent() {
                var _a;
                var allCardFrames = document.querySelectorAll(".card-frame");
                var ACTIVE_CLASS = "active";
                document.addEventListener("click", function (event) {
                    var _a;
                    for (var i = 0; i < allCardFrames.length; i++) {
                        var cardFrame = allCardFrames[i];
                        cardFrame.classList.remove(ACTIVE_CLASS);
                    }
                    var target = event.target;
                    var current = target;
                    while (current) {
                        if (current.classList.contains("card-frame")) {
                            current.classList.add(ACTIVE_CLASS);
                            break;
                        }
                        else if (current.classList.contains("card-title")) {
                            (_a = current === null || current === void 0 ? void 0 : current.nextElementSibling) === null || _a === void 0 ? void 0 : _a.classList.add(ACTIVE_CLASS);
                        }
                        current = current.parentElement;
                    }
                });
                var _loop_1 = function (i) {
                    var cardFrame = allCardFrames[i];
                    cardFrame.addEventListener("mouseleave", function () {
                        cardFrame.classList.remove(ACTIVE_CLASS);
                    });
                    (_a = cardFrame.parentElement) === null || _a === void 0 ? void 0 : _a.addEventListener("mouseleave", function () {
                        cardFrame.classList.remove(ACTIVE_CLASS);
                    });
                };
                for (var i = 0; i < allCardFrames.length; i++) {
                    _loop_1(i);
                }
            }
            bindCardsActiveEvent();
        })(Card = Homepage.Card || (Homepage.Card = {}));
    })(Homepage = Page.Homepage || (Page.Homepage = {}));
})(Page || (Page = {}));


