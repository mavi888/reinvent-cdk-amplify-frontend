export const createShoppingListItem = `mutation createShoppingListItem($input: CreateShoppingListItemInput!) {
  createShoppingListItem(input: $input) {
      id
      itemName
      isComplete
    }
  }`;

  export const deleteShoppingListItem = `mutation deleteShoppingListItem($input: DeleteShoppingListItemInput!) {
    deleteShoppingListItem(input: $input) {
      id
      }
    }`;


    export const updateShoppingListItem = `mutation updateShoppingListItem($input: UpdateShoppingListItemInput!) {
      updateShoppingListItem(input: $input) {
        id
        isComplete
        itemName
      }
      }`;