// script.js

document.getElementById('rsvpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const amount = document.getElementById('amount').value;

    if (name && phone && amount) {
        const guestList = document.getElementById('guestNames');
        const listItem = document.createElement('li');
        listItem.textContent = `${name} (${phone}) - $${amount}`;
        guestList.appendChild(listItem);

        // Clear the form fields
        document.getElementById('rsvpForm').reset();
    }
});
