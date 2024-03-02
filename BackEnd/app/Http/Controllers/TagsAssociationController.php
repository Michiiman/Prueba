<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Tags_association;
use App\Models\Tags;


class TagsAssociationController extends Controller
{
    public $currentLevel = 1;
    public $lastTagSelect = '';

    public function getLevel(Request $request)
    {
        $this->currentLevel = $request->query('level');
        $this->lastTagSelect = $request->query('lastTag');

        $tags_association = Tags_association::query();

        $tags_association->leftJoin('tags', function ($join) {
            $join->on('tags.id', '=', \DB::raw("SUBSTRING_INDEX(SUBSTRING_INDEX(tags_association.ids_tags, ',', {$this->currentLevel}), ',', -1)"));
        });

        if ($this->lastTagSelect != '') {
            $tags_association->whereRaw("SUBSTRING_INDEX(SUBSTRING_INDEX(tags_association.ids_tags, ',', {$this->currentLevel}-1), ',', -1) = '{$this->lastTagSelect}'");
        }

        $tags_association->select(\DB::raw("SUBSTRING_INDEX(SUBSTRING_INDEX(tags_association.ids_tags, ',', {$this->currentLevel}), ',', -1) as tag_id"), 'tags.nombre');

        $results = $tags_association->distinct()->get();

        return response()->json($results, 200);
    }

    public function validateTag()
    {
        $tags_association = Tags_association::selectRaw('ids_tags')
            ->distinct()
            ->get();
        return response()->json($tags_association,200);
    }







}
