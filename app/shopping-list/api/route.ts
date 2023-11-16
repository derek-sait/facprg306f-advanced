
import shoppingListData from '../_data/shoppinglist.json'
import { ShoppingListItem } from '../types/listitem.type';

export async function GET() {
//   return new Response("Hello World!");

    const slItems: ShoppingListItem[] = shoppingListData;

    let slItemsResponse = new Response( JSON.stringify(slItems), {status: 200}  );

    return slItemsResponse;

}


export async function POST(){
    
}