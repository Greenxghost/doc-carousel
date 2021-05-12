export class Carousel {

    index = 0;
    dataCards = [];
    dataCarousel;
    loaders = 6;

    constructor(data, curse) {
        this.dataCarousel = data;
        curse = curse || false;
        this.publishCarousel(data.container, this.createCarousel(data, curse));
    };

    /**
     *
     * @param targetContainer
     * @param template
     */
    publishCarousel(targetContainer, template) {
        let logElem = document.querySelector(`#${targetContainer}`);
        logElem.innerHTML += template;
    }


    createCarousel(data, cursed) {
        let curse = cursed || false;
        const test = true;
        const target = data.container;
        // this.drawCards();
        if (this.dataCards) {
            return `
            <div class="carousel-container ${status = curse ? 'malediction' : ''}" data-carousel="${target}" id="carousel-1">
                <div class="carousel-header">
                    <span class="page-icon material-icons"> ${data.icon} </span>
                    <div class="carousel-head-container">
                        <h2 class="carousel-title">${data.title}</h2>
                        <h3 class="carousel-subtitle">${data.subtitle}</h3>
                    </div>    
                </div>
                <data-carousel-${target} class="card-container"/>              
              ${this.startSkeleton()}
                <div class="carousel-controller">
                    <button class="carousel-controller-arrow prev" onclick="${this.showz(-1, target)}">&lt;
                    </button>
                    <button class="carousel-controller-arrow next" onclick="${this.showz(+1, target)}">&gt;
                    </button>
                </div>
            </div>
            `
        }
    }

    startSkeleton() {
        let skeletons = "";
        for (let i = 0; i < this.loaders; i++) {
            skeletons += `
        <div class="card-loader"></div>
        `
        }
        return skeletons;
    }

    /**
     * get seconds, display in format "1hr 0min" or "19:00" when lesser than 3600s
     * @param time
     * @returns {string}
     */
    timeRegulation(time) {
        let hrs = ~~(time / 3600);
        let mins = ~~((time % 3600) / 60);
        let secs = ~~time % 60;

        // Output in formats "1hr 1min" || "03:59"
        let ret = "";
        if (time >= 3600) {
            ret += `${hrs}h ${mins}m`;
        } else {
            mins = String(mins).padStart(2, "0");
            secs = String(secs).padStart(2, "0");
            ret += `${mins}:${secs}`;
        }
        return ret;
    };

    /**
     *
     * @param increase
     */
    showz(increase, target) {
        // this.index = index + increase;
        // this.index = Math.min(
        //     Math.max(index, 0),
        //     liEls.length - 1
        // );
        // console.log(target);
        // liEls[index].scrollIntoView({behavior: 'smooth'});
    }


    /**
     *
     * @param fetchCards
     * @returns {*}
     */
    drawCards() {
        if (this.dataCarousel) {
            this.dataCards =
                this.dataCarousel.fetchCard()
                    .then((data) => {
                        return data;
                    }).then((res) => {
                    this.getCards(res);
                });
        }

    };

    /**
     *
     * @param fetchCards
     * @returns {*}
     */
    getCards(res) {
        let cardTemplate = [];

        res.forEach((card) => {
            let template = `<li class="carousel-card" data-type-card="collection">
                    <div class="card-image-container ${card.cardinality = card.cardinality ? 'single' : 'collection'}">
                        <img class="img1 card-image" src="${card.image}">
                            <div class="card-type">
                                ${card.type}
                            </div>
                            <div class="card-duration">
                                ${this.timeRegulation(card.duration)}
                            </div>
                    </div>
                    <div class="card-infoarea">
                        <div class="card-title">
                            ${card.title}
                        </div>
                        <div class="card-subtext">
                            ${card.tag}
                        </div>
                    </div>
                </li>`;

            cardTemplate.push(template);
        });
        let target = document.getElementsByTagName(`data-carousel-${this.dataCarousel.container}`);
        target[0].innerHTML = cardTemplate.join(" ");
        return cardTemplate;
    };

    /** 100% not black magic
     *
     */
    voodooProtocol() {

    }


}



