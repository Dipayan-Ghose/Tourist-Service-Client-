import React from "react";
import './Blog.css';
import '../Home/Home.css';

const Blog = () => {
  return (
    <div className=" mx-auto my-10 statistics">
      <div
        tabIndex={0}
        className="collapse collapse-arrow border rounded-box"
      >
        <div className="collapse-title bg-green-400 text-xl font-medium">
          Difference Between SQL and NoSQL
        </div>
        <div className="collapse-content">
            <h2 className="text-xl">What is SQL</h2>
          <p className="text-start">
            tabIndex={0}  SQL or the Structured Query Language is the
            most common and popular programming language for the relational
            database management system. It is a language designed to extract,
            store, insert, delete, update and manage data for structured data
            and strategic analysis. SQL is widely used by top tech companies
            like Facebook, Whatsapp, etc for data processing solutions. It is
            used for different types of RDBMS including Oracle, MySQL,
            SQLServer, etc.
          </p>
          <h1 className="text-xl mt-3 ">
          What is NoSQL
          </h1>
          <p className="text-start">
NoSQL database provides a mechanism for storage and retrieval of data that is modelled other than tabular form. It was introduced by Carl Stroz in the year 1998 called a Non-relational database. Now, it stands for Not only SQL. It is not limited to storing data in tables, instead, enables the big data to be stored in the structured, unstructured, semi-structured or polymorphic form.</p>
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse collapse-arrow  border  rounded-box"
      >
        <div className="collapse-title bg-green-400 text-xl font-medium">
        What is JWT, and how does it work?
        </div>
        <div className="collapse-content">
<h1 className="text-xl">What is JWT</h1>
<p className="text-start">
JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.

It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.

The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.

JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information
</p>
<h1 className="text-xl mt-3">
How dose it works

</h1>
<p className="text-start">
Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.
Here is the workflow,<br></br>
-User sign-in using username and password or google/facebook.<br></br>
-Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.<br></br>
-User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.<br></br>
-Resource server then verifies the authenticity of the token using the secret salt/ public key.
</p>
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse collapse-arrow border   rounded-box"
      >
        <div className="collapse-title bg-green-400 text-xl font-medium">
        What is the difference between javascript and Node JS?
        </div>
        <div className="collapse-content">
        <h2 className="text-xl">What is Node JS</h2>
          <p className="text-start">
            tabIndex={0} NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.
          </p>
          <h1 className="text-xl mt-3 ">
          What is JavaScript
          </h1>
          <p className="text-start">
          Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.</p>
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse collapse-arrow border rounded-box"
      >
        <div className="collapse-title text-xl  bg-green-400 font-medium">
        How does Node JS handle multiple requests at the same time?
        </div>
        <div className="collapse-content">
          <p className="text-start">
          NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded. <br></br>
          NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.
          </p>
        
        </div>
      </div>
    </div>
  );
};

export default Blog;
