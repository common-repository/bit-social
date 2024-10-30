<?php

namespace BitApps\Social\HTTP\Controllers;

use BitApps\Social\Deps\BitApps\WPKit\Http\Request\Request;
use BitApps\Social\Deps\BitApps\WPKit\Http\Response;
use BitApps\Social\Model\Group;

class GroupController
{
    public function index()
    {
        $groups = Group::desc()->get(['id', 'name', 'account_ids', 'status']);

        if (!$groups) {
            return [];
        }

        return $groups;
    }

    public function store(Request $request)
    {
        $validatedData = (object) $request->validate([
            'name'        => ['required', 'string'],
            'account_ids' => ['required', 'string'],
            'status'      => ['nullable', 'integer'],
        ]);

        if (Group::insert($validatedData)) {
            return Response::success('Group created successfully');
        }

        return Response::error('Group creation failed');
    }

    public function update(Request $request, Group $group)
    {
        $validatedData = (object) $request->validate([
            'name'        => ['required', 'string'],
            'account_ids' => ['required', 'string'],
            'status'      => ['nullable', 'integer'],
        ]);

        $group->update($validatedData);

        if ($group->save()) {
            return Response::success('Group updated successfully');
        }

        return Response::error('Group updating failed');
    }

    public function destroy(Group $group)
    {
        $group->delete();

        return Response::success('Group deleted successfully');
    }
}
