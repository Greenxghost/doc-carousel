import "core-js/stable";
import "regenerator-runtime/runtime";
import './js/voodoo';
import { Carousel } from './js/carousel';
import { callApi } from './js/fakeApi';
import './scss/index.scss';
import './scss/site/styles.scss';

const options1 = {
    container: "my-carousel1",
    title: "Fresh and just uploaded content",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius",
    icon: "accessibility_new",
    fetchCard: function (chunkSize) {
       return callApi(chunkSize, false, 4000);
    }
};
const options2 = {
    container: "my-carousel2",
    title: "And another Carousel",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius",
    icon: "tungsten",
    fetchCard: function (chunkSize) {
        return callApi(chunkSize, false, 6000);
    }
};

//wait... third option? smells cursed
const options3 = {
    container: "my-carousel3",
    title: "And Now, it's voodoo time!",
    subtitle: "Tirash' moelr trical mer ki'htl azaher Col'jin teh sedar yogoth",
    icon: "visibility",
    fetchCard: function (chunkSize) {
        return callApi(chunkSize, true, 8000);
    }
};


const carousel1 = new Carousel(options1, false);
const carousel2 = new Carousel(options2);
const carousel3 = new Carousel(options3, true);
