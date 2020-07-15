function show_panel(){
	var music_box = document.getElementById("music_box");
	var file_box = document.getElementById("file_box");
	if (music_box.style.display === 'none' && file_box.style.display === 'block') {
			music_box.style.display = 'block';
			file_box.style.display = 'none';
	}
	else {
		file_box.style.display = 'block';
		music_box.style.display = 'none'
	}
	
}
