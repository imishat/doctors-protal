import React from 'react';
import { data } from 'autoprefixer';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import Loading from '../../Shared/Loading/Loading';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutFrom from './CheckoutFrom';


const stripePromise = loadStripe('pk_test_51M7OTXIWBWJssxY4wSJFbcHEOLDYIsT03ayBr5w4lBjQlZHZUVKhzeQCnOnyi7W2HJKBuxurFfvAYskr21CdcjWe00TRmnv0k8');

const Payment = () => {
    const booking = useLoaderData();
    console.log(booking)
    const navigation = useNavigation();
    const { treatment, price, appointmentDate, slot } = booking;
    if(navigation.state === "loading"){
        return <Loading></Loading>
    }
    return (
        <div>
        <h3 className="text-3xl">Payment for {treatment}</h3>
        <p className="text-xl">Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
        <div className='w-96 my-12'>
            <Elements stripe={stripePromise}>
                <CheckoutFrom
                booking={booking} />
            </Elements>
        </div>
    </div>
    );
};

export default Payment;