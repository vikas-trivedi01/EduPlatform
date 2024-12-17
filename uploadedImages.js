function displayImages() {
    let storedImg = JSON.parse(localStorage.getItem('storedImages')) || [];
    const imageContainer = document.getElementById('imageContainer');
    const storedDiv = document.getElementById('storedImagesSection');

    while (imageContainer.firstChild) {
        imageContainer.removeChild(imageContainer.firstChild);
    }

    if (storedImg.length > 0) {
        storedDiv.style.display = 'block';

        storedImg.forEach((image, index) => {
            const img = document.createElement('img');
            const deleteSpan = document.createElement('span');

            img.src = image;
            img.style.width = "250px";
            img.style.height = "200px";
            img.classList.add('rounded', 'mt-5', 'mb-5', 'ms-5', 'me-2');

            deleteSpan.innerHTML = '<i class="fa-regular fa-trash-can mt-5 me-5 deleteIcon"></i>';
            imageContainer.appendChild(img);

            if ((window.location.href.endsWith('upload.html'))) { //check if it's teacher view or not
                imageContainer.appendChild(deleteSpan);

                deleteSpan.addEventListener('click', () => {
                    storedImg.splice(index, 1);
                    localStorage.setItem('storedImages', JSON.stringify(storedImg));
                    window.location.reload();//reload to see changes

                    alert(`Image no.${index + 1} deleted successfully`);
                    displayImages();
                });
            }
        });

    } else {
        if (storedImg.length === 0 && !imageContainer.children.length) {
            storedDiv.style.display = 'none';//if storedImg's length is < 0 then hide the storedDiv
            alert('No images uploaded');
        }
    }

    if (imageContainer.children.length === 0) {
        document.getElementById('deleteBtn').style.display = 'none';//hide delete button if imageContainer is empty(i.e. No images uploaded)
    }
}

window.onload = function () {
    displayImages();//fetch images from localstroge if already exists
};
