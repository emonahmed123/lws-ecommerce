
// This utility function constructs a URL for an image asset   



const getImgUrl = (imagePath) => {
    return new URL(`../assets/img/${imagePath}`, import.meta.url).href;
};

export { getImgUrl };
// Example usage:       