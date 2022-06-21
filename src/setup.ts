
export function validate(path: string) {
    const part1 = path.split('?');
    if (part1.length !== 2) return;
    if (part1[0] !== '/calculator') return;
    const part2 = part1[1].split('&');
    if (part2.length !== 2) return;
    const part3 = part2[0].split('=');
    if (part3.length !== 2) return;
    if (Number.isNaN(Number(part3[1]))) return;
    const part4 = part2[1].split('=');
    if (Number.isNaN(Number(part4[1]))) return;
    return [Number(part3[1]), Number(part4[1])];
}

