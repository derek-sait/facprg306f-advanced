import shoppingListData from "../../_data/shoppinglist.json"
import { ShoppingListItem } from "../../types/listitem.type";

export async function GET(request: Request, {params}: {params: {id: number}} ){
    const id = Number(params.id);
    const slItems: ShoppingListItem[] = shoppingListData;
    let singleItem = slItems.find( (item) => item.id === id );
    let itemResponse = new Response(JSON.stringify(singleItem), {status:200});
    return itemResponse;
}