
// This utility function constructs a URL for an image asset   

function getImgUrl(name) {

    return new URL(`../assets/img/${name}`, import.meta.url).href
}

export { getImgUrl };


// Example usage:       