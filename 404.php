{{--
@type 	Template
@for 	Error Pages
--}}
@extends('layouts.app')

@section('content')

	@include('partials.page-header')
	@include('content.404')

@endsection
