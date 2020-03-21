export const RECIEVE_MEMES = 'RECIEVE_MEMES';
export const NEW_MEME = 'NEW_MEME';

function recieveMemes(json) {
  const { memes } = json.data;

  return {
    type: RECIEVE_MEMES,
    memes
  }
}

async function fetchMemesJson() {
  const response = await fetch('https://api.imgflip.com/get_memes');
  return await response.json();
}

export function fetchMemes() {
  return async function(dispatch) {
    const json = await fetchMemesJson();
    return dispatch(recieveMemes(json));
  }
}

export function newMeme(meme) {
  return {
    type: NEW_MEME,
    meme
  }
}