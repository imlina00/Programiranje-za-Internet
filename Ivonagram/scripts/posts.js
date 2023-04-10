const heartIcons = document.querySelectorAll('.post .heart-icon');
for (let i = 0; i < heartIcons.length; i++) {
	const heartIcon = heartIcons[i];
	heartIcon.addEventListener('click', handleHeartIconClick);
}

async function handleHeartIconClick(e) {
	const heartIcon = e.currentTarget;
    const heartContainer = heartIcon.parentElement;
    
	const post = heartIcon.closest('.post');
	const postId = post.getAttribute('data-post-id');
    var likeEl = heartContainer.querySelector('.post-likes');
    var likes = likeEl.textContent;
    
	const isCurrentlyLiked = heartIcon.classList.contains('fa-heart');
    if(!isCurrentlyLiked) {
        likes = parseInt(likes, 10)+1;
    } else {
        likes = parseInt(likes, 10)-1;
    }

	try {
		const serverResponse = await fetch(
			`API.php?action=togglePostLike&id=${postId}&liked=${isCurrentlyLiked ? 0 : 1}&likes=${likes}`
		);
		const responseData = await serverResponse.json();

		if (!responseData.success) {
			throw new Error(`Error liking post: ${responseData.reason}`);
		}

		if (!isCurrentlyLiked) {
			heartIcon.classList.remove('fa-heart-o');
			heartIcon.classList.add('fa-heart');
            likeEl.innerHTML = likes;
		} else {
			heartIcon.classList.remove('fa-heart');
			heartIcon.classList.add('fa-heart-o');
            likeEl.innerHTML = likes;
		}
	} catch (error) {
		throw new Error(error.message || error);
	}
}

const bookmarkIcons = document.querySelectorAll('.post .bookmark-icon');
for (let i = 0; i < bookmarkIcons.length; i++) {
	const bookmarkIcon = bookmarkIcons[i];
	bookmarkIcon.addEventListener('click', handleBookmarkIconClick);
}

async function handleBookmarkIconClick(e) {
	const bookmarkIcon = e.currentTarget;
	const bookmarkContainer = bookmarkIcon.parentElement;

	const post = bookmarkIcon.closest('.post');
	const postId = post.getAttribute('data-post-id');
    var bookmarkEl = bookmarkContainer.querySelector('.post-bookmarks');
    var bookmarks = bookmarkEl.textContent;

	const isCurrentlyBookmarked = bookmarkIcon.classList.contains('fa-bookmark');

	if(!isCurrentlyBookmarked) {
        bookmarks = parseInt(bookmarks, 10)+1;
    } else {
        bookmarks = parseInt(bookmarks, 10)-1;
    }

	try {
		const serverResponse = await fetch(
			`API.php?action=togglePostBookmark&id=${postId}&bookmarked=${isCurrentlyBookmarked ? 0 : 1}&bookmarks=${bookmarks}`
		);
		const responseData = await serverResponse.json();

		if (!responseData.success) {
			throw new Error(`Error bookmarking post: ${responseData.reason}`);
		}

		if (!isCurrentlyBookmarked) {
			// if bookmark is 'empty'
			bookmarkIcon.classList.remove('fa-bookmark-o');
			bookmarkIcon.classList.add('fa-bookmark');
			bookmarkEl.innerHTML = bookmarks;
		} else {
			bookmarkIcon.classList.remove('fa-bookmark');
			bookmarkIcon.classList.add('fa-bookmark-o');
			bookmarkEl.innerHTML = bookmarks;
		}
	} catch (error) {
		throw new Error(error.message || error);
	}
}

const addPostButton = document.querySelector('#add-post-button');

addPostButton.addEventListener('click', async (e) => {
	const imageUrl = prompt('Unesite URL željene slike:', 'images/hehe.jpg');
	if (!imageUrl) {
		return;
	}

	const description = prompt('Unesite opis:', 'Tuzno ali istinito.');
	if (!description) {
		return;
	}

	try{
		const serverResponse = await fetch(`API.php?action=addPost&imageUrl=${imageUrl}&description=${description}`);
		const responseData = await serverResponse.json();
		
		if(!responseData.success){
			
			throw new Error(`Error while adding post: ${responseData.reason}`);
		}

		const postTemplate = document.querySelector('#post-template');
		const postElement = document.importNode(postTemplate.content, true);

		postElement.querySelector('img').src = imageUrl;
		postElement.querySelector('p').textContent = description;
		console.log(imageUrl);

		postElement.querySelector('.heart-icon').addEventListener('click', handleHeartIconClick);
		postElement.querySelector('.bookmark-icon').addEventListener('click', handleBookmarkIconClick);

		const postsContainer = document.querySelector('#posts-container');
		
		postsContainer.appendChild(postElement);
	}
	catch(error){
		throw new Error(error.message || error);
	}
	location.reload();
	
});
