// membuat image gallery
// menggunakan event bubbling
const container = document.querySelector('.container');  // mengambil element dengan class container
const jumbo = document.querySelector('.jumbo');  // mengambil element dengan class jumbo
const thumbs = document.querySelectorAll('.thumb');  // mengambil semua element yang ada class thumb

container.addEventListener('click', function(e) {
	// cek apakah yang di klik adalah thumb
	if (e.target.className == 'thumb') {
		jumbo.src = e.target.src;  // mengubah src pada img jumbo
		jumbo.classList.add('fade');  // memeberikan clase fade 
		
		// menghilangkan class fade agar fungsi class fade mulai dari awal lagi
		setTimeout(function(){
			jumbo.classList.remove('fade');  
		}, 500);


		thumbs.forEach(function(thumb) {
			// cara 1
			// if (thumb.classList.contains('active')) {
			// 	thumb.classList.remove('active');
			// }

			// cara 2
			thumb.className = 'thumb';
		});

		e.target.classList.add('active'); // menambah class active agar pas di klik masih focus
	}
});