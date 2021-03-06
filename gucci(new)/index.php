<?php
    include_once 'common.php';
?>
<!DOCTYPE HTML>
<html>

<head>
    <meta charset="utf-8">
    <link rel="icon" href="favicon.html" type="image/x-icon" />
    <link rel="shortcut icon" href="favicon.html" type="image/x-icon" />
    <!--[if ie]><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><![endif]-->
    <meta name="description" content="" />
    <meta name="keywords" content="" />
    <meta name="author" content="">
    <meta property="og:description" content="" />
    <meta property="og:title" content="" />
    <meta property="og:site_name" content="" />
    <meta property="og:image" content="" />
    <meta property="og:url" content="" />
    <meta property="og:type" content="article" />
    <link rel="stylesheet" href="assets/css/stylesheet.css?v=3" />
    <link rel="stylesheet" href="assets/css/jquery.mCustomScrollbar.css" />

    <script src="assets/js/jquery-1.8.3.min.js"></script>
    <script src="assets/js/jquery-ui-1.9.1.custom.min.js"></script>
    <script src="assets/js/cufon-yui.js"></script>
    <script src="assets/js/html5shiv.js"></script>
    <script src="assets/js/modernizr-2.5.3.js"></script>
    <script src="assets/js/jquery.easing.1.3.js"></script>
    <script src="assets/js/jquery.mousewheel.min.js"></script>
    <script src="assets/js/jquery.scrollto.js"></script>
    <script src="assets/js/jquery.mCustomScrollbar.js"></script>
    <script src="assets/js/jquery.transit.min.js"></script>
    <script src="assets/js/jquery.imgpreload.js"></script>
    <script src="assets/js/scripts.js"></script>

    <!-- <link rel="stylesheet" href="../src/css/jquery.scrollSections.css">
 -->
    <link href='http://fonts.googleapis.com/css?family=Roboto:500,400italic,100,300,700,500italic,100italic,300italic,400' rel='stylesheet' type='text/css'>
    <title>Studio Gucci</title>
</head>

