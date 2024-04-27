export const octalNumberValidation = (octalNumber: string) => {
    if (!/^[0-7]+$/.test(octalNumber)) {
        throw new Error('The provided octal number is invalid. Make sure it contains only digits from 0 to 7.');
    }
};