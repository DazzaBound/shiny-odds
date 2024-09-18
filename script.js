let base = 4096;
let rolls = 1;

const data = {
    "2" : {
        "G / S / C": {
            methods: [
                {name: "Encounters", rolls: 1},
                {name: "Shiny Ditto Eggs", rolls: 128}
            ]
        }
    },
    "3" : {
        "R / S / E": {
            methods: [
                {name: "Encounters", rolls: 1}
            ]
        },
        "FR / LG": {
            methods: [
                {name: "Encounters", rolls: 1}
            ]
        },
        "Colosseum": {
            methods: [
                {name: "Shadow", rolls: 1}
            ]
        },
        "XD": {
            methods: [
                {name: "Poké Spot", rolls: 1}
            ]
        }
    },
    "4" : {
        "D / P / Pt": {
            methods: [
                {name: "Encounters", rolls: 1},
                {name: "Masuda", rolls: 5}
            ]
        },
        "HG / SS": {
            methods: [
                {name: "Encounters", rolls: 1},
                {name: "Masuda", rolls: 5}
            ]
        }
    },
    "5" : {
        "B / W": {
            methods: [
                {name: "Encounters", rolls: 1},
                {name: "Masuda", rolls: 6}
            ]
        },
        "B2 / W2": {
            methods: [
                {name: "Encounters", rolls: 1},
                {name: "Masuda", rolls: 6}
            ],
            options: [
                {name: "Shiny Charm", rolls: 2}
            ]
        }
    },
    "6" : {
        "X / Y": {
            methods: [
                {name: "Encounters", rolls: 1},
                {name: "Masuda", rolls: 6},
                {name: "Chain Fishing", rolls: 41},
                {name: "Friend Safari", rolls: 5}
            ],
            options: [
                {name: "Shiny Charm", rolls: 2}
            ]
        },
        "OR / AS": {
            methods: [
                {name: "Encounters", rolls: 1},
                {name: "Masuda", rolls: 6},
                {name: "Chain Fishing", rolls: 41},
            ],
            options: [
                {name: "Shiny Charm", rolls: 2}
            ]
        }
    },
    "7" : {
        "S / M / US / UM": {
            methods: [
                {name: "Encounters", rolls: 1},
                {name: "Masuda", rolls: 6},
                {name: "S.O.S."}
            ],
            options: [
                {name: "Shiny Charm", rolls: 2}
            ]
        },
        "LGP / LGE": {
            methods: [
                {name: "Encounters", rolls: 1},
                {name: "Catch Combo"},
                {name: "In-Game Trade", rolls: 1, disable: ["Shiny Charm", "Lure"]},
                {name: "Static", rolls: 1, disable: ["Lure"]}
            ],
            options: [
                {name: "Shiny Charm", rolls: 2},
                {name: "Lure", rolls: 1}
            ]
        }
    },
    "8" : {
        "Sw / Sh": {
            methods: [
                {name: "Encounters", rolls: 1, disable: ["1-49 Battled","50-99 Battled","100-199 Battled","200-299 Battled","300-499 Battled","500+ Battled"]},
                {name: "Brilliant Aura", rolls: 1},
                {name: "Masuda", rolls: 6, disable: ["1-49 Battled","50-99 Battled","100-199 Battled","200-299 Battled","300-499 Battled","500+ Battled"]},
                {name: "DA's (specific)", base: 300, disable: ["1-49 Battled","50-99 Battled","100-199 Battled","200-299 Battled","300-499 Battled","500+ Battled"]},
                {name: "DA's (any)", base: 300, rollMult: 4, disable: ["1-49 Battled","50-99 Battled","100-199 Battled","200-299 Battled","300-499 Battled","500+ Battled"]}
            ],
            options: [
                {name: "Shiny Charm", rolls: 2},
                {name: "1-49 Battled", rolls: 1, exclude: ["50-99 Battled","100-199 Battled","200-299 Battled","300-499 Battled","500+ Battled"]},
                {name: "50-99 Battled", rolls: 2, exclude: ["1-49 Battled","100-199 Battled","200-299 Battled","300-499 Battled","500+ Battled"]},
                {name: "100-199 Battled", rolls: 3, exclude: ["1-49 Battled","50-99 Battled","200-299 Battled","300-499 Battled","500+ Battled"]},
                {name: "200-299 Battled", rolls: 4, exclude: ["1-49 Battled","50-99 Battled","100-199 Battled","300-499 Battled","500+ Battled"]},
                {name: "300-499 Battled", rolls: 5, exclude: ["1-49 Battled","50-99 Battled","100-199 Battled","200-299 Battled","500+ Battled"]},
                {name: "500+ Battled", roll: 6, exclude: ["1-49 Battled","50-99 Battled","100-199 Battled","200-299 Battled","300-499 Battled"]},
            ]
        },
        "BD / SP": {
            methods: [
                {name: "Encounters", rolls: 1, disable: ["Shiny Charm"]},
                {name: "Masuda", rolls: 6}
            ],
            options: [
                {name: "Shiny Charm", rolls: 2}
            ]
        },
        "Legends: Arceus": {
            methods: [
                {name: "Encounters", rolls: 1}
            ],
            options: [
                {name: "Shiny Charms", rolls: 3, select: ["Dex Entry Lvl 10"]},
                {name: "Dex Entry Lvl 10", rolls: 1},
                {name: "Dex Entry Perfect", rolls: 2, select: ["Dex Entry Lvl 10"]},
                {name: "Mass Outbreak", rolls: 25, exclude: ["MMO"]},
                {name: "MMO", rolls: 12, exclude: ["Mass Outbreak"]}
            ]
        }
    },
    "9" : {
        "S / V": {
            methods: [
                {name: "Encounters", rolls: 1},
                {name: "Masuda", rolls: 6, disable: ["Sparkle Power Lvl 1", "Sparkle Power Lvl 2", "Sparkle Power Lvl 3"]}
            ],
            options: [
                {name: "Shiny Charm", rolls: 2},
                {name: "Sparkle Power Lvl 1", rolls: 1, exclude: ["Sparkle Power Lvl 2", "Sparkle Power Lvl 3"]},
                {name: "Sparkle Power Lvl 2", rolls: 2, exclude: ["Sparkle Power Lvl 1", "Sparkle Power Lvl 3"]},
                {name: "Sparkle Power Lvl 3", rolls: 3, exclude: ["Sparkle Power Lvl 1", "Sparkle Power Lvl 2"]},
            ]
        }
    }
};

