<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"/>
    <title>Ivonagram</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="styles/font-awesome.min.css"/>
    <link rel="stylesheet" href="styles/style.css"/>
    <link
      href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@200;400;600&display=swap"
      rel="stylesheet"
    />
    <template id='post-template'>
      <article class='post' data-post-id=''>
        <h4><span class='post-username-label'></span> </h4>
        <img src='' alt=''/>
        <p></p>
        <i class='fa fa-heart-o heart-icon clickable-icon'></i>
        <span class='post-likes'></span>
        <i class='fa fa-bookmark-o bookmark-icon clickable-icon'></i>
        <span class='post-bookmarks'></span>
        <p></p>
        <p class='comments-label'>Komentari:</p>
        <button class='comment-btn' post-comment-id=''>Postavi komentar...</button>
      </article>
    </template>
    <template id='comment-template'>
      <article class='comment' data-comment-id=''>
        <span class='comment-username-label'></span>
        <span></span>
      </article>
    </template>
  </head>
  <body>
    <header>
      <span>Ivonagram</span>
    </header>

    <main>
      <div id='container'>
        <div id='user-container'>
            <img src="images/profilna.jpg"/>
            <h2>IVONA MLINAREVIĆ</h2>
            <h3>@imlina00</h3>
            <p> Pozdrav, moje ime je Ivona. Studiram na <a href="https://www.fesb.unist.hr/" target="_blank" rel="noopener noreferrer">FESB</a>-u. Ovo je moja web stranica za kolegij Programiranje za internet. Dobro došli!</p>
        </div>
        <div id="posts-container">
          <button id="add-post-button">OBJAVI</button>
            <?php 
            require_once("php/posts.php");
            echo(generatePostsHtml());
            ?>
        </div>
      </div>
    </main>
    <script src="scripts/posts.js"></script>
    <script src="scripts/comments.js"></script>
  </body>
</html>
