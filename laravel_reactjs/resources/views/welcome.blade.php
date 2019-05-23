<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Backend</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="{{ asset('AdminLTE3/plugins/font-awesome/css/font-awesome.min.css') }}">
    <!-- Theme style -->
    <link rel="stylesheet" href="{{ asset('AdminLTE3/dist/css/adminlte.min.css') }}">
    <!-- Date Picker -->
    <link rel="stylesheet" href="{{ asset('AdminLTE3/plugins/datepicker/datepicker3.css') }}">
    <!-- Daterange picker -->
    <link rel="stylesheet" href="{{ asset('AdminLTE3/plugins/daterangepicker/daterangepicker-bs3.css') }}">
    <!-- Notification -->
    <!-- <link href="{{ asset('toastr/build/toastr.css') }}" rel="stylesheet"/> -->
    <!-- jQuery -->
    <script src="{{ asset('AdminLTE3/plugins/jquery/jquery.min.js') }}"></script>
    <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">
    <script type="text/javascript">
        window.Laravel = {!! json_encode([
            'baseUrl' => url('/'),
            'csrfToken' => csrf_token(),
        ]) !!};
    </script>
</head>
<body class="hold-transition sidebar-mini">
    <div id="app"></div>
    <script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
    
    <!-- jQuery UI 1.11.4 -->
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
    <!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
    <script>
    $.widget.bridge('uibutton', $.ui.button)
    </script>
    <!-- jquery-validate -->
    <!-- <script src="{{ asset('jquery-validation/dist/jquery.validate.js') }}"></script> -->
    <!-- Notification -->
    <!-- <script src="{{ asset('toastr/toastr.js') }}"></script> -->
    <!-- Bootstrap 4 -->
    <script src="{{ asset('AdminLTE3/plugins/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
    <!-- daterangepicker -->
    <script src="{{ asset('AdminLTE3/plugins/daterangepicker/daterangepicker.js') }}"></script>
    <!-- datepicker -->
    <script src="{{ asset('AdminLTE3/plugins/datepicker/bootstrap-datepicker.js') }}"></script>
    <!-- AdminLTE App -->
    <script src="{{ asset('AdminLTE3/dist/js/adminlte.js') }}"></script>
    <!-- AdminLTE dashboard demo (This is only for demo purposes) -->
    <script src="{{ asset('AdminLTE3/dist/js/pages/dashboard.js') }}"></script>
    <!-- app.js backend -->
    <!-- <script type="text/javascript" src="{{ asset('js/backend/app.js') }}"></script> -->
</body>

</html>
