<?php

namespace App\Http\Controllers\frontend;

use App\Models\Post;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class HomeController extends Controller
{
    // skip 13 Next Categories
    function headerCategories()
    {
        $first13Categories = Category::latest()->take(13)->get();
        $skip13NextCategories = Category::latest()->skip(13)->take(50)->get();
        return response()->json([
            'first13Categories' => $first13Categories,
            'skip13NextCategories' => $skip13NextCategories,
            'code'  => 201
        ]);
    }
    // increase populer post count by click user
    public function clickPost($id){
        $post = Post::findOrFail($id);
        $post->increment('popular_count');
        return response()->json(['message' => 'Popular count incremented successfully'], 200);
    }

    // home post
    function homePost() {
        $latestOne = Post::latest()->first();
        $nextFourPosts = Post::latest()->skip(1)->take(4)->get();
        $nextSixPosts = Post::latest()->skip(5)->take(6)->get();
        $popularFourPosts = Post::orderBy('popular_count', 'desc')->take(4)->get();
        return response()->json([
            'latestOne' => $latestOne,
            'nextFourPosts' => $nextFourPosts,
            'nextSixPosts' => $nextSixPosts,
            'popularFourPosts' => $popularFourPosts,
            'code'  => 201
        ]);
    }

    // single post page
    public function getSinglePost($slug){
        $post = Post::where('slug', $slug)
                ->with('mainCategory', 'subCategory', 'subSubCategory')
                ->firstOrFail();

        // Retrieve more posts with the same main category
        $mainCategoryId = $post->mainCategory->id;
        $moreSixPosts = Post::whereHas('mainCategory', function ($query) use ($mainCategoryId) {
                            $query->where('id', $mainCategoryId);
                    })
                    ->orderBy('created_at', 'desc')
                    ->skip(1)
                    ->take(6)
                    ->get();

        return response()->json([
            'post' => $post,
            'moreSixPosts' => $moreSixPosts,
            'code' => 201
        ]);
    }
    
}
