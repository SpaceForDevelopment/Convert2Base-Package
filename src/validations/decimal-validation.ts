export const decimalNumberValidation = (decimalNumber: string) => {
    if (!/^\d+$/.test(decimalNumber)) {
        throw new Error(
            'The provided decimal number is invalid. Make sure it contains only digits.'
        );
    }
};
