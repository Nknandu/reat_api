import React, { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const customStyle = {
        border: 0,
        width: '100%', // Enclose percentage value in quotes
        height: '290px', // Enclose pixel value in quotes
        // Add more style properties as needed
    };

    const [formData, setFormData] = useState({
        // initialize state with your form fields
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleInputChange = (e) => {
        // update state as the user types
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Call the function to submit data to the API
            const response = await submitFormData(formData);

            // Display success toast
            if (response && response.status && response.message) {

                toast.success(response.message, {
                    position: toast.POSITION.TOP_RIGHT,
                });

                // Optionally, reset the form after successful submission
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                    // ... other fields
                });
            } else {
                // Handle cases where the API response does not contain a message
                toast.error('Failed to submit form. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle error state or display a message to the user
            toast.error('An error occurred. Please try again later.');
        }
    };


    const submitFormData = async (formData) => {
        const apiUrl = 'http://127.0.0.1:8000/api/contact_us';

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Add any other headers required by your API
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                // Handle non-successful response
                throw new Error('Failed to submit form');
            }
            // Optionally, handle the response from the server
            const data = await response.json();

            return data; // Return the parsed response to the caller

        } catch (error) {
            console.error('Error submitting form:', error);

            throw error;
           // throw new Error('Error submitting form:', error);
        }
    };



    return (
        <section id="contact" class="contact">
            <div class="container">

                <div class="section-title">
                    <h2>Contact</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                </div>

                <div class="row" data-aos="fade-in">

                    <div class="col-lg-5 d-flex align-items-stretch">
                        <div class="info">
                            <div class="address">
                                <i class="bi bi-geo-alt"></i>
                                <h4>Location:</h4>
                                <p>A108 Adam Street, New York, NY 535022</p>
                            </div>

                            <div class="email">
                                <i class="bi bi-envelope"></i>
                                <h4>Email:</h4>
                                <p>info@example.com</p>
                            </div>

                            <div class="phone">
                                <i class="bi bi-phone"></i>
                                <h4>Call:</h4>
                                <p>+1 5589 55488 55s</p>
                            </div>

                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" style={customStyle} allowfullscreen></iframe>
                        </div>
                    </div>
                    <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
                        <form onSubmit={handleSubmit} class="php-email-form">
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label for="name">Your Name</label>
                                    <input type="text" class="form-control" name="name" value={formData.name} onChange={handleInputChange} />
                                    {/* <input type="text" name="name" class="form-control" id="name" required> */}
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="name">Your Email</label>
                                    <input type="email" class="form-control" name="email" id="email" value={formData.email} onChange={handleInputChange} required />
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="name">Subject</label>
                                <input type="text" class="form-control" name="subject" value={formData.subject} onChange={handleInputChange} required />
                            </div>
                            <div class="form-group">
                                <label for="name">Message</label>
                                <textarea class="form-control" name="message" rows="10" value={formData.message} onChange={handleInputChange} required></textarea>
                            </div>
                            <div class="my-3">
                                <div class="loading">Loading</div>
                                <div class="error-message"></div>
                                <div class="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div class="text-center"><button type="submit">Send Message</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;