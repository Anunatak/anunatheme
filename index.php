{{--
@type 	Template
@what 	Index
--}}
@extends('layouts.app')

@section('content')

	@include('partials.page-header')

	@wpposts
		@include('content.content')
	@wpempty
		@include('content.404')
	@wpend

	{!! the_posts_navigation() !!}

@endsection
