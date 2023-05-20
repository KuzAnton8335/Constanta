import Swiper, { Navigation, Autoplay } from "swiper";

const params = {
	spaceBetween: 20,
	loop: true,
	autoplay: {
		delay: 3500,
		disableInteraction: false,
	},

	slidesPerView: 1,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	modules: [Autoplay, Navigation]
}

export const sliderInit = (selectorSlider, newParams) => {
	new Swiper(selectorSlider, {
		...params,
		...newParams,
	})
}