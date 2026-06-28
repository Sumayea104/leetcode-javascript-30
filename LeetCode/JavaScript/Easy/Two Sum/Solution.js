type ToBeOrNotToBe = {
    toBe: (val: number) => boolean;
    notToBe: (val: number) => boolean;
};

function expect(val: number): ToBeOrNotToBe {
    return {
        toBe(compareVal: number): boolean {
            if (val === compareVal) return true;
            throw new Error("Not Equal");
        },
        notToBe(compareVal: number): boolean {
            if (val !== compareVal) return true;
            throw new Error("Equal");
        }
    };
}