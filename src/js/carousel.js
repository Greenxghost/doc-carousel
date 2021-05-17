export class Carousel {

    visualIndex = 0;
    dataCards = [];
    dataCarousel;
    loaders = 6; //skeleton numbers
    dataContainer = [];
    carouselContainer;

    constructor(data, curse) {
        this.dataCarousel = data;
        curse = curse || false;
        this.publishCarousel(data.container, this.createCarousel(data, curse));
    };

    /**
     * @description
     * @param targetContainer
     * @param template
     */
    publishCarousel(targetContainer, template) {
        let logElem = document.querySelector(`#${targetContainer}`);
        logElem.innerHTML += template;
    }

    /**
     * @description
     * @param data
     * @param cursed
     * @returns {string}
     */
    createCarousel(data, cursed) {
        let curse = cursed || false;
        const target = data.container;
        this.drawCards();
        if (this.dataCards) {
            return `
            <div class="carousel-container ${status = curse ? 'malediction' : ''}" data-carousel="${target}" id="carousel-1">
                <div class="carousel-header">
                    <span class="page-icon material-icons"> ${data.icon} </span>
                    <div class="carousel-head-container">
                        <h2 class="carousel-title">${data.title} &#62; </h2>
                        <h3 class="carousel-subtitle">${data.subtitle}</h3>
                    </div>    
            </div>
            <div class="carousel-viewer">
                <data-carousel-${target} class="card-container"/>              
              ${this.startSkeleton()}
            </div>
           </div>
            `
        }
    }

    /**
     * @description generate N skeletons while loading cards
     * @returns {string}
     */
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
     * @description get seconds, display in format "1hr 0min" or "19:00" when lesser than 3600s
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
     * @description prepare cards and call fetchCard/fakeAPI
     * @param fetchCards
     * @returns {*}
     */
    drawCards() {
        if (this.dataCarousel) {
            this.dataCards =
                this.dataCarousel.fetchCard(this.randomNumber())
                    .then((data) => {
                        return data;
                    }).then((res) => {
                    this.getCards(res);
                });
        }

    };

    /**
     * @description creates the template for cards and inserts them
     * @param res
     * @returns {*}
     */
    getCards(res) {
        let cardTemplate = [];

        res.forEach((card, index) => {
            let template = `<div class="carousel-card" data-type-card="${card.cardinality ? card.cardinality : 'single'}" data-index-card="${index}">
                    <div class="card-image-container">
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
                            ${card.lang ? card.lang : ''}
                        </div>
                    </div>
                    ${card.cardinality === 'collection' ? this.createCollectionBorder() : ''}
                </div>
`;

            cardTemplate.push(template);
        });


        //generating buttons
        const b1 = document.createElement("button");
        b1.classList.add("carousel-controller-arrow", "prev");
        b1.type = "button";
        b1.innerHTML = "&lt;";
        b1.addEventListener("click", () => this.scroll(-1));

        const b2 = document.createElement("button");
        b2.classList.add("carousel-controller-arrow", "next");
        b2.type = "button";
        b2.innerHTML = "&gt;";
        b2.addEventListener("click", () => this.scroll(1));

        let target = document.getElementsByTagName(`data-carousel-${this.dataCarousel.container}`);
        target[0].innerHTML = cardTemplate.join(" ");
        target[0].parentElement.appendChild(b1);
        target[0].parentElement.appendChild(b2);
        this.carouselContainer = target[0].querySelectorAll(".carousel-card");

    };


    /**
     * @description create double div for "collection" type cards
     * @returns {string}
     */
    createCollectionBorder() {
        return `
        <div class="collection-sidecard"> </div>
        <div class="collection-sidecard-2"> </div>
        `
    }

    /**
     * @description 100% not black magic
     */
    voodooProtocol() {

    }


    /**
     * @description  returns a random integer from 1 to 3
     * @returns {number}
     */
    randomNumber() {
        return Math.floor(Math.random() * 3) + 1;
    }


    //CAROUSEL CONTROLLER


    /**
     *
     * @param direction
     */
    scroll(direction) {
        const tileWidth = 300;
        var element = document.getElementsByTagName(`data-carousel-${this.dataCarousel.container}`)[0];
        let value = (tileWidth)*direction;
        let initialOffset = element.scrollLeft;
        let newOffset = initialOffset + value;

        if (newOffset !== 0){
            element.offsetParent.querySelectorAll(".prev")[0].style.display = "block";
        }else{
            element.offsetParent.querySelectorAll(".prev")[0].style.display = "none";
        }

        if (newOffset >= (element.scrollWidth - element.clientWidth)){
            element.offsetParent.querySelectorAll(".next")[0].style.display = "none";
        }else{
            element.offsetParent.querySelectorAll(".next")[0].style.display = "block";

        }
        element.scrollLeft = newOffset;
    }




}



