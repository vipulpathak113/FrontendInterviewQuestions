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
          <div className="answer-text">Answer :- </div>
        <div className="answer">
          <div className="actual-answer">
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
          <div className="actual-question">Whats is CDN?</div>
        </div>
          <div className="answer-text">Answer :- </div>
        <div className="answer">
          <div className="actual-answer">
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
          <div className="actual-question">
            Whats is a Promise in javascript?
          </div>
        </div>
        <div className="answer-text">Answer :- </div>
        <div className="answer">
          <div className="actual-answer">
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
          <div className="actual-question">Whats are methods of Promises?</div>
        </div>
        <div className="answer-text">Answer :- </div>
        <div className="answer">
          <div className="actual-answer">
            {" "}
            <span style={{ margin: "20px" }}>The methods of Promises are:</span>
            <ol>
              <li>
                Promise.all() : It takes array of promises as an input and
                promise will reolve if all the input promises are resolved, if
                one fails it rejects the promise
              </li>
              <li>
                Promise.allSettled() : It takes array of promises as an input
                and returns a promise after all the promises are fulfilled or
                rejected
              </li>
              <li>
                Promise.any() : It takes array of promises as an input and
                returns a single promise as soon one of the promise is fulfilled
                and if promises are empty or all promise are rejected then it
                rejects the promise{" "}
              </li>
              <li>
                Promise.race() : It takes array of promises as an input and
                returns a single promise as soon one of the promise is fulfilled
                or rejected
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="question-box">
        <div className="question">
          <div className="question-text">Question : </div>
          <div className="actual-question">Whats is ECMAScript?</div>
        </div>
        <div className="answer-text">Answer :- </div>
        <div className="answer">
          <div className="actual-answer">
            <span>
            ECMAScript(European Computer Manufacturers Association Script) is
            the standard that JavaScript programming language uses. ECMAScript
            provides the specification on how JavaScript programming language
            should work.
            <pre>
              JavaScript ES6 (also known as ECMAScript 2015 or ECMAScript 6) is
              the newer version of JavaScript that was introduced in 2015.
            </pre>
            </span>
          </div>
        </div>
      </div>
      <div className="question-box">
        <div className="question">
          <div className="question-text">Question : </div>
          <div className="actual-question">Whats is a Babel?</div>
        </div>
        <div className="answer-text">Answer :- </div>
        <div className="answer">
          <div className="actual-answer">
            <span>
            It is a transpiler which is used to convert ES6+ code to backward comaptible version of js so that it can be used with current and old browser environment
            <pre>
              Basically it does 2 things:
              <ol>
                <li>It transform new syntax (Ex: let a ="xyz" is converted into var a ="xyz")</li>
                <li>It uses polyfills to support new functions (like includes)</li>
              </ol>
            </pre>
            </span>
          </div>
        </div>
      </div>
      <div className="question-box">
        <div className="question">
          <div className="question-text">Question : </div>
          <div className="actual-question">Whats is a Webpack?</div>
        </div>
        <div className="answer-text">Answer :- </div>
        <div className="answer">
          <div className="actual-answer">
            <span>
            Its a Module bundler which is use to bundle our code and assets (incuding static assets such as images) into a 'bundle' which we can then deploy. 
            <pre>
            Its main function is to create dependency graph so that all files can be injected in proper order
            </pre>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default home;
