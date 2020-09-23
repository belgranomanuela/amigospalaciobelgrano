import React from 'react';


function Navbar() {
    return (
        <div>
            <nav>
                <div class="topnav" id="myTopnav">
                    <div class="container-fluid ">
                        <a class="navbar-brand" href="#">Jonas Brothers</a>
                        <div class="links">
                            <a class="display-4" href="#">Home</a>
                            <a class="display-4" href="#about">About</a>
                            <a class="display-4" href="#news">News</a>
                            <a class="display-4" href="#albums">Albums</a>
                            <a class="display-4" href="#tour">Tour</a>
                            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                                <i class="fa fa-bars"></i>
                            </a>
                            <div class="links-social">
                                <span></span>
                                <div class="d-flex flex-row justify-content-around">
                                    <a class="btn fa fa-facebook" href="https://www.facebook.com/jonasbrothers"></a>
                                    <a class="btn fa fa-youtube" href="https://www.youtube.com/jonasbrothers"></a>
                                    <a class="btn fa fa-instagram" href="https://www.instagram.com/jonasbrothers"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;