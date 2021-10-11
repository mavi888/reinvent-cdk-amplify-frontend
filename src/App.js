import React, { useEffect, useState } from 'react';
import './App.css';

import TableCard from './components/TableCard'
import NavBar from './components/NavBar'
import AddItemCard from './components/AddItemCard'
import { Grid } from '@material-ui/core'

import { API, graphqlOperation } from "aws-amplify";

import './configureAmplify'
import { listShoppingListItems } from "./graphql/queries.js";
import { createShoppingListItem, deleteShoppingListItem, updateShoppingListItem, notifyShoppingDone } from "./graphql/mutations.js"
import { onUpdateShoppingListItem } from "./graphql/subscriptions.js";

import { withAuthenticator } from '@aws-amplify/ui-react'

// This function is called immediately when the page loads, before populating the table with this data
export async function getUserItems() {
  const shoppingItems = await API.graphql(graphqlOperation(listShoppingListItems));
  console.log(shoppingItems)
  return shoppingItems
}

// This function is called when a user clicks the button 'Add'
export async function addItem(itemName) {
  return await API.graphql(graphqlOperation(createShoppingListItem, {
    input: {
      itemName: itemName,
      isComplete: false
    }
  })
  );
}

// This function is called when a user deletes an existing item in the table
export async function deleteItem(itemId) {
  return await API.graphql(graphqlOperation(deleteShoppingListItem, {
    input: {
      id: itemId
    }
  })
  );
}

export async function updateItem(itemId, isComplete) {
  return await API.graphql(graphqlOperation(updateShoppingListItem, {
    input: {
      id: itemId,
      isComplete: isComplete
    }
  })
  );
}

export async function markShoppingDoneAction() {
  return await API.graphql(graphqlOperation(notifyShoppingDone))
}

function App() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)

  async function getItems() {
    const shoppingItems = await API.graphql(graphqlOperation(listShoppingListItems));
    const { data: { listShoppingListItems: { items } } } = shoppingItems
    setLoading(false)
    setItems(items)
  }

  useEffect(() => {
    setLoading(true)
    getItems()
    const subscription = API.graphql(graphqlOperation(onUpdateShoppingListItem)).subscribe({
      next: () => {
        // just refresh for now
        getItems()
      }
    })
    return () => subscription.unsubscribe()
  }, [])


  return (

    <div className="app">
      <NavBar />
      <div className="content">
        {loading && <h2>Loading...</h2>}
        {
          <Grid container spaci="true" ng={3}>
            <AddItemCard
              addAction={
                async (itemName) => {
                  const response = await addItem(itemName)
                  if (response) {
                    console.log(response)
                    setItems([...items, response.data.createShoppingListItem])
                  }
                }
              }
            />
            <TableCard
              data={items}
              removeAction={async (id) => {
                const response = await deleteItem(id)
                console.log(response)
                if (response) {
                  setItems(items.filter(item => item.id !== id))
                }
              }}
              updateAction={async (id, isComplete) => {
                const response = await updateItem(id, isComplete)
                console.log(response)
              }}
              markCompletedAction={async () => {
                const response = await markShoppingDoneAction();
                console.log(response)
              }}
            />
           
          </Grid>
        }
      </div>
    </div>
  );
}
export default withAuthenticator(App);