<body>
    <section id="container">
        <header>
            <div class="centered">
                <h1><a href="#/home" title=""><img src="images/logo.png" height="41" alt=""></a></h1>
                <nav>
	                <a href="index.html#/home" title="Home" class="selected">Home<span class="underline"></span></a>
	                <a href="index.html#/about" title="designing">About<span class="underline"></span></a>
	                <a href="index.html#/history" title="">History<span class="underline"></span></a>
	                <a href="index.html#/awards-and-facts" title="Awards & Facts">Services<span class="underline"></span></a>
	                <a href="index.html#/portfolio" title="Portfolio">Gallery<span class="underline"></span></a>
	                <a href="index.html#/Albania" title="Case">Gallery<span class="underline"></span></a>
                    <!-- <a href="index.html#/gallery" title="Case">Gallery<span class="underline"></span></a> -->
	                <a href="index.html#/case" title="Clients">Live Feed<span class="underline"></span></a>
	                <a href="index.html#/clients" title="Contact">Clients<span class="underline"></span></a>
                    <a href="index.html#/Contact" title="Contact">Contact<span class="underline"></span></a>
	                <a href="" target="_blank" class="be" title=""></a><span class="separator"></span>
                    
	                <a href="http://www.facebook.com" target="_blank" class="fb" title=""></a><span class="separator"></span>
	                <a href="mailto:hello@hello.com?subject=Say%20hello!" class="mail" title="Say hello!">hello@hello.com</a>
                </nav>
                <br class="cb">
            </div>
        </header>
        <div class="keyboard">
            <div class="holder"><a href="#" class="btn up"><span class="pressed">up</span></a><a href="#" class="btn left"><span class="pressed">left</span></a><a href="#" class="btn down"><span class="pressed">down</span></a><a href="#" class="btn right"><span class="pressed">right</span></a>
            </div>
        </div>
        <section id="home" class="sub scrollsections">
            <div class="content">
                <h2><?php echo $lang['1'];?><span class="line"></span></h2><br><br><br>
                <h2><?php echo $lang['2'];?><span class="line"></span></h2>
            </div>
        </section>
        <!-- <section id="aboutus" class="sub scrollsections">
            <div class="content">
                <h2><?php echo $lang['1'];?><span class="line"></span></h2><br><br><br>
                <h2><?php echo $lang['2'];?><span class="line"></span></h2>
            </div>
        </section> -->
        <section id="designing" class="sub scrollsections">
            <div class="content">
                <h2><?php echo $lang['3'];?><span class="line"></span></h2>
                <div class="slider-holder" id="slider-designing">
                    <div class="type ipad"><span class="visual"><img src="images/design-visual-3.png" width="212" height="198" alt="webdesign"></span>
                        <div class="description">
                            <h3><?php echo $lang['4'];?></h3>
                            <p><?php echo $lang['5'];?></p><a title="Read More" class="grey" href="#" data-type="interface">Read More</a>
                        </div>
                    </div>
                    <div class="type ipad"><span class="visual"><img src="images/design-visual-2.png" width="212" height="198" alt="iphone"></span>
                        <div class="description">
                            <h3><?php echo $lang['6'];?></h3>
                            <p><?php echo $lang['7'];?></p><a title="Read More" class="grey" href="#" data-type="web">Read More</a>
                        </div>
                    </div>
                    <div class="type iphone"><span class="visual"><img src="images/design-visual-1.png" width="119" height="198" alt="iphone"></span>
                        <div class="description">
                            <h3><?php echo $lang['8'];?></h3>
                            <p><?php echo $lang['9'];?></p><a title="Read More" class="grey" href="#" data-type="mobile">Read More</a>
                        </div>
                    </div>
                    <br class="cb">
                </div>
            </div>
        </section>
        <section id="about" class="sub scrollsections">
            <div class="content">
                <h2><span class="nhg-md"><strong><?php echo $lang['10'];?></strong></span>Learn more<br/>about our key moments in the timeline.<span class="line"></span></h2>
                <div class="career">
                    <div class="mask line-1"></div>
                    <div class="mask curve-1"><span class="current"></span>
                    </div>
                    <div class="mask line-2"></div>
                    <div class="mask curve-2"><span class="current"></span>
                    </div>
                    <div class="mask line-3"></div>
                    <div class="mask curve-3"><span class="current"></span>
                    </div>
                    <div class="mask line-4"></div>

                    <span class="point p1"><span class="title">May 2009</span><span class="info">We opened<br/>our firm</span></span>
                    <span class="point p2"><span class="title">September 2009</span><span class="info">First client<br/>in accounting</span></span>
                    <span class="point p3"><span class="title">December 2009</span><span class="info">Project<br/>portfolio publication</span></span>
                    <span class="point p4"><span class="title">March 2010</span><span class="info">First consulting services<br/>to a company</span></span>
                    <span class="point p5"><span class="title">July 2010</span><span class="info">Registered to <br/>the chamber of commerce</span></span>
                    <span class="point p6"><span class="title">January 2011</span><span class="info">We are <br/>fully licenced</span></span>
                    <span class="point p7"><span class="title">June 2011</span><span class="info">Opened branch<br/>in Zyrich, Switzerland</span></span>
                    <span class="point p8"><span class="title">October 2011</span><span class="info">Cooperation<br/>with Italian government</span></span>
                    <span class="point p9"><span class="title">February 2012</span><span class="info">Celebrated<br/>our 5th anniversary</span></span>
                    <span class="point p10"><span class="title">April 2012</span><span class="info">We're joining<br/>CBS Conference.</span></span><span class="point p11"><span class="title">July 2012</span><span class="info">Opened branch <br/>in Tirana, Albania</span></span>
                </div>
            </div>
            <div class="bottom"></div>
        </section>
        <section id="awards" class="sub scrollsections">
            <div class="top"></div>
            <div class="content">
                <h2>Our branch in<span class="nhg-md"><strong> Albania</strong></span><span class="line"></span></h2>
                <div id="wrap"><h3>Studio GUCCI and PARTNERS practices the professional activity permanently in the headquarters of Tirana, the office consists of a team of professionals Italian and Albanian staff ,wich allows to combine professional services at high professional standarts certified with in­depth local knowledge.</h3></div>
                <div class="career">
                    <div class="mask line-1"></div>
                    <div class="mask curve-1"><span class="current"></span></div>
                    <div class="mask line-2"></div>

                    <span class="point p1"><span class="title">Bussines Implemetation Support</span><span class="info">Read More</span></span>
                    <span class="point p2"><span class="title">Staff Selecting Assistance</span><span class="info">Read More</span></span>
                    <span class="point p3"><span class="title">Partner Identification</span><span class="info">Read More</span></span>
                    <span class="point p4"><span class="title">Research of Fiancing Sources</span><span class="info">Read More</span></span>
                    <span class="point p5"><span class="title">TAX Assistance & Revision</span><span class="info">Read More</span></span>
                </div>
                <div class="stats">
	                <a class="achievement" href="#" title="years of experience"><span class="number" data-hidden-number="5" data-after-count="5" data-taken-time="">1</span><span class="subtilte">year of experience</span></a>
	                <a class="achievement" href="#" title="PSDs created"><span class="number" data-hidden-number="100" data-after-count="100">100</span><span class="subtilte">companies consulted</span></a>
	                <a class="achievement" href="#" title="cans of Red Bull"><span class="number" data-hidden-number="3" data-after-count="3">3</span><span class="subtilte">awards received</span></a>
	                    <!--<div class="mask-wave"><div class="achievement" title="cans of Red Bull"></div><div class="details"><span class="number" data-hidden-number="300" data-after-count="300">300</span><span class="subtilte">cans of Red Bull</span></div><span class="wave"></span></div>-->
	                <a class="achievement" href="#" title="adjustments in the Customers projects"><span class="number" data-hidden-number="200" data-after-count="200">200</span><span class="subtilte">satisfied clients</span></a>
	                <a class="achievement" href="#" title="years of work for agencies"><span class="number" data-hidden-number="15" data-after-count="15">15</span><span class="subtilte">offices<br/>worldwide</span></a>
                </div>
            </div>
        </section>
        <section id="albania" class="sub scrollsections">
            <div class="content">
                <h2>Our Albanian clients are associations and small­medium Italian companies in the early

