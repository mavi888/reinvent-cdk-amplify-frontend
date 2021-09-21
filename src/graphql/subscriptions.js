export const onUpdateShoppingListItem = `subscription onUpdateShoppingListItem {
    onUpdateShoppingListItem {
        id
        isComplete
        itemName
    }
  }`

export const onDeleteShoppingListItem = `subscription onDeleteShoppingListItem {
    onDeleteShoppingListItem {
      id
    }
  }`