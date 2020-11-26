

$(document).ready(function () {
	//JS-ФУНКЦИЯ ОПРЕДЕЛЕНИЯ ПОДДЕРЖКИ WEBP
function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

	// function ibg(){
// 	$.each($('.ibg'), function(){
// 		if($(this).find('img')>0){
// 			$(this).css('background-image', 'url("'+$(this).find('img').attr('src')+'")');
// 		}
// 	})
// }
// ibg();

function inBg(){
	let ibg = document.querySelectorAll('.ibg');
	for(let i =0; i < ibg.length; i++){
		let src = ibg[i].getAttribute('src');
		let webp = src.slice(0, src.length -3);

		//setAttribute - добавить атрибут
		ibg[i].setAttribute('hidden', 'hidden');
		//parentNode - ищем радителя
		ibg[i].parentNode.parentNode.style.backgroundImage = 'url(' + src + ')';
		//добавляем webp
		ibg[i].parentNode.parentNode.style.backgroundImage = 'url(' + webp + 'webp' + ')';
		
		
	}
}
inBg();

	/*########## Smooth scrolling ##########*/
$(".menu, .intro").on("click", "a", function (event) {
	//отменяем стандартную обработку нажатия по ссылке
	// event.preventDefault(); ////
	//забираем идентификатор бока с атрибута href
	var id = $(this).attr('href'),
		//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top;
	//анимируем переход на расстояние - top за 1500 мс
	$('body,html').animate({ scrollTop: top }, 2000);

});
	/*########## Burger ##########*/
$('.header__burger').click(function (even) {
	$('.header__burger').toggleClass('header__burger--active');
	$('.header__menu').toggleClass('header__menu--active');
	$('body').toggleClass('stop-scroll');

});
	/*########## Spoler ##########*/
$('.services__item-content').click(function (event) {
	$(this).toggleClass('active').next().slideToggle(500);
});

$('.item-blog__image').click(function (event) {
	$(this).toggleClass('active').next().slideToggle(500);

});
	/*########## Slick slider ##########*/
$('.about__slider').slick({
	arrows: false,
	dots: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	infinite: true,
	autoplay: true,
	speed: 1500,
	adaptiveHeight: true,
});
	/*########## Dinamic Background ##########*/
function dinamicBackground(item1, item2) {
	//item1 - img которую нужно сделать background(ом);
	// item2 - кому нужно задать backgroundж
	let fromImg = document.querySelector(`.${item1}`);
	let whereImg = document.querySelector(`.${item2}`);
	let src = fromImg.getAttribute('src');
	let webp = src.slice(0, src.length - 3);
	whereImg.style.backgroundImage = `url("${webp}webp")`;
}
	/*########### Create Color Text ###################*/
/*
Color format: <!-- Color format: data-colors="#fde557_#e5248a -->
*/
function colors() {
	// получаем элементы с атрибутом Data-colors
	let element = document.querySelectorAll('[data-colors]');
	element.forEach(function(item){
		createColorText(item);
	});
};

function createColorText(item) {
	//Получаем значения цветов 
	let colors = item.getAttribute('data-colors').split('_');
	//Получаем текст элемента 
	let text;
	if (item.innerHTML != ' ') {
		text = item.innerHTML.split(' ');
		 //очищаем элемент от текста 
		item.innerHTML = ' ';
		// добавляем цветной текст 
		for (let i = 0; i < text.length; i++) {
			item.innerHTML += '<span style = "color:' + colors[Math.floor(Math.random() * colors.length)] +'">' + text[i] +'</span> ';

		}
	} else{
		return false;
	}
}
/*##############################*/
	
/*########## Slogan ##########*/
	dinamicBackground("slogan__bg", "slogan__title");
	colors();
});