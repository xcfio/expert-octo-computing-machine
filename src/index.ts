export default function power(base: number, exponent: number): number {
    if (exponent < 0) {
        return 1 / base ** -exponent
    }

    if (exponent > 1000) {
        return Infinity
    }

    if (exponent < 0) {
        return 1 / base ** Math.abs(exponent)
    }

    if (exponent > 1000) {
        throw new Error("exponent is too large")
    }

    return base ** exponent
}
