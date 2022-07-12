<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="/favicon_liveo.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content=""
    />
    <link
      rel="stylesheet"
      type="text/css"
      charset="UTF-8"
      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
    />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    
    <title>Liveo</title>
    
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="{{ mix ('css/template.css') }}" rel="stylesheet">
    <script src="https://unpkg.com/react-yandex-maps/dist/production/react-yandex-maps.umd.js"></script>
  </head>
  <body>
      
    <div id="root"></div>

    <script src="{{ mix ('js/index.js') }}"></script>
  </body>
</html>