stages in their course to international expansion, they call on our office to recive

professional consultancy and assistance in the early stages of implementation and

management of their activities.<span class="line"></span></h2><br><br><br>
                <h2>The professional staff of Studio GUCCI and PARTNERS are all accountants,lawyers

members of their professional institutional membership , well as managers with proven

ecperience.Staff objective is to develop relations of close confidence with our clients ,and

to assist them in any aspect of their business activities in Albania.<span class="line"></span></h2>
            </div>
        </section>
        <section id="portfolio" class="sub scrollsections"><a href="#" title="go left" class="arrow left"><span>go left</span></a><a href="#" title="go right" class="arrow right"><span>go right</span></a>
            <article class="projects-wrapper">
                <div class="project" data-type="web"><span class="overlay"></span><span class="loader">loader</span><span class="project-thumb" style="background-image: url(images/projects/project-1-small.png)"></span>
                    <div class="full-size" data-project="project-1" data-name="Eksbut"></div>
                </div>
                <div class="project" data-type="web"><span class="overlay"></span><span class="loader">Loading...</span><span class="project-thumb" style="background-image: url(images/projects/project-2-small.png)"></span>
                    <div class="full-size" data-project="project-2" data-name="Online Print"></div>
                </div>
                <div class="project" data-type="web"><span class="overlay"></span><span class="loader">Loading...</span><span class="project-thumb" style="background-image: url(images/projects/project-3-small.png)"></span>
                    <div class="full-size" data-project="project-3" data-name="FreshEV"></div>
                </div>
                <div class="project" data-type="other"><span class="overlay"></span><span class="loader">loader</span><span class="project-thumb" style="background-image: url(images/projects/project-4-small.png)"></span>
                    <div class="full-size" data-project="project-4" data-name="Natural Series"></div>
                </div>
                <div class="project" data-type="web"><span class="overlay"></span><span class="loader">Loading...</span><span class="project-thumb" style="background-image: url(images/projects/project-5-small.png)"></span>
                    <div class="full-size" data-project="project-5" data-name="Kunc&Dziedzic"></div>
                </div>
                <div class="project" data-type="web"><span class="overlay"></span><span class="loader">Loading...</span><span class="project-thumb" style="background-image: url(images/projects/project-6-small.png)"></span>
                    <div class="full-size" data-project="project-6" data-name="golinski.org"></div>
                </div>
                <div class="project" data-type="web"><span class="overlay"></span><span class="loader">loader</span><span class="project-thumb" style="background-image: url(images/projects/project-11-small.png)"></span>
                    <div class="full-size" data-project="project-11" data-name="Skorupki Apartments"></div>
                </div>
                <div class="project" data-type="other"><span class="overlay"></span><span class="loader">Loading...</span><span class="project-thumb" style="background-image: url(images/projects/project-8-small.png)"></span>
                    <div class="full-size" data-project="project-8" data-name="Chocolate"></div>
                </div>
                <div class="project" data-type="interface"><span class="overlay"></span><span class="loader">Loading...</span><span class="project-thumb" style="background-image: url(images/projects/project-9-small.png)"></span>
                    <div class="full-size" data-project="project-9" data-name="Shoper"></div>
                </div>
                <div class="project" data-type="interface"><span class="overlay"></span><span class="loader">loader</span><span class="project-thumb" style="background-image: url(images/projects/project-10-small.png)"></span>
                    <div class="full-size" data-project="project-10" data-name="Car Service"></div>
                </div>
                <div class="project" data-type="interface"><span class="overlay"></span><span class="loader">Loading...</span><span class="project-thumb" style="background-image: url(images/projects/project-7-small.png)"></span>
                    <div class="full-size" data-project="project-7" data-name="Illumio"></div>
                </div>
                <div class="project" data-type="web"><span class="overlay"></span><span class="loader">Loading...</span><span class="project-thumb" style="background-image: url(images/projects/project-12-small.png)"></span>
                    <div class="full-size" data-project="project-12" data-name="Nadarzynskie Apartments"></div>
                </div>
                <div class="project" data-type="other"><span class="overlay"></span><span class="loader">Loading...</span><span class="project-thumb" style="background-image: url(images/projects/project-13-small.png)"></span>
                    <div class="full-size" data-project="project-13" data-name="Post Stamp"></div>
                </div>
                <div class="project" data-type="web"><span class="overlay"></span><span class="loader">Loading...</span><span class="project-thumb" style="background-image: url(images/projects/project-14-small.png)"></span>
                    <div class="full-size" data-project="project-14" data-name="Instalexport"></div>
                </div>
            </article>
        </section>
        <section id="case" class="sub scrollsections">
            <div class="content">
                <h2><span class="nhg-md"><strong>Case </strong></span>study<br/>From paper to organized numbers<span class="line"></span></h2>
                <div class="projects">
                    <div class="slider-holder">
                        <!--<div class="head">Shoper FV - Dashboard</div>-->
                        <div class="container">
                            <div class="mockup" style="background-image: url(images/cases/mockup-1.png)"></div>
                            <div class="project" style="background-image: url(images/cases/project-1.png)"></div>
                            <div class="slider"><span class="handle"></span>
                            </div>
                        </div>
                    </div>
                    <aside class="introduction">
                        <h3><span class="nhg-md">Consulting</span> services</h3>
                        <p>Our enterprise-wide model delivers an integrated solution through the use of consistently applied methodologies and tools delivered by industry-experienced practitioners. We assist clients in focusing on the business area that captures not only short-term benefits but also longer-term embedded value.</p>
                    </aside>
                    <br class="cb">
                </div>
            </div>
        </section>
        <section id="clients" class="sub scrollsections">
            <div class="content">
                <h2><span class="nhg-md"><strong>Clients</strong></span> we have worked for<span class="line"></span></h2>
                <div class="clients">
                    <a href="#" class="client orange" title="Orange"><img src="images/clients/client-1.png" width="138" height="81" alt="Orange"><span class="sunshine"></span>
                    </a>
                    <a href="#" class="client winiary" title="Winiary"><img src="images/clients/client-2.png" width="160" height="81" alt="Winiary"><span class="sunshine"></span>
                    </a>
                    <a href="#" class="client starbucks" title="Starbucks"><img src="images/clients/client-3.png" width="174" height="81" alt="Starbucks"><span class="sunshine"></span>
                    </a>
                    <a href="#" class="client m" title="3M"><img src="images/clients/client-4.png" width="121" height="81" alt="3M"><span class="sunshine"></span>
                    </a>
                    <a href="#" class="client rtv" title="rtv"><img src="images/clients/client-5.png" width="198" height="81" alt="RTV Euro AGD"><span class="sunshine"></span>
                    </a>
                    <a href="#" class="client tchibo" title="Tchibo"><img src="images/clients/client-6.png" width="189" height="81" alt="Tchibo"><span class="sunshine"></span>
                    </a>
                    <a href="#" class="client xtb" title="XTB"><img src="images/clients/client-7.png" width="138" height="96" alt="XTB"><span class="sunshine"></span>
                    </a>
                    <a href="#" class="client wbk" title="WBK"><img src="images/clients/client-8.png" width="160" height="96" alt="WBK"><span class="sunshine"></span>
                    </a>
                    <a href="#" class="client agricole" title="Credit Agricole"><img src="images/clients/client-9.png" width="174" height="96" alt="Credit Agricole"><span class="sunshine"></span>
                    </a>
                    <a href="#" class="client ing" title="ING"><img src="images/clients/client-10.png" width="121" height="96" alt="ING"><span class="sunshine"></span>
                    </a>
                    <a href="#" class="client bgz" title="Bank BGŻ"><img src="images/clients/client-11.png" width="198" height="96" alt="Bank BGŻ"><span class="sunshine"></span>
                    </a>
                    <a href="#" class="client ferrero" title="Ferrero"><img src="images/clients/client-12.png" width="189" height="96" alt="FERRERO"><span class="sunshine"></span>
                    </a>
                    <a href="#" class="client wyborowa" title="Wyborowa"><img src="images/clients/client-13.png" width="138" height="95" alt="Wyborowa"><span class="sunshine"></span>
                    </a>
                    <a href="#" class="client ballantines" title="Ballantines"><img src="images/clients/client-14.png" width="160" height="95" alt="Ballantines"><span class="sunshine"></span>
                    </a>
                    <a href="#" class="client tesco" title="TESCO"><img src="images/clients/client-15.png" width="174" height="95" alt="TESCO"><span class="sunshine"></span>
                    </a>
                    <a href="#" class="client tictac" title="TicTac"><img src="images/clients/client-16.png" width="121" height="95" alt="TicTac"><span class="sunshine"></span>
                    </a>
                    <a href="#" class="client jacobs" title="Jacob's Creek"><img src="images/clients/client-17.png" width="198" height="95" alt="Jacob's Creek"><span class="sunshine"></span>
                    </a>
                    <a href="#" class="client skok" title="SKOK"><img src="images/clients/client-18.png" width="189" height="95" alt="SKOK"><span class="sunshine"></span>
                    </a>
                    <a href="#" class="client ng" title="ational Geographic Channel"><img src="images/clients/client-19.png" width="138" height="91" alt="National Geographic Channel"><span class="sunshine"></span>
                    </a>
                    <a href="#" class="client kpmg" title="KPMG"><img src="images/clients/client-20.png" width="160" height="91" alt="KPMG"><span class="sunshine"></span>
                    </a>
                    <a href="#" class="client palmos" title="Palmos"><img src="images/clients/client-21.png" width="174" height="91" alt="Palmos"><span class="sunshine"></span>
                    </a>
                    <a href="#" class="client hp" title="HP"><img src="images/clients/client-22.png" width="121" height="91" alt="HP"><span class="sunshine"></span>
                    </a>
                    <a href="#" class="client skanska" title="SKANSKA"><img src="images/clients/client-23.png" width="198" height="91" alt="SKANSKA"><span class="sunshine"></span>
                    </a>
                    <a href="#" class="client jameson" title="Jameson"><img src="images/clients/client-24.png" width="189" height="91" alt="Jameson"><span class="sunshine"></span>
                    </a>
                    <br class="cb">
                </div>
            </div>
        </section>
        <section id="contact" class="sub scrollsections">
            <div class="content">
                <h2><span class="nhg-md"><strong>Send us a message!</strong></span><br/>We will definitely get back to you!<span class="line"></span></h2>
                <div class="contact-by"><a href="mailto:hello@hello.com?subject=Say%20hello!" title="Contact me via E-mail!" class="cube email">Contact me via E-mail!</a><a href="callto://adasrudzki" title="Contact me by Skype!" class="cube skype">Contact us via Skype!</a><a href="" target="_blank" title="Contact me by behance!" class="cube be">Contact us via behance!</a><a href="" target="_blank" title="Contact me by Dribbble!" class="cube ball">Contact us via Dribbble!</a>
                    <br class="cb">
                    <div class="fb-like" data-href="" data-send="false" data-layout="button_count" data-width="450" data-show-faces="false"></div>
                </div>
            </div>
        </section>
    </section>
</body>

</html>

<script src="js/plugins.js"></script>
<script src="js/jquery.scrollSections.js"></script>
<script>
    $(function() {
        $('section.scrollsections').scrollSections();
    });
</script>

<script type="text/javascript">
    <!--document.writeln('<'+'scr'+'ipt type="text/javascript" src="http://home.hit.stat24.com/_'+(new Date()).getTime()+'/script.js?id=p9LldHb.LXVFCOXGvVrOTeVETDjRTN.sgVhZfGveAEH.j7"></'+'scr'+'ipt>');//-->
</script>