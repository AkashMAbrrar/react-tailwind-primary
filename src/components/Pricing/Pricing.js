import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOption = [
        { id: 1, name: 'free', price: 0 },
        { id: 2, name: 'regular', price: 5000 },
        { id: 3, name: 'premium', price: 4200 }
    ];
    return (
        <div className='bg-teal-200 p-4 mt-8'>
            <h1 className='text-5xl font-mono'>Best Deals Of The Town</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ratione distinctio debitis nemo, autem facilis quo fugiat doloribus perferendis enim?</p>
            <div className='grid md:grid-cols-3 gap-3 mt-8'>
                {
                    pricingOption.map(option => <PricingOption key={option.id}
                        option={option}
                    ></PricingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;