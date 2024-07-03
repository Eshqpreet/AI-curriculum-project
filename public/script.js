
document.getElementById('submitBtn').addEventListener('click', async () => {
    const courseTitle = document.getElementById('courseTitle').value;
    const output = document.getElementById('output');
    output.innerHTML = '<p>Loading...</p>';

    try {
        const response = await fetch('/generate-content', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ courseTitle })
        });

        const data = await response.json();
        const content = data.content;
        output.innerHTML = `<pre>${content}</pre><button id="copyBtn">Copy to Clipboard</button>`;

        document.getElementById('copyBtn').addEventListener('click', () => {
            navigator.clipboard.writeText(content);
            alert('Content copied to clipboard!');
        });
    } catch (error) {
        output.innerHTML = '<p>Error generating content. Please try again.</p>';
        console.error(error);
    }
});
