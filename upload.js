document.getElementById('upload-btn').addEventListener('click', () => {
    //display section to upload images
    document.getElementById('up-div').style.display = "block";
});

document.getElementById('images').addEventListener('change', saveImages);//save images whenever images are added in input 

function saveImages() {
    const fileInput = document.getElementById('images');
    const files = fileInput ? fileInput.files : []; // if fileInput is accessed get files from it otherwise set an empty array

    const reader = new FileReader();
    let imgArr = JSON.parse(localStorage.getItem('storedImages')) || [];//fetch images if already exists in localstorage

    Array.from(files).forEach((file, index) => {
        reader.onload = (e) => {
            imgArr.push(e.target.result); // Convert file to base64

            if (index === files.length - 1) {
                localStorage.setItem('storedImages', JSON.stringify(imgArr));
                alert('Image Uploaded Successfully!');
                displayImages();// call the function from uploadedImages.js to display uploaded images
            }
        };
        reader.readAsDataURL(file);
    });
}

function deleteAllImages() {
    localStorage.removeItem('storedImages');
    alert('Images deleted successfully');
}
document.getElementById('delete').addEventListener('click', () => deleteAllImages());

