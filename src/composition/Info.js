import React from 'react'
import './Info.css';

function Info(props) {
    return (
        <div>
            <header>
                <h1>Sally Student Resume</h1>
                <p></p>
            </header>
            <main><nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about_me">About me</a></li>
                    <li><a href="/sallystudent@gmail.com">Contact</a></li>
                </ul>
            </nav>
            </main>
            <section>
                <H1>About Me</H1>
                <img src="https://m.media-amazon.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_.jpg" alt="A picture of myself" />

                <p>
                    I am currently studying HTML code online. Coding is a passion of mine and I am very excited to be continuing my education in this field.
</p>

                <p>
                    <h2>Education</h2>
                    <h3>Front Range COmmunity College</h3>
                    <ul>
                        <li> Attended core curriculum at FRCC, earning a 3.2 GPA</li>
                    </ul>
                    <h3>University of Colorado Boulder</h3>
                    <ul>
                        <li>Attended CU Boulder earning a Bachelors in Software Engineering, aerning a 3.5 GPA</li>
                        <li>Currently attending CU Boulder's Applied Sciences in Software Engineering Masters program</li>
                    </ul>

                    <h2>Work History</h2>
                    <h3>Google</h3>
                    <ul>
                        <li>Dates: Oct 2017-Feb 2018</li>
                        <li>Job Title: Intern</li>
                        <li>Job desctription: lorem ipsum</li>
                    </ul>
                    <h3>Amazon</h3>
                    <ul>
                        <li>Dates: Feb 2018-present</li>
                        <li>Job Title: Data Analyst</li>
                        <li>Job Descrition: lorem ipsum</li>
                    </ul>
                </p>
            </section>
            <address>
                <h2>Contact Info</h2>
                <p>Twitter: <a href="https://twitter.com/sallyStudent">@sallyStudent</a></p>
            </address>
        </div>
    )
}
export default Info;