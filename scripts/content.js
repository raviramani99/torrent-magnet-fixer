console.log("content.js called.... ");

var magnets = document.querySelectorAll('a[title="Magnet link"],a[title="Torrent magnet link"]');

for (let i = 0; i < magnets.length; i++) {
    const linkElement = magnets[i];

    // Get the current href attribute
    const currentHref = linkElement.getAttribute('href');

    // Remove the unwanted part from the href
    const modifiedHref = currentHref.replace('https://mylink.cx/?url=', '');

    // Decode the modifiedHref
    const decodedHref = decodeURIComponent(modifiedHref);

    // Create a new <a> element with the decoded href
    const newLinkElement = document.createElement('a');
    newLinkElement.setAttribute('href', decodedHref);

    // Copy the inner HTML of the original <a> element to the new one
    newLinkElement.innerHTML = linkElement.innerHTML;
    newLinkElement.classList.add('pr-magnet-link');

    // Append the new <a> element after the original one
    linkElement.parentNode.insertBefore(newLinkElement, linkElement.nextSibling);

    // Add event listener to the newLinkElement
    newLinkElement.addEventListener('click', function () {
        // Copy the decoded href to the clipboard
        const tempInput = document.createElement('input');
        tempInput.setAttribute('value', decodedHref);
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        alert('Decoded href copied to clipboard!');
    });


}