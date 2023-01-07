import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog');
    return (
        <div className='p-5'>
            <h1 className='text-center  p-6 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-red-300 '>Blog</h1>
            <div tabIndex={0} className="mt-3 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Difference between SQL and NoSQL
                </div>
                <div className="collapse-content">
                    <p>Key difference between SQL and NoSQL databases is the way they store data. SQL databases use structured query language and store data in a tabular format, while NoSQL databases use a variety of data models, such as key-value, document, columnar and graph, to store data..</p>
                </div>
            </div>
            <div tabIndex={1} className="mt-3 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is JWT, and how does it work?
                </div>
                <div className="collapse-content">
                    <p>
                        JSON Web Token (JWT) is an open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object.
                        The user sends their credentials (e.g., username and password) to the server.If the credentials are valid, the server creates a JWT and sends it back to the user. The user stores the JWT in their browser and sends it back to the server with every subsequent request.The server verifies the JWT and, if it is valid, processes the request.
                    </p>
                </div>
            </div>
            <div tabIndex={2} className="mt-3 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is the difference between javascript and NodeJS?
                </div>
                <div className="collapse-content">
                    <p>Key difference between JavaScript and Node.js is that JavaScript is primarily used for building client-side applications, while Node.js is used for building server-side applications. Another difference is that JavaScript is executed in the browser, while Node.js is executed on the server.</p>
                </div>
            </div>
            <div tabIndex={3} className="mt-3 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How does NodeJS handle multiple requests at the same time?
                </div>
                <div className="collapse-content">
                    <p>When a request is made to a Node.js server, it is added to an event queue. The server has a single thread that processes events from this queue, and each event represents a request that needs to be handled. When the server receives a request, it adds the request to the event queue and then moves on to the next event. When a request is completed, the server sends the response back to the client and removes the event from the queue.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;