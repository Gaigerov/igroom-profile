import LocalFont from 'next/font/local';

export const sfProDisplay = LocalFont({
    src: [
        {
            path: './SF-Pro-Display-Regular.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './SF-Pro-Display-Bold.otf',
            weight: '700',
            style: 'normal',
        },
    ],
    display: 'swap',
    variable: '--font-sf-pro-display',
    preload: true,
});
