<!--
Author: Drew Chase - Marden's Inc Lead Software Engineer
Date Created: 02/26/2024
-->

<?php
require_once $_SERVER['DOCUMENT_ROOT'] . '/vendor/autoload.php';
$markdown = new Parsedown();
?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HR Dashboard Links - MSS HR Dashboard</title>
    <link rel="shortcut icon" href="/assets/images/favicon.ico" type="image/x-icon">

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet">

    <!-- Custom CSS -->
    <link rel="stylesheet" href="/assets/css/main.min.css?v=<?php echo filemtime($_SERVER["DOCUMENT_ROOT"] . "/assets/css/main.min.css") ?>">
    <link rel="stylesheet" href="/assets/css/sidebar.min.css?v=<?php echo filemtime($_SERVER["DOCUMENT_ROOT"] . "/assets/css/sidebar.min.css") ?>">
    <link rel="stylesheet" href="/assets/css/skirting.min.css?v=<?php echo filemtime($_SERVER["DOCUMENT_ROOT"] . "/assets/css/skirting.min.css") ?>">
    <link rel="stylesheet" href="/assets/css/scrollbar.min.css?v=<?php echo filemtime($_SERVER["DOCUMENT_ROOT"] . "/assets/css/scrollbar.min.css") ?>">
    <link rel="stylesheet" href="/assets/css/content.min.css?v=<?php echo filemtime($_SERVER["DOCUMENT_ROOT"] . "/assets/css/content.min.css") ?>">
    <link rel="stylesheet" href="/assets/css/inputs.min.css?v=<?php echo filemtime($_SERVER["DOCUMENT_ROOT"] . "/assets/css/inputs.min.css") ?>">
    <link rel="stylesheet" href="/assets/css/faq.min.css?v=<?php echo filemtime($_SERVER["DOCUMENT_ROOT"] . "/assets/css/faq.min.css") ?>">
    <link rel="stylesheet" href="/assets/css/responsive.min.css?v=<?php echo filemtime($_SERVER["DOCUMENT_ROOT"] . "/assets/css/responsive.min.css") ?>">
    <link rel="stylesheet" href="/assets/css/manager.min.css?v=<?php echo filemtime($_SERVER["DOCUMENT_ROOT"] . "/assets/css/manager.min.css") ?>">


    <!-- Font Awesome -->
    <link rel="stylesheet" href="/assets/lib/fontawesome/css/all.min.css">
    <!-- JQuery -->
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
</head>
<body class="col">
<header>
    <h1>Marden's Human Resources</h1>
    <p class="subtitle">A comprehensive human resource page for all Marden's employees </p>
</header>

<main class="row">
    <div class="row">
        <div id="sidebar" class="col">
            <button id="hamburger"><i class="fa fa-bars"></i></button>
            <div id="sidebar-items" class="col">
                <h3>Sections</h3>
                <?php
                // get files in the markdown directory
                $files = array_diff(scandir($_SERVER['DOCUMENT_ROOT'] . '/assets/md'), array('..', '.'));
                foreach ($files as $file) {
                    // remove the .md extension
                    $displayName = str_replace(".md", "", $file);
                    echo "<a href='javascript:void(0);' onclick='loadMD(\"$file\")' style='text-transform: capitalize'>$displayName</a>";
                }
                ?>
            </div>
        </div>
    </div>
    <div class="col" style="width: 80%">

        <div id="content" class="col">
        </div>

        <button id="save">Save</button>
    </div>
</main>


<footer class="row">
    <p id="copy"><a href="https://mardens.com">Marden's Surplus & Salvage</a> All Rights Reserved &copy; <?php echo date("Y"); ?></p>
    <p id="clock">
        Friday, January 26, 2024 <br>
        1:41:09 PM
    </p>
</footer>
<script src="/assets/lib/showdown/showdown.min.js?v=<?php echo filemtime($_SERVER["DOCUMENT_ROOT"] . "/assets/lib/showdown/showdown.min.js") ?>"></script>
<script src="/assets/js/faq.min.js?v=<?php echo filemtime($_SERVER["DOCUMENT_ROOT"] . "/assets/js/faq.min.js") ?>"></script>
<script src="/assets/js/search.min.js?v=<?php echo filemtime($_SERVER["DOCUMENT_ROOT"] . "/assets/js/search.min.js") ?>"></script>
<script src="/assets/js/skirting.min.js?v=<?php echo filemtime($_SERVER["DOCUMENT_ROOT"] . "/assets/js/skirting.min.js") ?>"></script>
<script src="/assets/js/contact-us.min.js?v=<?php echo filemtime($_SERVER["DOCUMENT_ROOT"] . "/assets/js/contact-us.min.js") ?>"></script>
<script src="/assets/js/manager.min.js?v=<?php echo filemtime($_SERVER["DOCUMENT_ROOT"] . "/assets/js/manager.min.js") ?>"></script>

</body>
</html>
