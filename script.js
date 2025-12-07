function order(productName){document.getElementById('modalProduct').innerText=productName;document.querySelector('.modal-bg').style.display='flex';}
function closeModal(){document.querySelector('.modal-bg').style.display='none';}
document.getElementById('contactForm').addEventListener('submit',function(e){e.preventDefault();alert('Ваше повідомлення надіслано!');});