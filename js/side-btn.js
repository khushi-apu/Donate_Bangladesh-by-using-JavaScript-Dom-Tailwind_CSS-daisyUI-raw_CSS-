let isFAQVisible = false;

document.getElementById('blog-btn').addEventListener('click', function() {
    console.log('ok')
    isFAQVisible = !isFAQVisible;
    

    document.getElementById('blog-container').classList.toggle('hidden', !isFAQVisible);
    document.getElementById('three-card-container').classList.toggle('hidden', isFAQVisible);
    document.getElementById('history-container').classList.toggle('hidden', isFAQVisible);
    document.getElementById('history_and_donation_container').classList.toggle('hidden', isFAQVisible);
});