<?php
require_once 'vendor/autoload.php';
$markdown = new Parsedown();
?>

<!--  https://www.figma.com/file/mgEr7Ya2SUsEzk6Kt3PQlL/Mardens-HR?type=design&node-id=2-277&mode=design&t=FiU0WmPAFgUyBEqO-4  -->

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
    <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet">

    <!-- Custom CSS -->
    <link rel="stylesheet" href="/assets/css/main.min.css">
    <link rel="stylesheet" href="/assets/css/sidebar.min.css">
    <link rel="stylesheet" href="/assets/css/skirting.min.css">
    <link rel="stylesheet" href="/assets/css/scrollbar.min.css">
    <link rel="stylesheet" href="/assets/css/content.min.css">
    <link rel="stylesheet" href="/assets/css/inputs.min.css">
    <link rel="stylesheet" href="/assets/css/faq.min.css">
    <link rel="stylesheet" href="/assets/css/responsive.min.css">


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
                <?php
                echo $markdown->text(file_get_contents($_SERVER['DOCUMENT_ROOT'] . '/assets/md/sidebar.md'));
                ?>
            </div>
        </div>
    </div>

    <div id="content" class="col">
        <section id="hr-news-alerts" class="col">
            <h2>HR News and Alerts</h2>
            <div class="row wrap">
                <div class="panel col fill center vertical">
                    <h4>Handbook</h4>
                    <p>Click below to check out our current Employee Handbook</p>
                    <a href="/assets/pdf/EmployeeHandbook_rev10-2020.pdf" target="_blank" class="button">View</a>
                </div>
                <div class="panel col fill center vertical">
                    <h4>Employment Opportunities</h4>
                    <p>Looking for a change? Moving to new location? Marden's has job opportunities available on our website for you to consider. We like hiring from within Marden's and want you to be aware of any positions that might be of interest.
                        Check out what we currently are looking for.</p>
                    <a href="https://secure3.saashr.com/ta/6127576.jobs?ShowAllOpenings" target="_blank" class="button">Positions Available Now!</a>
                </div>
            </div>
        </section>
        <section id="contact-us" class="col center horizontal">
            <div class="content-selector center horizontal wrap">
                <div class="content-selector-button" id="human-resources-button" active>Human Resources</div>
                <div class="content-selector-button" id="esp-button">Employee Suggestion Program</div>
            </div>

            <h2 id="content-title" class="center horizontal" style="margin-bottom: 1rem;">Contact HR</h2>
            <p class="center horizontal" style="margin-top: 0;">If you don't have an email address, please enter a phone number to best contact you by.</p>
            <form class="col" action="javascript:void(0);">

                <div class="success col">
                    <h1>Submitted!</h1>
                    <p>Thank you for contacting us. We will get back to you as soon as possible.</p>
                </div>
                <div class="error col">
                    <h1>Error!</h1>
                    <p>Sorry, we were unable to submit your message! Please try again later.</p>
                </div>

                <div class="loading hidden"></div>

                <div class="row fill wrap">
                    <div class="col fill floating-input">
                        <input type="text" id="fname" name="fname" placeholder="" required>
                        <label for="fname">First Name</label>
                    </div>
                    <div class="col fill floating-input">
                        <input type="text" id="lname" name="lname" placeholder="" required>
                        <label for="lname">Last Name</label>
                    </div>
                </div>
                <div class="row fill wrap">
                    <div class="col floating-input fill">
                        <input type="email" id="email" name="email" placeholder="">
                        <label for="email">Email</label>
                    </div>
                    <div class="col floating-input fill">
                        <input type="tel" id="phone" name="phone" placeholder="">
                        <label for="phone">Phone</label>
                    </div>
                </div>
                <div class="col floating-input">
                    <input type="text" name="subject" id="subject" placeholder="">
                    <label for="subject">Subject</label>
                </div>
                <div class="col floating-input">
                    <textarea name="message" id="message" cols="30" rows="10" required></textarea>
                    <label for="message">Message</label>
                </div>

                <button id="submit-button" title="Submit contact form!"><i class="fa-solid fa-paper-plane"></i></button>
                <button id="full-submit-button" style="display: none">Submit <i class="fa-solid fa-paper-plane"></i></button>
            </form>
        </section>

        <div id="eap" class="banner">
            <h2>Employee Assistance Program</h2>
            <a href="tel:1-800-386-7055">1-800-386-7055</a>
        </div>

        <section id="faq">
            <h2>FAQ</h2>
            <div class="faq-items col">
            </div>
        </section>

    </div>
</main>


<footer class="row">
    <p id="copy"><a href="https://mardens.com">Marden's Surplus & Salvage</a> All Rights Reserved &copy; <?php echo date("Y"); ?></p>
    <p id="clock">
        Friday, January 26, 2024 <br>
        1:41:09 PM
    </p>
</footer>

<script src="/assets/lib/showdown/showdown.min.js"></script>
<script src="/assets/js/faq.min.js"></script>
<script src="/assets/js/sidebar.min.js"></script>
<script src="/assets/js/skirting.min.js"></script>
<script src="/assets/js/contact-us.min.js"></script>
</body>
</html>
