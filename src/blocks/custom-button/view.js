import React, { useCallback } from '@wordpress/element';
import { Button } from 'blox';
import 'blox/dist/assets/button.css';

function PaymentButton({ amount, currency, variant, email, bgColor, fgColor, label }) {
    const handleClick = (event) => {
        // event.preventDefault();
        event.stopPropagation();
        alert(`Processing payment of ${amount} ${currency} via ${variant} for ${email}`);
    };

    return (
        <Button
            label={label || 'Pay Now'}
            backgroundColor={bgColor}
            fontColor={fgColor}
            paymentProvider={variant === 'google' ? 'google' : variant === 'apple' ? 'apple' : null}
            onClick={handleClick}
        />
    );
}

// function PaymentButton({ amount, currency, variant, email, bgColor, fgColor, label }) {
//     const handleClick = (event) => {
//         event.stopPropagation();
//         alert(`Processing payment of ${amount} ${currency} via ${variant} for ${email}`);
//     };

//     return (
//         <button
//             style={{
//                 backgroundColor: bgColor || '#007bff',
//                 color: fgColor || '#fff',
//                 padding: '10px 20px',
//                 border: 'none',
//                 borderRadius: '5px',
//                 cursor: 'pointer'
//             }}
//             onClick={handleClick}
//         >
//             {label || 'Pay Now'}
//         </button>
//     );
// }

document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.flutterwave-v4-payment-button');

    containers.forEach((container) => {
        const attributes = Array.from(container.attributes).reduce((acc, attr) => {
            const name = attr.name.startsWith('data-')
                ? attr.name.slice(5).replace(/-([a-z])/g, (g) => g[1].toUpperCase())
                : attr.name;
            acc[name] = attr.value;
            return acc;
        }, {});

        if(attributes.email === '' | attributes.email == 'none') {
            //initate a modal to collect email.
        }

        const root = wp.element.createRoot(container);
        root.render(<PaymentButton {...attributes} />);
    });
});
