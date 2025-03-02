document.addEventListener('DOMContentLoaded', () => {
    const experienceItems = document.querySelectorAll('#experience li');
    experienceItems.forEach(item => {
        item.addEventListener('click', function() {
            const detailParagraph = document.createElement('p');
            detailParagraph.textContent = "More on what I've learned " + this.firstChild.nodeValue;
            this.appendChild(detailParagraph);
        });
    });
});