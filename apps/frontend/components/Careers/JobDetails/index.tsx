import JobOpportunities from "../JobOpportunities/JobOpportunities"

const JobDetails = ({title,description}) => {

    const newLocal = <div className="NewsBox">

        <h6>Egypt</h6>
        <h2><a>Marketing Manager</a></h2>
        <div className="newscontent">
            <p>Posted 28 November 2021</p>
        </div>

    </div>
    return (
        <>

<div className="job_detail_container">
                {newLocal}

<div className="jobDescription">
    <h5>Job Description</h5>
    <p>
    Single text editor field, CNBC Arabia is looking for an enthusiastic, motivated individual with a passion for journalism to join our Singapore newsroom. As a News Assistant, you’ll be joining a dynamic team of Producers, Reporters and Correspondents to deliver breaking news, in-depth analysis and exclusive interviews for the world’s number one busines and financial news network.
    </p>
    <p>This role is ideal for candidates looking to kickstart their career in journalism and content production, with a keen interest in business, economics, and financial markets. This is a fantastic opportunity to learn about business and markets, whilst supporting both developing and breaking news stories.

</p>
    <h5>Responsibilites</h5>
    <ul className="simpleLits">
        <li>Assist the show team to provide elements for show segments </li>
        <li>Writing accurate interview transcripts</li>
        <li> Writing copy for use on various platforms </li>
        <li>Pitching, researching and booking guests</li>
        <li> Basic script writing </li>
        <li>Clipping content for social media and CNBC.com </li>
        <li>Contributing to ad-hoc projects as required</li>
    </ul>
    <h5>Qualifications</h5>
    <ul>
        <li> A strong passion for broadcasting, media and content production

              </li>
              <li>A keen interest and desire to learn about financial markets and business news
              </li>
              <li>Attention to detail and the ability to work well under pressure and short deadlines
             </li>
             <li> Additional languages would be beneficial </li>
    </ul>
    <p>The responsibilities associated with this position are not limited to the above description and may be modified at any time by the Company.</p>

</div>

                <div className='row justify-content-center'>
                    <div className="col-md-8">
                        <JobOpportunities title={title} description={description}/>
                    </div>
                </div>
</div>

        </>
    )
}

export default JobDetails