document.getElementById("percent").oninput = updateFromSlider;
document.getElementById("percentLabel").onkeyup = updateFromNumber;
genTable();
findAttempts();

function genTable() {
    document.getElementById("gens").innerHTML = "";
    document.getElementById("botRow").innerHTML = "<div id=\"version\">Version</div><div id=\"method\">Method</div><div id=\"option\">Options</div>";
    for(let g in data) {
        const li = document.createElement("li");
        li.textContent = g;
        li.setAttribute("data-gen", g);
        li.setAttribute("onclick", 'genBot(this, '+g+')');
        document.getElementById("gens").appendChild(li);
    };
}

function genBot(btn, g) {
    const gen = data[g];
    const buttons = document.querySelectorAll("#gens li");
    for (let b of buttons) {
        b.classList.remove("active");
    };
    btn.classList.add("active");
    document.getElementById("version").innerHTML = "Version";
    document.getElementById("method").innerHTML = "";
    document.getElementById("option").innerHTML = "";
    base = g < 6 ? 8192 : 4096;
    rolls = 1;
    for(let v in gen) {
        const div = document.createElement("div");
        div.textContent = v;
        div.setAttribute("onclick", "genOpt(this, '"+g+"', '"+v+"')")
        document.getElementById("version").appendChild(div);
    }
    updateOdds();
};

function genOpt(btn, g, v) {
    const method = data[g][v].methods;
    const buttons = document.querySelectorAll("#version div");
    for (let b of buttons) {
        b.classList.remove("active");
    };
    btn.classList.add("active");
    document.getElementById("method").innerHTML = "Methods";
    for(let m of method) {
        const div = document.createElement("div");
        div.textContent = m.name;
        if(m.rolls) {
            div.setAttribute("data-roll", m.rolls);
        };
        if(m.base) {
            div.setAttribute("data-base", m.base);
        };
        div.setAttribute("onclick", "selMethod('"+g+"', '"+v+"', this)")
        document.getElementById("method").appendChild(div);
    }
    if(data[g][v].options) {
        const option = data[g][v].options;
        document.getElementById("option").innerHTML = "Options";
        for(let o of option) {
            const div = document.createElement("div");
            div.textContent = o.name;
            if(o.rolls) {
                div.setAttribute("data-roll", o.rolls);
            };
            div.setAttribute("onclick", "selOption(this)")
            document.getElementById("option").appendChild(div);
        };
    }
    selMethod(g, v, document.querySelectorAll("#method div")[0]);
};

