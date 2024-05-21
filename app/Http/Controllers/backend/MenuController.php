<?php

namespace App\Http\Controllers\backend;

use App\Models\Menu;
use App\Models\MenuItem;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class MenuController extends Controller
{
    // all main menu items
    function allMailMenuItem() {
        $main_menu_items = MenuItem::where('menu_id', 1)->get();
        return response()->json([
            'main_menu_items' => $main_menu_items,
            'code'  => 201
        ]);
    }

    // main menu store
    public function storeMainMenuItem(Request $request)
    {
        $exist_name = MenuItem::where('name', $request->name)->first();
        if (!empty($exist_name)) {
            return response()->json([
                'message' => 'The name already exists',
                'code'  => 422
            ]);
        }

        if (empty($exist_name)) {
            $data = new MenuItem();
            $data->menu_id = 1;
            $data->name = $request->name;
            $data->slug = Str::slug($request->name);
            $data->link = $request->link;
            
            $data->save();
            return response()->json([
                'data'  => $data,
                'message' => 'New menu item added successfully',
                'code'  => 201
            ]);
        }
    }

    // deleteMainMenuItem 
    function deleteMainMenuItem($id)  
    {
        // $data = MenuItem::find($id);
        // $data->delete();
        return response()->json(['code'=>$id,'message' => 'Menu Item deleted successfully']);
    }




}
