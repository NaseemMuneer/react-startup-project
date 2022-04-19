import React from 'react';
import Layout from '../../Layout/Index';
import AboutUs from '../../Components/AboutUs/AboutUS';
import OurVision from '../../Components/AboutUs/OurVision';
import OurMission from '../../Components/AboutUs/OurMission';
import ValueProvide from './../../Components/AboutUs/ValueProvide';
import AboutHysabat from '../../Components/AboutUs/aboutHysabat';

function Index() {
    return (
            <>
            <Layout title="AboutUs"page={1}>
              <AboutUs/>
              <OurVision/>
              <OurMission/>
              <ValueProvide/>
              <AboutHysabat/>
            </Layout>
            </>
        )
}

export default Index
