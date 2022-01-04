import React from 'react'
import Layout from '../../Layout/Index';
import Hero from '../../Components/Home/Hero/hero';
import Clients from '../../Components/Home/Clients/clients';
import Construction from '../../Components/Home/Construction/construction';
import DAnalytics from '../../Components/Home/dashboardAnalytics/DAnalytics';
import AppForDriver from '../../Components/Home/AppForDriver/appDriver';
import EveryThing from '../../Components/Home/EveryThing/EveryThing';
import FreeDemo from '../../Components/Home/FreeDemo/Free_demo';
function Index() {
    return (
        <Layout title="Home" page={0}>
            <Hero />
            <Clients />
            <Construction />
            <DAnalytics />
            <AppForDriver />
            <EveryThing />
            <FreeDemo />
        </Layout>
    )
}

export default Index
