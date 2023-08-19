const a = [16, 17, 4, 3, 5, 2];
const b = [];

if (a[0] >= a[1] && a[0] >= a[2] && a[0] >= a[3] && a[0] >= a[4] && a[0] >= a[5]) {
    b.push(a[0]);
}

if (a[1] >= a[2] && a[1] >= a[3] && a[1] >= a[4] && a[1] >= a[5]) {
    b.push(a[1]);
    console.log("num added 1");
}

if (a[2] >= a[3] && a[2] >= a[4] && a[2] >= a[5]) {
    b.push(a[2]);
    console.log("num added 2");
}

if (a[3] >= a[4] && a[3] >= a[5]) {
    b.push(a[3]);
    console.log("num added 3");
}

if (a[4] >= a[5]) {
    b.push(a[4]);
    console.log("num added 4");
}

b.push(a[5]);

console.log(b);
