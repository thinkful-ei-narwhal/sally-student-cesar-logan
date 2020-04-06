import React from 'react'
import './Info.css';

function Info(props) {
    return (
        <div>
            <main>
                <section>
                    <h2>About Sally Student</h2>
                    <p lang="fr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae veritatis sed laborum, accusantium ut dolore asperiores ea enim, hic fuga corporis? Id cupiditate, voluptatibus veniam doloribus consectetur quia! Quae, eveniet?</p>
                    <p lang="fr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste eligendi distinctio libero error vitae aliquid aut autem doloribus delectus necessitatibus possimus tempora, ipsam sequi, quae architecto maxime asperiores qui voluptate.</p>
                    <p lang="fr">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa est iusto doloribus consectetur fugit quis accusantium hic assumenda, dolorem autem dolor voluptatibus dolore sunt sed labore neque, saepe illum et!</p>
                </section>
  
                <section>
                    <h3>Sally's education:</h3>
                    <ul>
                        <li>grossmount collegue</li>
                        <li>Butte Collegue</li>
                        <li>Chico State University</li>
                        <li>Thinkful</li>
                    </ul>
                </section>

                <section>
                    <h3>Sally's employment history:</h3> 
                    <ul><li>Scribbs</li></ul>
      
                    <p>Job Title: Software Developer<br/> 
                     Date of Employement: 2/17/2013-8/15/2017<br/> 
                    Job Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae veritatis sed laborum, accusantium ut dolore asperiores ea enim, hic fuga corporis? Id cupiditate, voluptatibus veniam doloribus consectetur quia! Quae, eveniet?
                    </p>

                    <ul><li>Google</li></ul>
                    <p>Job Title: Software Developer<br/> 
                    Date of Employement: 2/17/2013-8/15/2017<br/> 
                    Job Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae veritatis sed laborum, accusantium ut dolore asperiores ea enim, hic fuga corporis? Id cupiditate, voluptatibus veniam doloribus consectetur quia! Quae, eveniet?</p>
                </section>

                <section>
                    <h4>Contact Info</h4>
                    <address>
                        Name: Sally Student <br/>
                        Email: <a href="mailto:SallyStudent@live.com?">SallyStudent@live.com</a><br/>
                        Phone: <a href="tel:+1-888-555-1212">+1-888-555-1212</a>
                    </address>
                </section>
            </main>        
    </div>
    )
}
export default Info;