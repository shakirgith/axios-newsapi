import React from 'react'
  
const Profile = () => {
  return (
    <div id="profile" className='container m-auto'>
    <h2 className="text-center">User Profile Card</h2>

          <div className="card">
          <img src="/images/carousel2.jpg" alt="John" className="img-fluid" />
          <h1>John Doe</h1>
          <p className="title">CEO & Founder, Example</p>
          <p>Harvard University</p>
          <div className="py-5">
              <a href="#"><i class="fa fa-dribbble"></i></a> 
              <a href="#"><i class="fa fa-twitter"></i></a>  
              <a href="#"><i class="fa fa-linkedin"></i></a>  
              <a href="#"><i class="fa fa-facebook"></i></a> 
          </div>
          <p><button>Contact</button></p>
          </div>
  </div>
   
  )
}
  
export default Profile