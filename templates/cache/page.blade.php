{{--
@type 	Template
@for 	Pages
--}}
@extends('layouts.app')

@section('content')

	@wpposts
		@include('partials.page-header')
		@include('content.page')
	@wpempty
		@include('partials.page-header')
		@include('content.404')
	@wpend

@endsection
