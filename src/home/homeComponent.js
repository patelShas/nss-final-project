import {Link} from "react-router-dom";
// import 'bootstrap/dist/superhero/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css';

function HomeComponent() {
    return(

        <div >

            <h1 class={"display-1"}>The Spotify Music Reviewer</h1>
            <div>

                <img class="rounded img-fluid"
                     src="https://cdn.vox-cdn.com/thumbor/yP8ceUvjxtHBV7KfFA6E5VcdNCM=/0x0:5000x3070/3570x2008/filters:focal(2100x1135:2900x1935):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/70221368/GettyImages_1140668438_green.0.jpg" alt="title img" height="500px"/>
            </div>
            <div class="row">
                <div class="col-9">
                    <h2 class={"display-5"}>Current Hits</h2>
                    <img class="rounded img-thumbnail"
                         src={"https://charts-images.scdn.co/csc_assets/socials_posts/top_albums_global.jpg"} alt={"current hits"}></img>
                </div>
                <div className="col-3">
                    <h2 class="display-5">Suggestions</h2>
                    <img class="rounded img-fluid mt-lg-4 mb-lg-4"
                         src={"https://www.musicinminnesota.com/wp-content/uploads/2022/01/Photo-by-xaviershanley-from-Pexels.jpg"} alt={"suggestion 1"}></img>
                    <img class="rounded img-fluid mt-lg-4 mb-lg-4"
                         src={"https://i.pinimg.com/originals/9a/b9/f9/9ab9f9a5a1001e820af128b5c20f1b55.jpg"} alt={"suggestion 2"}></img>
                    <img class={"rounded img-fluid mt-lg-4 mb-lg-4"}
                         src={"https://www.musicinminnesota.com/wp-content/uploads/2022/01/Photo-by-davisuko-on-Unsplash-.jpg"} alt={"suggestion 3"}></img>
                </div>
            </div>
            <div>
                Exact requirements are:
                <ul>
                    <li>Must be mapped to either the root context ("/") or ("/home").</li>
                    <li>Must be the first page when visiting the website</li>
                    <li>Must display generic content for anonymous users. The content must be dynamic based on the latest data. For instance, you might display snippets and links to the most recent post, review, or member who recently joined</li>
                    <li>Must display specific content for the logged in user. The content must be dynamic based on the most recent data entered by the logged in user. For instance, you might display snippets and links to the most recent post or review created by the logged in user</li>
                    <li>Must be clear to what the Web site is about and must look polished and finished</li>
                </ul>
            </div>
        </div>

    );
}

export default HomeComponent;