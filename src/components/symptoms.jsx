import React from 'react';
//import fever from '../public/fever.png';
function symptoms(props) {
  return (
    <React.Fragment>
        <div className="Home">
            <div className="home-left">
                <div className="header fadeInUp" style={{animationDelay: '0.2s'}}>
                <div className="header-mid">
                <div className="titles">
                    <h1>COVID-19 Coronavirus - Symptoms</h1>
                    <h8>There’s currently no vaccine to prevent coronavirus disease (COVID-19).</h8>
                    <div className="link fadeInUp" style={{animationDelay: '0.2s'}}>
                        <h7>The most common symptoms of COVID-19 are fever, tiredness, and dry cough. 
                            Some patients may have aches and pains, nasal congestion, runny nose, sore 
                            throat or diarrhea. These symptoms are usually mild and begin gradually. Also 
                            the symptoms may appear 2-14 days after exposure.</h7>
                            {"\n"}
                    <h1>Major and Common Symptoms</h1>
                    <img src={process.env.PUBLIC_URL + '../public/fever.png'} /> 
                    <h7>Fever
                        High Fever – this means you feel hot to touch on your chest or back (you 
                        do not need to measure your temperature). It is a common sign and also may 
                        appear in 2-10 days if affected.</h7>
                    <h7>Continuous cough – this means coughing a lot for more 
                        than an hour, or 3 or more coughing episodes in 24 hours 
                        (if you usually have a cough, it may be worse than usual).</h7>      
                    <h7>Shortness of breath
                        Difficulty breathing – Around 1 out of every 6 
                        people who gets COVID-19 becomes seriously ill and develops difficulty 
                        breathing or shortness of breath.</h7>    
                    </div>

                </div>
                </div>
            </div>
            </div>
            {/* Left vs right side */}
            <div className="home-left">

            </div>
        </div>
    </React.Fragment>
  );
}

export default symptoms;
