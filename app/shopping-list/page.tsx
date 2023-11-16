// async function fetchHello(){
//     const response = await fetch("http://localhost:3000/shopping-list/api");
//     const data = await response.text();
//     return data;
// }

import { ShoppingListItem } from "./types/listitem.type";

async function fetchShoppingListItems() {
  try {
    const response = await fetch("http://localhost:3000/shopping-list/api");
    const data: ShoppingListItem[] = await response.json();
    return data;
  } catch (error) {}
}

async function fetchSingleShoppingItem(itemId: number) {
  try {
    const response = await fetch(
      `http://localhost:3000/shopping-list/api/${itemId}`
    );
    const data: ShoppingListItem = await response.json();
    return data;
  } catch (error) {}
}

export default async function Page(): Promise<JSX.Element> {
  // let sayHello: string = await fetchHello();

  let listItems = await fetchShoppingListItems();

  let singleItem = await fetchSingleShoppingItem(5);

  return (
    <main>
      <header>
        <h1>Shopping List (API Routes)</h1>
      </header>
      <section>
        {/* <p>{sayHello}</p> */}
        {/* <ul>
          {listItems?.map((item) => (
            <li key={item.id}>
              {item.name} | {item.category}
            </li>
          ))}
        </ul> */}
        <p>{singleItem?.id} | {singleItem?.name} | {singleItem?.category}</p>
      </section>
    </main>
  );
}
