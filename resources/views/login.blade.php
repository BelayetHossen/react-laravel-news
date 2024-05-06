<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Admin Dashboard | Log in</title>

    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
    <link rel="stylesheet" href="{{ url('backend/plugins/fontawesome-free/css/all.min.css') }}">
    <link rel="stylesheet" href="{{ url('backend/plugins/icheck-bootstrap/icheck-bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ url('backend/dist/css/adminlte.min.css') }}">
</head>

<body class="hold-transition login-page">
    <div id="admin-login-page" class="login-box"></div>

    <script src="{{ url('backend/plugins/jquery/jquery.min.js') }}"></script>
    <script src="{{ url('backend/plugins/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ url('backend/dist/js/adminlte.min.js') }}"></script>

    @viteReactRefresh
    @vite('resources/js/auth.js')
</body>

</html>
