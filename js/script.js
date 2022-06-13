$(document).ready(function () {

	const SEC01_IMG = $('.sec01_img');
	const SEC02_IMG = $('.sec02_main');
	const SEC03_IMG01 = $('.sec03_img01');
	const SEC03_IMG02 = $('.img_wrap');
	const SEC04_IMG = $('.sec04_img');
	const SEC05_IMG = $('.sec05_img');
	const SEC06_IMG01 = $('.sec06_debt');
	const SEC06_IMG02 = $('.sec06_heart');
	const SEC07_IMG = $('.sec07_verti');
	const SEC08_LOGO = $('.sec08_img_wrap img');


	// 1-1.scroll 변수 값에 대한 정의
		const scrollBody = $('#kakaowrap');//부모 스크롤 엘리먼트
		let content =scrollBody.find('section');//변수에 모션 그래픽 캐릭터 지정
		const NAV_LI = $('nav ul li')



		
			//1-2 스크롤 할때 변해야 할 값들
			let winScrollTop; //스크롤 할때 높이값을 담을 변수
			let headerHeight = $('header').height();

			
			//2.각 섹션의 시작하는 값을 구해줄 변수 생성
			
			const sec1Top = $('#sec01').offset().top + headerHeight;
			const sec2Top = $('#sec02').offset().top + headerHeight;
			const sec3Top = $('#sec03').offset().top + headerHeight;
			const sec4Top = $('#sec04').offset().top + headerHeight;
			const sec5Top = $('#sec05').offset().top + headerHeight;
			const sec6Top = $('#sec06').offset().top + headerHeight;
			const sec7Top = $('#sec07').offset().top + headerHeight;
			const sec8Top = $('#sec08').offset().top + headerHeight;
			// const sec9Top = $('#sec09').offset().top + headerHeight;
			

   // 3. 최초 실행함수 만들기
			function init(){
				motion();//4.motion함수 호출
			}

			// 4 init함수 호출
			init()

			// 5.화면 스크롤시 init함수 호출
			$(window).scroll(init)


			// 6.motion 함수
			function motion(){
				setProperty()//스크롤할때 변해야 할 높이값들 모음
				changeSection()//스크롤 조건이 들어가는 함수
			}

 // 7. 스크롤할때 변해야 할 값들의 변수를 포함 한 함수.
			function setProperty(){
				winScrollTop = $(window).scrollTop();
			}

			// 8.현재의 섹션에 왔을때 불이 켜지게 하는 함수 
			
			function setContent(index){

				content.removeClass('active');
				content.eq(index-1).addClass('active');

				NAV_LI.removeClass('active')
				NAV_LI.eq(index-1).addClass('active')
			}


			 //9.changeSection 함수 scoll시 현재의 높이값이 각 섹션의 높이값과 비교해서 조건에 맞으면 실행하게 하는 함수 
			function changeSection(){

						if(winScrollTop < sec1Top){
							setContent(1)
							sec01()
						}
						else if(winScrollTop >= sec1Top && winScrollTop < sec2Top){
							setContent(2)
							sec02()
						}
						else if(winScrollTop >= sec2Top && winScrollTop < sec3Top){
							setContent(3)
							sec03()
						}
						else if(winScrollTop >= sec3Top && winScrollTop < sec4Top){
							setContent(4)
							sec04()
						}
						else if(winScrollTop >= sec4Top && winScrollTop < sec5Top){
							setContent(5)
							sec05()
						}
						else if(winScrollTop >= sec5Top && winScrollTop < sec6Top){
							setContent(6)
							sec06()
						}
						else if(winScrollTop >= sec6Top && winScrollTop < sec7Top){
							setContent(7)
							sec07()
						}
						else if(winScrollTop >= sec7Top && winScrollTop < sec8Top){
							setContent(8)
							sec08()
						}

			}

	// 00 section 함수

	// 01 section
	function sec01() {
		SEC01_IMG.transition({
			opacity: 1
		}, 1000)

	}
	// 02 section
	function sec02() {

		SEC02_IMG.transition({
			opacity:1,
			x:20}, 1000)

	}
	// 03 section
	function sec03() {

		SEC03_IMG01.transition({
			opacity: 1,
			x: 30
		}, 1000);

		SEC03_IMG02.delay(500).transition({
			opacity:1,
			x: -30
		}, 1000)

	}
		// 04 section
	function sec04() {

		SEC04_IMG.transition({
			opacity: 1
		}, 1000);

	}
	// 05 section
	function sec05() {

		SEC05_IMG.transition({
			opacity:1,
			y: -40
		}, 1000)

	}
	// 06 section
	function sec06() {

		SEC06_IMG01.transition({
			opacity: 1,
			x: 120
		}, 1000);

		SEC06_IMG02.delay(1000).transition({
			opacity: 1,
			x: -120
		}, 1000);

	}
  // 07 section
	function sec07() {

		SEC07_IMG.transition({
			opacity: 1,
		}, 1000)


	}
	// 08 section
	function sec08(){

		SEC08_LOGO.transition({
			opacity: 1,
			perspective: '100px',
  			rotateY: '360deg'
		}, 2000)

	}




})