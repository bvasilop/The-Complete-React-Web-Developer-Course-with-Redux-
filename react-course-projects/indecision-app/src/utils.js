console.log('utils.js is running');


export const square = (x) => x * x; // must export a variable declaration inline

export const add = (a,b) => a + b;

// export{ square, add }; // must individually export variables and functions to avoid polluting the global space // same as above

// exports - default export - named export