// script.js
document.getElementById('viewJobsBtn').addEventListener('click', function(event) {
    event.preventDefault();
    const jobsSection = document.getElementById('jobs');
    jobsSection.scrollIntoView({ behavior: 'smooth' });
});
