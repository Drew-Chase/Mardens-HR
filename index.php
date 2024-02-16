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

        <section id="hr-contact-info" class="col">
            <h2>HR Contact Information</h2>
            <div class="row wrap">
                <div class="panel col fill center vertical">
                    <h4>Cathy Callahan</h4>
                    <ul>
                        <li>Email:<b> ccallahan@mardens.com</b></li>
                        <li>
                            Phone: <b>
                                (207) 660-9218</b>
                        </li>
                        <li>
                            Cellphone: <b> (207) 649-3067</b>
                        </li>
                    </ul>
                    <br>
                    <hr style="width: 50%;">
                    <br>
                    <div class="row">
                        <a href="mailto:ccallahan@mardens.com" target="_blank" class="button"><i class="fa-solid fa-envelope"></i></a>
                        <a href="tel:207-660-9218" target="_blank" class="button"><i class="fa-solid fa-phone"></i></a>
                        <a href="tel:207-649-3067" target="_blank" class="button"><i class="fa-solid fa-mobile"></i></a>
                    </div>
                </div>
                <div class="panel col fill center vertical">
                    <h4>Kira Estes</h4>
                    <ul>
                        <li>
                            Email: <b> kira.estes@mardens.com</b>
                        </li>
                        <li>
                            Phone: <b> (207) 660-9292</b>
                        </li>
                        <li>
                            Cellphone: <b> (603) 455-1804</b>
                        </li>
                    </ul>
                    <br>
                    <hr style="width: 50%;">
                    <br>
                    <div class="row">
                        <a href="mailto:kira.estes@mardens.com" target="_blank" class="button"><i class="fa-solid fa-envelope"></i></a>
                        <a href="tel:207-660-9292" target="_blank" class="button"><i class="fa-solid fa-phone"></i></a>
                        <a href="tel:603-455-1804" target="_blank" class="button"><i class="fa-solid fa-mobile"></i></a>
                    </div>
                </div>
            </div>
        </section>

        <section class="banner row fill">
            <div class="col fill">
                <h2>Employee Tip Hotline</h2>
                <p>See something suspicious? Report it anonymous</p>
                <a href="tel:240-800-6273">240-800-6273</a>
            </div>
            <div class="col fill">
                <h2>Employee Assistance Program</h2>
                <p>Have any questions please feel free to reach out</p>
                <a href="tel:1-800-386-7055">1-800-386-7055</a>
            </div>
        </section>

        <section id="contact-us" class="col center horizontal">

            <h2 id="content-title" class="center horizontal" style="margin-bottom: 1rem;">Contact HR</h2>
            <p class="center horizontal" style="margin-top: 0;">If you don't have an email address, please enter a phone number to best contact you by.</p>
            <p class="center horizontal">Please select one of the options below to get started!</p>
            <div class="content-selector center horizontal wrap">
                <div class="content-selector-button" id="human-resources-button">Contact HR</div>
                <div class="content-selector-button" id="esp-button">Contact Employee Suggestion Program</div>
                <div class="content-selector-button" id="tipline-button">Contact Tip-Line</div>
            </div>
            <form class="col" action="javascript:void(0);" style="display: none">

                <div class="success col">
                    <h1>Submitted!</h1>
                    <p>Thank you for contacting us. We will get back to you as soon as possible.</p>
                </div>
                <div class="error col">
                    <h1>Error!</h1>
                    <p>Sorry, we were unable to submit your message! Please try again later.</p>
                </div>

                <div class="loading hidden"></div>

                <div class="row fill wrap" notip>
                    <div class="col fill floating-input">
                        <input type="text" id="fname" name="fname" placeholder="">
                        <label for="fname">First Name</label>
                    </div>
                    <div class="col fill floating-input">
                        <input type="text" id="lname" name="lname" placeholder="">
                        <label for="lname">Last Name</label>
                    </div>
                </div>
                <div class="row fill wrap" notip>
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
        <section id="faq">
            <div class="fill row">
                <h2 class="fill">FAQ</h2>
                <button id="print-faq-button"><i class="fa-solid fa-up-right-from-square"></i></button>
            </div>
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

<script src="/assets/lib/showdown/showdown.min.js?v=<?php echo filemtime($_SERVER["DOCUMENT_ROOT"] . "/assets/lib/showdown/showdown.min.js") ?>"></script>
<script src="/assets/js/faq.min.js?v=<?php echo filemtime($_SERVER["DOCUMENT_ROOT"] . "/assets/js/faq.min.js") ?>"></script>
<script src="/assets/js/sidebar.min.js?v=<?php echo filemtime($_SERVER["DOCUMENT_ROOT"] . "/assets/js/sidebar.min.js") ?>"></script>
<script src="/assets/js/skirting.min.js?v=<?php echo filemtime($_SERVER["DOCUMENT_ROOT"] . "/assets/js/skirting.min.js") ?>"></script>
<script src="/assets/js/contact-us.min.js?v=<?php echo filemtime($_SERVER["DOCUMENT_ROOT"] . "/assets/js/contact-us.min.js") ?>"></script>
</body>
</html>
