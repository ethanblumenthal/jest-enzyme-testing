import axios from 'axios'
import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from 'actions/types'

export const saveComment = comment => ({
  type: SAVE_COMMENT,
  payload: comment
})

export const fetchComments = () => async dispatch => {
  const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
  dispatch({ type: FETCH_COMMENTS, payload: data})
}

export const changeAuth = isLoggedIn => ({
  type: CHANGE_AUTH,
  payload: isLoggedIn
})
