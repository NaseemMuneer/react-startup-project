import React from 'react';
import Layout from '../../Layout/Index';
import Contact from '../../Components/ContactUs/ContactUs';
import ContactForm from './../../Components/ContactUs/ContactForm';


function ContactUs() {
    return (
        <>
        <Layout title="contact-us"page={4}>
            <Contact/>
            <ContactForm/>
        </Layout>
        </>
    )
}

export default ContactUs
