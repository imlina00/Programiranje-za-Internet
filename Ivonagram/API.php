<?php
require_once("php/posts.php");

function processRequest(){
  $action = getRequestParameter("action");

    switch ($action) {
      case 'togglePostLike':
        processTogglePostLike();
        break;
      case 'togglePostBookmark':
        processTogglePostBookmark();
        break;
      case 'addPost':
        processAddPost();
        break;
      case 'addComment':
        processAddComment();
        break;
      default:
      echo(json_encode(array(
         "success" => false,
         "reason" => "Unknown action: $action"
      )));
      break;
    }
}

function getRequestParameter($key) {
   return isset($_REQUEST[$key]) ? $_REQUEST[$key] : "";
}

function processTogglePostLike(){
  $success = false;
  $reason = "";

  $id = getRequestParameter("id");
  $liked = getRequestParameter("liked");
  $likes = getRequestParameter("likes");

  if (is_numeric($id) && is_numeric($liked) && is_numeric($likes)) {
    togglePostLike($id, $liked, $likes);
    $success = true;
  } 
  else {
    $success = false;
    $reason = "Needs id:number; like:number; likes:number";
  }

  echo(json_encode(array(
  "success" => $success,
  "reason" => $reason
  )));
}

function processTogglePostBookmark(){
  $success = false;
  $reason = "";

  $id = getRequestParameter("id");
  $bookmarked = getRequestParameter("bookmarked");
  $bookmarks = getRequestParameter("bookmarks");

  if (is_numeric($id) && is_numeric($bookmarked)&& is_numeric($bookmarks)) {
    togglePostBookmark($id, $bookmarked, $bookmarks);
    $success = true;
  } 
  else {
    $success = false;
    $reason = "Needs id:number; bookmark:number; bookmarks:number";
  }

  echo(json_encode(array(
  "success" => $success,
  "reason" => $reason
  )));
}

function processAddPost(){
  $success =false;
  $reason = "";
  $id = 0;

  $imageUrl = getRequestParameter('imageUrl');
  $description = getRequestParameter('description');

  if($imageUrl != "" && $description != ""){
    $id = addPost($imageUrl, $description);
    $success = true;
  }
  else{
    $success = false;
    $reason = "Needs description and imageUrl";
  }

  echo(json_encode(array(
    "success" => $success,
    "reason" => $reason,
    "id" => $id
    )));
}

function processAddComment(){
  $success =false;
  $reason = "";
  $id = 0;

  $description = getRequestParameter('description');
  $postID = getRequestParameter('postID');

  if($description != "" && $postID != ""){
    $id = addComment($description, $postID);
    $success = true;
  }
  else{
    $success = false;
    $reason = "Needs description";
  }

  echo(json_encode(array(
    "success" => $success,
    "reason" => $reason,
    "id" => $id
    )));
}

processRequest();