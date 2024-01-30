//Your task is to write a function maskify, which changes all but the last four characters into '#'.

function maskify(cc) {
    if (cc.length <= 4) {
        return cc
    }
    to_mask_slice = cc.slice(0, cc.length - 4)
    return "#".repeat(to_mask_slice.length) + cc.slice(cc.length - 4, cc.length)
}

function maskify_ref(cc) {
    return "#".repeat(Math.max(0, cc.length - 4)) + cc.slice(-4);
}
console.log(maskify("abc123b"))