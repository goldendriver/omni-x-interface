import * as React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import { useSelector, useDispatch } from 'react-redux'
import { selectSnackState, selectSnackMessage, closeSnackBar, selectSnackStatus } from '../redux/reducers/snackBarReducer'
import MuiAlert from '@material-ui/lab/Alert'

const Alert = (props: any) => {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}

const SnackbarComponent = () => {
  const opened = useSelector(selectSnackState)
  const status = useSelector(selectSnackStatus)
  const message = useSelector(selectSnackMessage)
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(closeSnackBar())
  }

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={opened}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={status}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default SnackbarComponent