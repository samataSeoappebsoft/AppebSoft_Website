// src/components/contact/ContactHero.jsx

import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";

import "./ContactHero.css";


function ContactHero() {

  return (

    <section className="contact-hero">


      {/* BACKGROUND */}

      <div className="contact-bg"></div>

      <div className="contact-grid"></div>

      <div className="noise-layer"></div>



      <div className="contact-container">



        {/* LEFT CONTENT */}

        <div className="contact-content">


          <span className="contact-tag">
            CONTACT APPEBSOFT
          </span>



          <div className="contact-headline">


            <h1>

              Let's Build

              <br />

              Something

             <br/>
                Amazing
           

              <br />

              Together.

            </h1>


          </div>




          <p className="contact-description">

            Whether you need a website, mobile application,
            enterprise software, ecommerce platform or digital
            transformation solution, our experts are ready to
            help turn your ideas into reality.

          </p>




          <div className="contact-actions">


            <button className="primary-btn1">

              Get Free Consultation

              <ArrowRight size={18}/>

            </button>



            <button className="secondary-btn">

              View Portfolio

            </button>


          </div>





          <div className="contact-highlights">



            <div className="highlight">


              <div className="highlight-icon">

                <Phone size={22}/>

              </div>


              <div>

                <h4>
                  Call Us
                </h4>

                <span>
                  98367 17849
                </span>

              </div>


            </div>





            <div className="highlight">


              <div className="highlight-icon">

                <Mail size={22}/>

              </div>


              <div>

                <h4>
                  Email
                </h4>

                <span>
                  info@appebsoft.com
                </span>

              </div>


            </div>





            <div className="highlight">


              <div className="highlight-icon">

                <MapPin size={22}/>

              </div>


              <div>

                <h4>
                  Office
                </h4>

                <span>
                  Uttarpara, West Bengal
                </span>

              </div>


            </div>



          </div>



        </div>







        {/* RIGHT FORM */}



        <div className="contact-form-wrapper">


          <div className="contact-card">



            <span className="card-tag">
              QUICK RESPONSE
            </span>




            <h2>
              Send Us A Message
            </h2>




            <p>
              Fill out the form and our team will get
              back to you within 24 hours.
            </p>






            <form>



              <div className="form-row">


                <input
                  type="text"
                  placeholder="Full Name"
                />



                <input
                  type="email"
                  placeholder="Email Address"
                />


              </div>





              <div className="form-row">


                <input
                  type="tel"
                  placeholder="Phone Number"
                />



                <input
                  type="text"
                  placeholder="Company Name"
                />


              </div>






              <select>


                <option>
                  Select Service
                </option>


                <option>
                  Web Development
                </option>


                <option>
                  Mobile App Development
                </option>


                <option>
                  Software Development
                </option>


                <option>
                  Ecommerce Development
                </option>


                <option>
                  UI/UX Design
                </option>



              </select>







              <textarea

                rows="5"

                placeholder="Tell us about your project..."

              />







              <button
                className="submit-btn"
                type="submit"
              >

                Send Message

                <ArrowRight size={18}/>

              </button>




            </form>



          </div>


        </div>




      </div>



    </section>

  );

}



export default ContactHero;