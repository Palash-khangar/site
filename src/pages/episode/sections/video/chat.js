import {PropTypes} from 'react'
import {StyleSheet, css} from 'aphrodite'
import {stringify as queryify} from 'query-string'

export default Chat

function Chat({youTubeId}) {
  const {styles} = Chat
  const params = {
    v: youTubeId,
    embed_domain: process.env.CI ? 'javascriptair.com' : 'localhost', // eslint-disable-line camelcase
  }
  const base = 'https://www.youtube.com/live_chat'
  const src = `${base}?${queryify(params)}`
  return (
    <iframe
      width="640"
      height="500"
      className={css(styles.chatFrame)}
      src={src}
    />
  )
}

Chat.propTypes = {
  youTubeId: PropTypes.string.isRequired,
}

Chat.styles = StyleSheet.create({
  chatFrame: {
    maxWidth: '100%',
    marginTop: 10,
  },
})
