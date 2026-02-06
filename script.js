// Search functionality for main page
document.querySelector('.search-btn').addEventListener('click', function() {
    const searchTerm = document.querySelector('.search-input').value.toLowerCase().trim();
    
    if (searchTerm) {
        // Redirect to appropriate service page based on search
        if (searchTerm.includes('plumb') || searchTerm.includes('pipe') || searchTerm.includes('water')) {
            window.location.href = 'Plumbers.html';
        } else if (searchTerm.includes('electric') || searchTerm.includes('wiring') || searchTerm.includes('light')) {
            window.location.href = 'Electricians.html';
        } else if (searchTerm.includes('carpent') || searchTerm.includes('wood') || searchTerm.includes('furniture')) {
            window.location.href = 'Carpenters.html';
        } else if (searchTerm.includes('clean') || searchTerm.includes('housekeep') || searchTerm.includes('sanit')) {
            window.location.href = 'Cleaners.html';
        } else {
            alert(`Searching for: ${searchTerm}\n\nThis would show results for "${searchTerm}" in a full implementation.`);
        }
    } else {
        alert('Please enter a service to search for');
    }
});

// Also allow Enter key in search
document.querySelector('.search-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.querySelector('.search-btn').click();
    }
});