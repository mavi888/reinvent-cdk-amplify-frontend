/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const notifyShoppingDone = /* GraphQL */ `
  mutation NotifyShoppingDone {
    notifyShoppingDone
  }
`;
export const createShoppingListItem = /* GraphQL */ `
  mutation CreateShoppingListItem($input: CreateShoppingListItemInput!) {
    createShoppingListItem(input: $input) {
      id
      itemName
      isComplete
      createdAt
      updatedAt
    }
  }
`;
export const updateShoppingListItem = /* GraphQL */ `
  mutation UpdateShoppingListItem($input: UpdateShoppingListItemInput!) {
    updateShoppingListItem(input: $input) {
      id
      itemName
      isComplete
      createdAt
      updatedAt
    }
  }
`;
export const deleteShoppingListItem = /* GraphQL */ `
  mutation DeleteShoppingListItem($input: DeleteShoppingListItemInput!) {
    deleteShoppingListItem(input: $input) {
      id
      itemName
      isComplete
      createdAt
      updatedAt
    }
  }
`;
