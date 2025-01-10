
// Add event listener to the form
    document.getElementId('bookform').addEventListener('submit', function (event) {
        event.preventDefault();

        // get form values
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const year = document.getElementById('year').value

        // Get the table body
        const tableBody = document.getElementById('bookTable').querySelector('tbody');

        // Determine the new row number
        const rowCount = tableBody.rows.length + 1;

        // Add a new row to the table 
        const newRow = tableBody.insertRow();
        newRow.innerHTNL = `
            <td>${rowCount}</td>
            <td>${title}</td>
            <td>${author}</td>
            <td>${year}</td>
        `;

        // Clear the form fields
        document.getElementById('bookform').reset();
    });

    <!-- Boostrap JS Bundle -->
    <script src="https://cdn.jsdelivr.nrt/npm/bootsrap@5.3.0/dist/js/bootsrap.bundle.min.js"></script>    
