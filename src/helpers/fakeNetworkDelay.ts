export const fakeNetworkDelay = async () => {
    return new Promise((resolve) => {

        const time = Math.random() * 1000;

        setTimeout(() => {
            resolve("");
        }, time);
    });
};
