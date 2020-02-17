import React, { Component, Fragment } from 'react';
export default class Cloudbackup extends Component {
    render() {
        return (
            <Fragment>
           <section className="top_section text-center">
           <h2>Cloud Disaster Recovery and Backup</h2>
           </section>
           <section className="text-center bg_ligth">
            <div className="container">
            <div className="text_margin">
             <h3>Disaster Recovery and Backup</h3>
                <p className="welcome_text">Your business success depends on the availability and reliability of IT systems. Even a minor outage can cause a competitive disadvantage. Consequently, a business continuity plan and backup for all your mission critical systems is 
                 mandatory —without the doubling infrastructure price.
               </p>
               </div>
             </div>
           </section>
           <section>
           <div className="container">
            <div className="row align-item-center">
              <div className="col-md-6">
                <img className="img-fluid" alt="dan_image" src="https://www.wllawsd.com/wp-content/uploads/2018/06/daniel-1.jpg" />
               </div> 
               <div className="col-md-6 my-4">
               <h4>
               <strong>Unify data management, security, and protection</strong>
               </h4>
               <p className="text-size">
               Achieve business goals for continuity and compliance throughout the lifecycle of your apps. Help 
               secure your data with industry leading protection offered by encryption features.
               </p>
               <strong>SolTec</strong>
               <p className="text-size">
               "Azure has revolutionized our disaster recovery offerings in the market. Simply put, we can very 
               easily provide centrally managed DR to our customers for 44 percent lower costs."
               </p>
               <strong>Paul Collins, Technical Services Director</strong>
               </div>
             </div>
            </div>
           </section>
           <section className="text-center bg_ligth">
             <div className="container">
                <div className="row">
                  <div className="col-md-6">
                  <img className="img-fluid" src="https://cdn.lynda.com/course/191089/191089-637074599266603829-16x9.jpg" alt="course_img" />
                    <h5 className="my-4">backup</h5>
                  </div>
                  <div className="col-md-6">
                  <img className="img-fluid" src="https://cdn.lynda.com/course/191089/191089-637074599266603829-16x9.jpg" alt="course_img" />
                    <h5 className="my-4">Dr</h5>
                  </div>
                </div>
             </div>
           </section>
           <section class="top_section text-center">
       <div className="container">
         <h2>Book Free Consultation</h2>
      <button type="button" className="btn btn-lg btn-primary my-4">Free Consultation</button>
     </div>
</section>
  </Fragment >
        )
}
}     