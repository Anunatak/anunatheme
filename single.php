{{--
@type 	Template
@what 	Single Posts
--}}
@extends('layouts.app')

@section('content')

	@wpposts
		@include('partials.page-header')
		@include('content.single')
	@wpempty
		@include('partials.page-header')
		@include('content.404')
	@wpend

@endsection
