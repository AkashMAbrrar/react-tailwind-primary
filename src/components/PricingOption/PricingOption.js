import React from 'react';

const PricingOption = (props) => {
    const { name, price } = props.option;
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h1 className='bg-teal-200 py-2 rounded text-xl font-bold'>{name}</h1>
            <span className='text-5xl font-bold'>{price}</span>
        </div>
    );
};

export default PricingOption;