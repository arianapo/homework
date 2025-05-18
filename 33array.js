function combineArrays(arr1, arr2) {
    let combined = [];
    for (let i = 0; i < arr1.length; i++) {
        combined.push(arr1[i]);
    }
    for (let j = 0; j < arr2.length; j++) {
        combined.push(arr2[j]);
    }
    return combined;
}