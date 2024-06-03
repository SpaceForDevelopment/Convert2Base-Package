export const binaryNumberValidation = (binaryNumber: string) => {
    if (!/^[01]+$/.test(String(binaryNumber))) {
        throw new Error(
            'The provided binary number is invalid. Make sure it contains only 0s and 1s.'
        );
    }
};
