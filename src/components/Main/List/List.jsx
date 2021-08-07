import React, { useContext } from 'react'
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from '@material-ui/core'
import { Delete, MoneyOff } from '@material-ui/icons'

import { ExpenseTrackerContext } from '../../../context/context'
import useStyles from './styles'

const List = () => {
  const classes = useStyles()
  const globalState = useContext(ExpenseTrackerContext)

  console.log(globalState)

  const transaction = [
    {
      id: 1,
      type: 'Income',
      category: 'Salary',
      amount: 50,
      date: 'Wed Dec 16',
    },
    {
      id: 2,
      type: 'Expense',
      category: 'Pets',
      amount: 50,
      date: 'Thu Dec 17',
    },
    {
      id: 3,
      type: 'Income',
      category: 'Business',
      amount: 150,
      date: 'Fri Dec 18',
    },
  ]

  return (
    <MUIList dense={false} className={classes.list}>
      {transaction.map((transaction) => (
        <Slide
          direction='down'
          in
          mountOnEnter
          unmountOnExit
          key={transaction.id}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  transaction.type === 'Income'
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transaction.category}
              secondary={`$${transaction.amount} - ${transaction.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton edge='end' arial-label='delete' onClick=''>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  )
}

export default List