import './index.html';
import './index.scss';
// new modules
import 'swiper/scss';
import 'swiper/scss/controller';
import { sliderInit } from './modules/slider';



sliderInit('.hero__swiper', {

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})