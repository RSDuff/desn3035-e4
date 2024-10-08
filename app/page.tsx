import React from "react";
import Header from "./components/header";
import Nav from "./components/nav";

export default function Page() {
    return <>
        <div className="container py-4">
            <div className="row">

                <Header/>

                <Nav />

                <div className="col-9">
                    <img className="d-block w-100 mb-3" src="https://fastly.picsum.photos/id/251/1280/720.jpg?hmac=YDyCcHsQDDzvzCfZ-MLi2fr2pFqpoH9OqSqmJFBwV7w" />
                    <h1>Welcome to Hell</h1>
                    <p>
                        Explore our meticulously sourced beans straight from the 4th circle of hell, learn about our roasting process which involve human sacarfices, and discover unique flavor profiles only available to the devil him/herself. Join us on a journey from hell to cup, and experience the true essence of dispair like never before!
                    </p>
                </div>

            </div>
        </div>



    </>
}