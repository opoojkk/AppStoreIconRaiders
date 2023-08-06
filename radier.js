// Get the first <picture> element
let picture = document.querySelector('picture');

// Get the first <source> element inside the <picture> element
let source = picture.querySelector('source');

// Retrieve the 'srcset' attribute from the <source> element and split it into an array
let srcset = source.getAttribute('srcset').split(',');

const resultMap = new Map();

srcset.forEach(item => {
    // Remove all spaces before 'https'
    const httpsIndex = item.indexOf('https');
    if (httpsIndex > 0) {
        item = item.substring(0, httpsIndex).replace(/\s+/g, '') + item.substring(httpsIndex);
    }
    const parts = item.split(' ');

    if (parts.length === 2) {
        const value = parts[0];
        const key = parts[1];
        resultMap.set(key, value);
    } else {
        console.warn(`Ignoring invalid item: ${item}`);
    }
});

// Print the results
for (const [key, value] of resultMap) {
    console.log(`size: ${key}, url: ${value}`);
}
