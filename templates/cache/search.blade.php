{{--
@type 	Template
@for 	Search Results
--}}
@extends('layouts.app')

@section('content')

	@include('partials.page-header')

	@wpposts
		@include('content.search')
	@wpempty
		@include('content.404')
	@wpend

	{!! the_posts_navigation() !!}

@endsection
