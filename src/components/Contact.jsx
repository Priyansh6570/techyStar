import React from 'react'

const Contact = () => {
  return (
    <div className="contact">
        <main>
            <h1>Contact Us</h1>
            <form>
                <div className="">
                    <label>Name</label>
                    <input type="text" placeholder='abc' required/>
                </div>
                <div className="">
                    <label>Email</label>
                    <input type="email" placeholder='Abc@xyz.com' required/>
                </div>
                <div className="">
                    <label>Message</label>
                    <input type="text" placeholder='Tell us about your Query...' required/>
                </div>
                <button type="submit">Send</button>
            </form>
        </main>
    </div>
  )
}

export default Contact