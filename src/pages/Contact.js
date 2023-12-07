import { useRef } from 'react';
import emailjs from 'emailjs-com'; 

function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ayaanmalik', 'template_s5jyexw', form.current, '7viIGuwTJfEG_zCV2')
            .then((result) => {
                console.log(result.text);
                console.log("message sent!");
                alert("message sent");
            }, (error) => {
                console.log(error.text);
                console.log("error sending message, try again!")
            });
        };

  return (
    <div className="contact">
      <div className='card'>
        <div className='card-body'>
          
        </div>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <h2 className="pt-3 pb-2">Lets Discuss Something Intresting !!!!</h2>
        <div className="container row mb-3">
          <div className="col-lg-12 col-md-12 col-sm-12 p-0">
            <div className="form-floating mb-3">
              <input
                type="text"
                name="userName"
                className="form-control"
                id="floatingInput"
              />
              <label htmlFor="floatingInput">Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                name="userEmail "
                className="form-control"
                id="floatingInput"
              />
              <label htmlFor="floatingInput">Email</label>
            </div>
            <div className="form-floating">
              <textarea
                className="form-control"
                name="message"
                style={{height:"200px"}}
              ></textarea>
              <label htmlFor="">Message</label>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-light border">
          Connect with Ayaan Malik
        </button>
      </form>
    </div>
  );
}

export default Contact;
