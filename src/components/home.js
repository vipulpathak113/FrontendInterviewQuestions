import React from "react";

function home() {
  return (
    <div>
      <h1 className="header">FrontEnd Interview Questions</h1>
      <div className="question-box">
        <div className="question">
          <div className="question-text">Question : </div>
          <div className="actual-question">What are Pseudo-classes?</div>
        </div>
        <div className="answer">
          <div className="question-text">Answer : </div>
          <div className="actual-question">
            A pseudo-class is used to define a special state of an element.
            <pre>
              Syntax:
              <pre>
                selector:pseudo-class &#123; property &#58; value;&#125;{" "}
              </pre>
            </pre>
            <pre className="example">Example:</pre>
            <pre>a:hover &#123; color &#58; #FF00FF;&#125; </pre>
          </div>
        </div>
      </div>
      <div className="question-box">
        <div className="question">
          <div className="question-text">Question : </div>
          <div className="actual-question">Whats is CDN</div>
        </div>
        <div className="answer">
          <div className="question-text">Answer : </div>
          <div className="actual-question">
            A content delivery network (CDN) is a group of geographically
            distributed servers that speed up the delivery of web content by
            bringing it closer to where users are.
            <pre className="example">Example:</pre>
            <pre>Cloudfare</pre>
          </div>
        </div>
      </div>
      <div className="question-box">
        <div className="question">
          <div className="question-text">Question : </div>
          <div className="actual-question">Whats is a Promise</div>
        </div>
        <div className="answer">
          <div className="question-text">Answer : </div>
          <div className="actual-question">
            The Promise object represents the eventual completion (or failure)
            of an asynchronous operation and its resulting value.
            <pre className="example">Example:</pre>
            <pre>
              const promiseA = new Promise( (resolve,reject) =&gt; &#123;
              resolve(777) &#125;)
              <pre>
                promiseA.then( (val) =&gt; console.log("asynchronous",val) );
              </pre>
              <pre>console.log("immediate logging");</pre>
            </pre>
            <pre className="output">Output:</pre>
            <pre>immediate logging</pre>
            <pre>asynchronous logging has val: 777</pre>
          </div>
        </div>
      </div>
      <div className="question-box">
        <div className="question">
          <div className="question-text">Question : </div>
          <div className="actual-question">Whats are methods of Promises</div>
        </div>
        <div className="answer">
          <div className="question-text">Answer : </div>
          <div className="actual-question"> <span style={{margin:"20px"}}>The methods of Promises are:</span> 
            <ol>
            <li>Promise.all() : It takes array of promises as an input and promise will reolve if all the input promises are resolved, if one fails it rejects the promise</li>
            <li>Promise.allSettled() : It takes array of promises as an input and returns a promise after all the promises are fulfilled or rejected</li>
            <li>Promise.any() : It takes array of promises as an input and returns a single promise as soon one of the promise is fulfilled and if promises are empty or all promise are rejected then it rejects the promise </li>
            <li>Promise.race() : It takes array of promises as an input and returns a single promise as soon one of the promise is fulfilled or rejected</li>
          </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;
