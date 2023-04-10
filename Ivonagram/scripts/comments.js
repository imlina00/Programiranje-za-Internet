const commentButtons = document.querySelectorAll('.comment-btn');
for (let i = 0; i < commentButtons.length; i++) {
	const commentButton = commentButtons[i];
	commentButton.addEventListener('click', handleCommentClick);
}

async function handleCommentClick(e) {
	const commentBtn = e.currentTarget;
	const postID = commentBtn.getAttribute('post-comment-id');

    const description = prompt('Napišite novi komentar:', 'Evo novog komentara.');
	if (!description) {
		return;
	}

	try {
		const serverResponse = await fetch(
			`API.php?action=addComment&description=${description}&postID=${postID}`
		);
		const responseData = await serverResponse.json();

		if (!responseData.success) {
			throw new Error(`Error commenting: ${responseData.reason}`);
		}

        location.reload();

	} catch (error) {
		throw new Error(error.message || error);
	}
}