function selMethod(g, v, m) {
    document.querySelectorAll("#method div, #option div").forEach(button => {
        button.classList.remove("active");
    });
    m.classList.add("active");
    rolls = m.getAttribute("data-roll") || 1;

    const methodName = m.innerText;
    const method = data[g][v].methods.find(m => m.name === methodName);
    if (method) {
        const disabledOptions = method.disable || [];
        const allOptions = document.querySelectorAll("#option div");

        allOptions.forEach(btn => {
            const optionName = btn.innerText;
            if (disabledOptions.includes(optionName)) {
                btn.classList.add("disable");
                btn.classList.remove("active");
                btn.style.pointerEvents = "none";
            } else {
                btn.classList.remove("disable");
                btn.style.pointerEvents = "auto";
            }
        });
    }
    base = m.getAttribute("data-base") ? m.getAttribute("data-base") : (g < 6 ? 8192 : 4096);
    updateOdds();
}

function selOption(o) {
    if(!document.querySelector("#method .active")) return;
    o.classList.toggle("active");

    const g = document.querySelector("#gens .active").dataset.gen;
    const v = document.querySelector("#version .active").textContent;
    const opt = data[g][v].options || [];
    const optData = opt.find(btn => btn.name === o.textContent)

    if(optData) {
        if(optData.select) {
            optData.select.forEach(selectOpt => {
                const ele = Array.from(document.querySelectorAll("#option div")).find(o => o.textContent === selectOpt);
                if (ele && !ele.classList.contains("active")) {
                    ele.classList.add("active");
                }
            });
        }

        if(optData.exclude) {
            optData.exclude.forEach(exlOpt => {
                const ele = Array.from(document.querySelectorAll("#option div")).find(o => o.textContent === exlOpt);
                if (ele && ele.classList.contains("active")) {
                    ele.classList.remove("active");
                }
            });
        }
    }

    updateOdds();
};

function findRolls() {
    const methodDiv = document.querySelector("#method");
    const optionDiv = document.querySelector("#option");

    if (methodDiv && methodDiv.querySelector(".active")) {
        rolls = parseInt(methodDiv.querySelector(".active").getAttribute("data-roll") || 1);
    };

    if (optionDiv) {
        const activeOptions = optionDiv.querySelectorAll(".active");
        if (activeOptions.length > 0) {
            for(let o of activeOptions) {
                rolls += parseInt(o.getAttribute("data-roll"));
            }
        }
    }

    if (methodDiv && methodDiv.querySelector(".active") && methodDiv.querySelector(".active").innerText === "DA's (any)") {
        rolls *= 4;
    }
};

function updateOdds() {
    findRolls();
    let odds = (1 / (1-((base-1)/base)**rolls)).toFixed(0);
    document.getElementById("odds").value = odds;
    findAttempts();
};

function findAttempts() {
    let odds = document.getElementById("odds").value;
    let percent = document.getElementById("percent");
    let n = Math.ceil(Math.log(1 - percent.value/100) / Math.log(1 - 1 / odds));
    document.getElementById("attempt").value = n;
};

function updateFromSlider() {
    let percent = document.getElementById("percent");
    let percentLabel = document.getElementById("percentLabel");
    percentLabel.value = parseFloat(percent.value).toFixed(1);
    findAttempts();
};

function updateFromNumber() {
    let percentLabel = document.getElementById("percentLabel");
    let percent = document.getElementById("percent");
    if (percentLabel.value >= 0 && percentLabel.value < 100) {
        percent.value = parseFloat(percentLabel.value).toFixed(1);
        findAttempts();
    };
};

function findChance() {
    let odds = document.getElementById("odds").value;
    let attempt = document.getElementById("attempt").value;
    let round =1;
    let chance = 1-(1-(1/odds))**attempt;
    if(chance*100 < 1){round=3};
    if(chance*100 > 99){round=2};
    let percent = (chance*100).toFixed(round);
    document.getElementById("percentLabel").value = percent;
    document.getElementById("percent").value = percent;
};
