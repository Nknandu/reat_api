import React, { useEffect, useState } from "react";

const About = () => {
    const [content, setAbout] = useState({});
    useEffect(() => {
        const fetchContent = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/about');
                // Check if the response status is OK (200)
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setAbout(data);

            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };
        fetchContent();
    }, []);
    return (
        <section id="about" class="about">
            <div class="container">
                <div class="section-title">
                    <h2>About</h2>
                    <p>
                        {content ? content.content_data.content : "Loading..."}
                        {/* {content.content_data.content} ? {content.content_data.content} : 'Nandakumar' */}
                    </p>
                </div>
                <div class="row">
                    <div class="col-lg-4" data-aos="fade-right">
                         <img src="/assets/img/profile-img.jpg" class="img-fluid" alt="Description" />
                    </div>
                    <div class="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h3>UI/UX Designer &amp; Web Developer.</h3>
                        <p class="fst-italic">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.
                        </p>
                        <div class="row">
                            <div class="col-lg-6">
                                <ul>
                                    <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 May 1995</span></li>
                                    <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                                    <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+123 456 7890</span></li>
                                    <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>New York, USA</span></li>
                                </ul>
                            </div>
                            <div class="col-lg-6">
                                <ul>
                                    <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
                                    <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                                    <li><i class="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>email@example.com</span></li>
                                    <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                </ul>
                            </div>
                        </div>
                        <p>
                            Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                            Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;