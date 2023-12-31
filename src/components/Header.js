import React, { useEffect, useState } from "react";

const Header = () => {
   
    const [user, setUser] = useState({});
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/user');
                // Check if the response status is OK (200)
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                setUser(data);

            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchUser();
    },[]);


    return (
        
        <header id="header">
            <div class="d-flex flex-column">
                <div class="profile">
                    <img src="/assets/img/profile-img.jpg" class="img-fluid rounded-circle" alt="Description" />
                    {/* <Hero user={user_temp} /> */}

                    {/* <img src="assets/img/profile-img.jpg" alt="" class="img-fluid rounded-circle"> */}
                    <h1 class="text-light"><a href="index.html">Nandakumar</a></h1>
                    <div class="social-links mt-3 text-center">
                        <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                        <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                        <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                        <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                        <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                    </div>
                </div>

                <nav id="navbar" class="nav-menu navbar">
                    <ul>
                        <li><a href="#hero" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></a></li>
                        <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li>
                        <li><a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
                        <li><a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
                    </ul>
                </nav>

            </div>
            
        </header>
    );
};
export default Header;
