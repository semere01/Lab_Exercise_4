// UI Vars 
const postDiv3 = document.getElementById('thePosts');
const spinner = document.getElementById('spinner');
//Load Every thing ....
document.addEventListener("DOMContentLoaded", () => {
    //load_fromPlaceHolder();
    loadDataNew();
});


//load a single customer function 
function load_fromPlaceHolder() {


}

async function load_fromPlaceHolder_new() {

    //open the request 
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');

    let data = await response.json();

    return data;

}

function loadDataNew() {
    load_fromPlaceHolder_new().then(function(posts) {
            //iterate over each post [100 posts]
            let output = '';
            posts.forEach(function(post) {
                output += `

        <div class="item">
        <div class="image">
            <img src=" https://ibb.co/9tKbsFX">
        </div>
        <div class="content">
            <a class="header" href="#" id="bTitle">
            ${post.title.toUpperCase()}
            </a>
            <div class="description">
                <p id="bDesc">
                ${post.body}
                </p>
            </div>
            <div class="extra">
                <a class="ui floated basic violet button" href="#">Read Mores</a>
            </div>
        </div>
    </div>

`;
            });
            postDiv3.innerHTML = output;
        })
        .catch(function(err) {
            console.log(err);
        });

}