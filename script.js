document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const searchBar = document.getElementById('search-bar');
    
    let photos = [
        { src: 'photo1.jpg', tags: ['nature'] },
{ src: 'photo2.jpg', tags: ['nature'] },
{ src: 'photo3.jpg', tags: ['nature'] },
{ src: 'photo4.jpg', tags: ['nature'] },
{ src: 'photo5.jpg', tags: ['nature'] },
{ src: 'photo6.jpg', tags: ['nature'] },
{ src: 'photo7.jpg', tags: ['nature'] },
{ src: 'photo8.jpg', tags: ['nature'] },
{ src: 'photo9.jpg', tags: ['nature'] },
{ src: 'photo10.jpg', tags: ['nature'] },
{ src: 'photo11.jpg', tags: ['nature'] },
{ src: 'photo12.jpg', tags: ['nature'] },
{ src: 'photo13.jpg', tags: ['nature'] },
{ src: 'photo14.jpg', tags: ['nature'] },
{ src: 'photo15.jpg', tags: ['nature'] },
{ src: 'photo16.jpg', tags: ['nature'] },
{ src: 'photo17.jpg', tags: ['nature'] },
{ src: 'photo18.jpg', tags: ['nature'] },
{ src: 'photo19.jpg', tags: ['nature'] },
{ src: 'photo20.jpg', tags: ['nature'] },
{ src: 'photo21.jpg', tags: ['nature'] },
{ src: 'photo22.jpg', tags: ['nature'] },
{ src: 'photo23.jpg', tags: ['nature'] },
{ src: 'photo24.jpg', tags: ['nature'] },
{ src: 'photo25.jpg', tags: ['nature'] },
{ src: 'photo26.jpg', tags: ['nature'] },
{ src: 'photo27.jpg', tags: ['nature'] },
{ src: 'photo28.jpg', tags: ['nature'] },
{ src: 'photo29.jpg', tags: ['nature'] },
{ src: 'photo30.jpg', tags: ['nature'] },
{ src: 'photo31.jpg', tags: ['nature'] },
{ src: 'photo32.jpg', tags: ['nature'] },
{ src: 'photo33.jpg', tags: ['nature'] },
{ src: 'photo34.jpg', tags: ['nature'] },
{ src: 'photo35.jpg', tags: ['nature'] },
{ src: 'photo36.jpg', tags: ['nature'] },
{ src: 'photo37.jpg', tags: ['nature'] },
{ src: 'photo38.jpg', tags: ['nature'] },
{ src: 'photo39.jpg', tags: ['nature'] },
{ src: 'photo40.jpg', tags: ['nature'] },
{ src: 'photo41.jpg', tags: ['nature'] },
{ src: 'photo42.jpg', tags: ['nature'] },
{ src: 'photo43.jpg', tags: ['nature'] },
{ src: 'photo44.jpg', tags: ['nature'] },
{ src: 'photo45.jpg', tags: ['nature'] },
{ src: 'photo46.jpg', tags: ['nature'] },
{ src: 'photo47.jpg', tags: ['nature'] },
{ src: 'photo48.jpg', tags: ['nature'] },
{ src: 'photo49.jpg', tags: ['nature'] },
{ src: 'photo50.jpg', tags: ['nature'] },
{ src: 'photo51.jpg', tags: ['nature'] },
{ src: 'photo52.jpg', tags: ['nature'] },
{ src: 'photo53.jpg', tags: ['nature'] },
{ src: 'photo54.jpg', tags: ['nature'] },
{ src: 'photo55.jpg', tags: ['nature'] },
{ src: 'photo56.jpg', tags: ['nature'] },
{ src: 'photo57.jpg', tags: ['nature'] },
{ src: 'photo58.jpg', tags: ['nature'] },
{ src: 'photo59.jpg', tags: ['nature'] },
{ src: 'photo60.jpg', tags: ['nature'] },
{ src: 'photo61.jpg', tags: ['nature'] },
{ src: 'photo62.jpg', tags: ['nature'] },
{ src: 'photo63.jpg', tags: ['nature'] },
{ src: 'photo64.jpg', tags: ['nature'] },
{ src: 'photo65.jpg', tags: ['nature'] },
{ src: 'photo66.jpg', tags: ['nature'] },
{ src: 'photo67.jpg', tags: ['nature'] },
{ src: 'photo68.jpg', tags: ['nature'] },
{ src: 'photo69.jpg', tags: ['nature'] },
{ src: 'photo70.jpg', tags: ['nature'] },
{ src: 'photo71.jpg', tags: ['nature'] },
{ src: 'photo72.jpg', tags: ['nature'] },
{ src: 'photo73.jpg', tags: ['nature'] },
{ src: 'photo74.jpg', tags: ['nature'] },
{ src: 'photo75.jpg', tags: ['nature'] },
{ src: 'photo76.jpg', tags: ['nature'] },
{ src: 'photo77.jpg', tags: ['nature'] },
{ src: 'photo78.jpg', tags: ['nature'] },
{ src: 'photo79.jpg', tags: ['nature'] },
{ src: 'photo80.jpg', tags: ['nature'] },
{ src: 'photo81.jpg', tags: ['nature'] },
{ src: 'photo82.jpg', tags: ['nature'] },
{ src: 'photo83.jpg', tags: ['nature'] },
{ src: 'photo84.jpg', tags: ['nature'] },
{ src: 'photo85.jpg', tags: ['nature'] },
{ src: 'photo86.jpg', tags: ['nature'] },
{ src: 'photo87.jpg', tags: ['nature'] },
{ src: 'photo88.jpg', tags: ['nature'] },
{ src: 'photo89.jpg', tags: ['nature'] },
{ src: 'photo90.jpg', tags: ['nature'] },
{ src: 'photo91.jpg', tags: ['nature'] },
{ src: 'photo92.jpg', tags: ['nature'] },
{ src: 'photo93.jpg', tags: ['nature'] },
{ src: 'photo94.jpg', tags: ['nature'] },
{ src: 'photo95.jpg', tags: ['nature'] },
{ src: 'photo96.jpg', tags: ['nature'] },
{ src: 'photo97.jpg', tags: ['nature'] },
{ src: 'photo98.jpg', tags: ['nature'] },
{ src: 'photo99.jpg', tags: ['nature'] },
{ src: 'photo100.jpg', tags: ['nature'] },
{ src: 'photo101.jpg', tags: ['nature'] },
{ src: 'photo102.jpg', tags: ['nature'] },
{ src: 'photo103.jpg', tags: ['nature'] },
{ src: 'photo104.jpg', tags: ['nature'] },
{ src: 'photo105.jpg', tags: ['nature'] },
{ src: 'photo106.jpg', tags: ['nature'] },
{ src: 'photo107.jpg', tags: ['nature'] },
{ src: 'photo108.jpg', tags: ['nature'] },
{ src: 'photo109.jpg', tags: ['nature'] },
{ src: 'photo110.jpg', tags: ['nature'] },
{ src: 'photo111.jpg', tags: ['nature'] },
{ src: 'photo112.jpg', tags: ['nature'] },
{ src: 'photo113.jpg', tags: ['nature'] },
{ src: 'photo114.jpg', tags: ['nature'] },
{ src: 'photo115.jpg', tags: ['nature'] },
{ src: 'photo116.jpg', tags: ['nature'] },
{ src: 'photo117.jpg', tags: ['nature'] },
{ src: 'photo118.jpg', tags: ['nature'] },
{ src: 'photo119.jpg', tags: ['nature'] },
{ src: 'photo120.jpg', tags: ['nature'] },
{ src: 'photo121.jpg', tags: ['nature'] },
{ src: 'photo122.jpg', tags: ['nature'] },
{ src: 'photo123.jpg', tags: ['nature'] },
{ src: 'photo124.jpg', tags: ['nature'] },
{ src: 'photo125.jpg', tags: ['nature'] },
{ src: 'photo126.jpg', tags: ['nature'] },
{ src: 'photo127.jpg', tags: ['nature'] },
{ src: 'photo128.jpg', tags: ['nature'] },
{ src: 'photo129.jpg', tags: ['nature'] },
{ src: 'photo130.jpg', tags: ['nature'] },
{ src: 'photo131.jpg', tags: ['nature'] },
{ src: 'photo132.jpg', tags: ['nature'] },
{ src: 'photo133.jpg', tags: ['nature'] },
{ src: 'photo134.jpg', tags: ['nature'] },
{ src: 'photo135.jpg', tags: ['nature'] },
{ src: 'photo136.jpg', tags: ['nature'] },
{ src: 'photo137.jpg', tags: ['nature'] },
{ src: 'photo138.jpg', tags: ['nature'] },
{ src: 'photo139.jpg', tags: ['nature'] },
{ src: 'photo140.jpg', tags: ['nature'] },
{ src: 'photo141.jpg', tags: ['nature'] },
{ src: 'photo142.jpg', tags: ['nature'] },
{ src: 'photo143.jpg', tags: ['nature'] },
{ src: 'photo144.jpg', tags: ['nature'] },
{ src: 'photo145.jpg', tags: ['nature'] },
{ src: 'photo146.jpg', tags: ['nature'] },
{ src: 'photo147.jpg', tags: ['nature'] },
{ src: 'photo148.jpg', tags: ['nature'] },
{ src: 'photo149.jpg', tags: ['nature'] },
{ src: 'photo150.jpg', tags: ['nature'] },
{ src: 'photo151.jpg', tags: ['nature'] },
{ src: 'photo152.jpg', tags: ['nature'] },
{ src: 'photo153.jpg', tags: ['nature'] },
{ src: 'photo154.jpg', tags: ['nature'] },
{ src: 'photo155.jpg', tags: ['nature'] },
{ src: 'photo156.jpg', tags: ['nature'] },
{ src: 'photo157.jpg', tags: ['nature'] },
{ src: 'photo158.jpg', tags: ['nature'] },
{ src: 'photo159.jpg', tags: ['nature'] },
{ src: 'photo160.jpg', tags: ['nature'] },
{ src: 'photo161.jpg', tags: ['nature'] },
{ src: 'photo162.jpg', tags: ['nature'] },
{ src: 'photo163.jpg', tags: ['nature'] },
{ src: 'photo164.jpg', tags: ['nature'] },
{ src: 'photo165.jpg', tags: ['nature'] },
{ src: 'photo166.jpg', tags: ['nature'] },
{ src: 'photo167.jpg', tags: ['nature'] },
{ src: 'photo168.jpg', tags: ['nature'] },
{ src: 'photo169.jpg', tags: ['nature'] },
{ src: 'photo170.jpg', tags: ['nature'] },
{ src: 'photo171.jpg', tags: ['nature'] },
{ src: 'photo172.jpg', tags: ['nature'] },
{ src: 'photo173.jpg', tags: ['nature'] },
{ src: 'photo174.jpg', tags: ['nature'] },
{ src: 'photo175.jpg', tags: ['nature'] },
{ src: 'photo176.jpg', tags: ['nature'] },
{ src: 'photo177.jpg', tags: ['nature'] },
{ src: 'photo178.jpg', tags: ['nature'] },
{ src: 'photo179.jpg', tags: ['nature'] },
{ src: 'photo180.jpg', tags: ['nature'] },
{ src: 'photo181.jpg', tags: ['nature'] },
{ src: 'photo182.jpg', tags: ['nature'] },
{ src: 'photo183.jpg', tags: ['nature'] },
{ src: 'photo184.jpg', tags: ['nature'] },
{ src: 'photo185.jpg', tags: ['nature'] },
{ src: 'photo186.jpg', tags: ['nature'] },
{ src: 'photo187.jpg', tags: ['nature'] },
{ src: 'photo188.jpg', tags: ['nature'] },
{ src: 'photo189.jpg', tags: ['nature'] },
{ src: 'photo190.jpg', tags: ['nature'] },
{ src: 'photo191.jpg', tags: ['nature'] },

        // Add more photos as needed
    ];

    const loadPhotos = () => {
        gallery.innerHTML = ''; // Clear previous content

        photos.forEach((photo, index) => {
            const photoDiv = document.createElement('div');
            photoDiv.classList.add('photo');

            const img = document.createElement('img');
            img.src = photo.src;
            img.alt = photo.src;
            img.setAttribute('data-index', index);

            const tagsDiv = document.createElement('div');
            tagsDiv.classList.add('tags');
            tagsDiv.innerHTML = photo.tags.join(', ');

            const tagInput = document.createElement('input');
            tagInput.type = 'text';
            tagInput.classList.add('tag-input');
            tagInput.value = photo.tags.join(', ');

            img.addEventListener('click', () => {
                tagInput.style.display = 'block';
            });

            tagInput.addEventListener('blur', () => {
                const newTags = tagInput.value.split(',').map(tag => tag.trim());
                photos[index].tags = newTags;
                tagsDiv.innerHTML = newTags.join(', ');
                tagInput.style.display = 'none';
                saveTags();
            });

            img.addEventListener('dblclick', () => {
                enterFullScreen(img);
            });

            photoDiv.appendChild(img);
            photoDiv.appendChild(tagsDiv);
            photoDiv.appendChild(tagInput);
            gallery.appendChild(photoDiv);
        });
    };

    const enterFullScreen = (element) => {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) { // Firefox
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) { // Chrome, Safari, and Opera
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) { // IE/Edge
            element.msRequestFullscreen();
        }
    };

    const saveTags = () => {
        localStorage.setItem('photos', JSON.stringify(photos));
    };

    const loadTags = () => {
        const savedPhotos = localStorage.getItem('photos');
        if (savedPhotos) {
            photos = JSON.parse(savedPhotos);
        }
    };

    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        document.querySelectorAll('.photo').forEach((photoDiv, index) => {
            const tags = photos[index].tags.join(', ').toLowerCase();
            if (tags.includes(searchTerm)) {
                photoDiv.style.display = 'block';
            } else {
                photoDiv.style.display = 'none';
            }
        });
    });

    loadTags();
    loadPhotos();
});
