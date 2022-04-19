import React from 'react'
import DashboardFeature from '../../Components/Feature/DashboardFeature';
import Feature from '../../Components/Feature/Feature';
import FeatureOverview from '../../Components/Feature/featureOverview';
import Layout from '../../Layout/Index';
import FeatureGallery from '../../Components/Feature/FeatureGallery'


function Features() {
    return (
        <>
            <Layout title="Features"page={3}>
                <Feature/>
                <FeatureOverview/>
                <DashboardFeature/>
                <FeatureGallery/>
            </Layout>
            </>
    )
}

export default Features
