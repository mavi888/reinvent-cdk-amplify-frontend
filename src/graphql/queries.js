// Query that will return a list of items
export const listShoppingListItems = `query ListShoppingListItems {
    listShoppingListItems { 
        items {
            id
            itemName
            isComplete
        }
    }
}`;

export const getShoppingListItem = `query GetShoppingListItem($id: ID!) {
    getShoppingListItem(input: {id: $id}) { 
            id
            itemName
            isComplete
    }
}`;
