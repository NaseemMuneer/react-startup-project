import React from 'react'
import Layout from '../../Layout/Index';
import PricingCard from '../../Components/PricingPlan/PricingPlane';
import Index from '../../Components/PricingPlan/PricingForm/Index';


function index() {
    return (
             <>
            <Layout title="Features"page={5}>
               <PricingCard/>
            </Layout>
            </>
    )
}

export default index
