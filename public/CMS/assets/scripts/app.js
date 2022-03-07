$(document).ready(function() {

    let mockPrototypeEvent = {
        __init: () => {
            mockPrototypeEvent.__sidebar();
            mockPrototypeEvent.__randomNumber();
            mockPrototypeEvent.__toggleNotification();
            mockPrototypeEvent.__crmMainMenu();
            mockPrototypeEvent.__funnelOptions();
        },
        __funnelOptions: () => {
            $('.funnel-content-options').children().each(function(i, v) {
                i == 0 ? $(this).show() : $(this).hide();
            })
            $('#steps_funnel').click(function() {
                $('.funnel-content-options').children().each(function(i, v) {
                    i == 0 ? $(this).fadeIn() : $(this).hide();

                })
            })
            $('#stats_funnel').click(function() {
                $('.funnel-content-options').children().each(function(i, v) {
                    i == 1 ? $(this).fadeIn() : $(this).hide();
                })
            })
            $('#sales_funnel').click(function() {
                $('.funnel-content-options').children().each(function(i, v) {
                    i == 2 ? $(this).fadeIn() : $(this).hide();
                    console.log(i)
                })
            })
            $('#settings_funnel').click(function() {
                $('.funnel-content-options').children().each(function(i, v) {
                    i == 3 ? $(this).fadeIn() : $(this).hide();
                    console.log(i)
                })
            })
            $('#share_modal').click(function() {
                $('.modal-funnel').slideDown(1000);
                $('.modal-funnel').children().each(function(i, v) {
                    i == 0 ? $(this).show() : $(this).hide();
                })
            })
            $('#about_modal').click(function() {
                $('.modal-funnel').slideDown(1000);
                $('.modal-funnel').children().each(function(i, v) {
                    i == 1 ? $(this).show() : $(this).hide();
                })
            })
            $('.modal-funnel').children().each(function() {
                $(this).click(function() {
                    $(this).parent().fadeOut(500);
                })
            })
        },
        __crmMainMenu: () => {
            $('#crm-main-menu').html(`
                <a href="/CMS/dashboard.html">
                    <img src="/CMS/assets/images/dashboard/${page == "dashboard" ? "menu-active" : "menu"}.png">
                </a>
                <a href="/CMS/leads/index.html">
                    <img src="/CMS/assets/images/leads/${page == "leads" ? "menu-active" : "menu"}.png">
                </a>
                <a href="/CMS/source/index.html">
                    <img src="/CMS/assets/images/sources/${page == "sources" ? "menu-active" : "menu"}.png">
                </a>
                <a href="/CMS/funnels/index.html">
                    <img src="/CMS/assets/images/funnels/${page == "funnels" ? "menu-active" : "menu"}.png">
                </a>
                <a href="/CMS/pipeline/pipeline-dashboard.html">
                    <img src="/CMS/assets/images/pipeline/${page == "pipeline" ? "menu-active" : "menu"}.png">
                </a>
                <a href="/CMS/scheduling/index.html">
                    <img src="/CMS/assets/images/scheduling/${page == "scheduling" ? "menu-active" : "menu"}.png">
                </a>
                <a href="/CMS/forms/index.html">
                    <img src="/CMS/assets/images/crm-main-menu/6.png">
                </a>
                <a href="/CMS/tag/index.html">
                    <img src="/CMS/assets/images/tag/${page == "tag" ? "menu-active" : "menu"}.png">
                </a>
            `);
        },
        __sidebar: () => {
            if (page == "dashboard") {
                $('sidebar').html(`
                    <div class="sidebar-container">
                    <div class="close-sidebar">
                        <div class="pt-3 p-2 mb-3">
                            <a href="#" id="close-sidebar">
                                <img src="/CMS/assets/images/sidebar/close-menu.png" alt="">
                            </a>
                        </div>
                        <div class="text-center text-white">
                            <img src="/CMS/assets/images/sidebar/avatar.png" alt="">
                            <h3 class="mt-3"><b>JJ Morris</b></h3>
                            <p>NEC FORMULA CAMPAIGN</p>
                        </div>
                        <ul>
                            <li>
                                <a href="/CMS/crm-main-menu.html"><span class="iconify" data-icon="dashicons:admin-home"></span> main menu</a>
                            </li>
                            <li>
                                <a href="/CMS/leads/index.html"><span class="iconify" data-icon="gridicons:multiple-users"></span> LEAD</a>
                            </li>
                            <li>
                                <a href="/CMS/source/index.html"><span class="iconify" data-icon="fluent:calendar-search-16-filled"></span> SOURCE</a>
                            </li>
                            <li>
                                <a href="/CMS/funnels/index.html"><span class="iconify" data-icon="ph:funnel-light"></span> FUNNEL DEVELOPMENT</a>
                            </li>
                            <li>
                                <a href="/CMS/pipeline/pipeline-dashboard.html"><span class="iconify" data-icon="carbon:analytics-reference"></span>pipeline</a>
                            </li>
                            <li>
                                <a href="#"><span class="iconify" data-icon="wpf:survey"></span>SURVEYS</a>
                            </li>
                            <li>
                                <a href="#"><span class="iconify" data-icon="simple-icons:formstack"></span>FORMS</a>
                            </li>
                            <li>
                                <a href="#"><span class="iconify" data-icon="carbon:tag-edit"></span>TAG MANAGER</a>
                            </li>
                            <li class="logout-menu">
                                <a href="/CMS/login.html"><span class="iconify" data-icon="oi:account-logout"></span>logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
                `);
            }
            if (page == "leads") {
                $('sidebar').html(`
                    <div class="sidebar-container">
                    <div class="close-sidebar">
                        <div class="pt-3 p-2 mb-3">
                            <a href="#" id="close-sidebar">
                                <img src="/CMS/assets/images/sidebar/close-menu.png" alt="">
                            </a>
                        </div>
                        <div class="text-center text-white">
                            <img src="/CMS/assets/images/sidebar/avatar.png" alt="">
                            <h3 class="mt-3"><b>JJ Morris</b></h3>
                            <p>NEC FORMULA CAMPAIGN</p>
                        </div>
                        <ul>
                            <li>
                                <a href="/CMS/leads/crm-main-menu.html"><span class="iconify" data-icon="dashicons:admin-home"></span> main menu</a>
                            </li>
                            <li>
                                <a href="/CMS/leads/index.html"><span class="iconify" data-icon="gridicons:multiple-users"></span> LEAD Contact</a>
                            </li>
                            <li>
                                <a href="/CMS/source/index.html""><span class="iconify" data-icon="fluent:calendar-search-16-filled"></span> SOURCE</a>
                            </li>
                            <li>
                                <a href="#"><span class="iconify" data-icon="ph:funnel-light"></span> message history</a>
                            </li>
                            <li>
                                <a href="/CMS/pipeline-dashboard.html"><span class="iconify" data-icon="carbon:analytics-reference"></span>activity</a>
                            </li>
                            <li>
                                <a href="#"><span class="iconify" data-icon="wpf:survey"></span>tasks</a>
                            </li>
                            <li>
                                <a href="#"><span class="iconify" data-icon="simple-icons:formstack"></span>notes</a>
                            </li>
                            <li>
                                <a href="#"><span class="iconify" data-icon="carbon:tag-edit"></span>appointments</a>
                            </li>
                            <li class="logout-menu">
                                <a href="/CMS/login.html"><span class="iconify" data-icon="oi:account-logout"></span>logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
                `);
            }
            if (page == "source") {
                $('sidebar').html(`
                    <div class="sidebar-container">
                    <div class="close-sidebar">
                        <div class="pt-3 p-2 mb-3">
                            <a href="#" id="close-sidebar">
                                <img src="/CMS/assets/images/sidebar/close-menu.png" alt="">
                            </a>
                        </div>
                        <div class="text-center text-white">
                            <img src="/CMS/assets/images/sidebar/avatar.png" alt="">
                            <h3 class="mt-3"><b>JJ Morris</b></h3>
                            <p>NEC FORMULA CAMPAIGN</p>
                        </div>
                        <ul>
                            <li>
                                <a href="/CMS/source/crm-main-menu.html"><span class="iconify" data-icon="dashicons:admin-home"></span> main menu</a>
                            </li>
                            <li>
                                <a href="/CMS/source/index.html""><span class="iconify" data-icon="fluent:calendar-search-16-filled"></span> source dashboard</a>
                            </li>
                            <li>
                                <a href="/CMS/source/source-2.html"><span class="iconify" data-icon="akar-icons:google-contained-fill"></span> google ad</a>
                            </li>
                            <li>
                                <a href="/CMS/source/source-3.html"><span class="iconify" data-icon="akar-icons:facebook-fill"></span>facebook ad</a>
                            </li>
                            <li class="mb-5 pb-5">
                                <a href="/CMS/source/source-5.html"><span class="iconify" data-icon="akar-icons:youtube-fill"></span>youtube ad</a>
                            </li>
                            <li class="logout-menu">
                                <a href="/CMS/login.html"><span class="iconify" data-icon="oi:account-logout"></span>logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
                `);
            }
            if (page == "pipeline") {
                $('sidebar').html(`
                    <div class="sidebar-container">
                    <div class="close-sidebar">
                        <div class="pt-3 p-2 mb-3">
                            <a href="#" id="close-sidebar">
                                <img src="/CMS/assets/images/sidebar/close-menu.png" alt="">
                            </a>
                        </div>
                        <div class="text-center text-white">
                            <img src="/CMS/assets/images/sidebar/avatar.png" alt="">
                            <h3 class="mt-3"><b>JJ Morris</b></h3>
                            <p>NEC FORMULA CAMPAIGN</p>
                        </div>
                        <ul>
                            <li>
                                <a href="/CMS/pipeline/crm-main-menu.html"><span class="iconify" data-icon="dashicons:admin-home"></span> main menu</a>
                            </li>
                            <li>
                                <a href="/CMS/pipeline/pipeline-dashboard.html""><span class="iconify" data-icon="fluent:calendar-search-16-filled"></span> pipeline dashboard</a>
                            </li>
                            <li>
                                <a href="/CMS/pipeline/opportunities.html"><span class="iconify" data-icon="ant-design:database-filled"></span> opportunities</a>
                            </li>
                            <li>
                                <a href="/CMS/pipeline/workflows.html"><span class="iconify" data-icon="octicon:workflow-24"></span>workflows</a>
                            </li>
                            <li>
                                <a href="/CMS/pipeline/trigger.html"><span class="iconify" data-icon="mdi:connection"></span>triggers</a>
                            </li>
                            <li class="mb-5 pb-5">
                                <a href="#"><span class="iconify" data-icon="healthicons:health-worker-form-outline"></span>forms/survey</a>
                            </li>
                            <li class="logout-menu">
                                <a href="/CMS/login.html"><span class="iconify" data-icon="oi:account-logout"></span>logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
                `);
            }
            if (page == "funnels") {
                $('sidebar').html(`
                    <div class="sidebar-container">
                    <div class="close-sidebar">
                        <div class="pt-3 p-2 mb-3">
                            <a href="#" id="close-sidebar">
                                <img src="/CMS/assets/images/sidebar/close-menu.png" alt="">
                            </a>
                        </div>
                        <div class="text-center text-white">
                            <img src="/CMS/assets/images/sidebar/avatar.png" alt="">
                            <h3 class="mt-3"><b>JJ Morris</b></h3>
                            <p>NEC FORMULA CAMPAIGN</p>
                        </div>
                        <ul>
                            <li>
                                <a href="/CMS/funnels/crm-main-menu.html"><span class="iconify" data-icon="dashicons:admin-home"></span> main menu</a>
                            </li>
                            <li>
                                <a href="/CMS/pipeline/pipeline-dashboard.html""><span class="iconify" data-icon="fluent:calendar-search-16-filled"></span> pipeline dashboard</a>
                            </li>
                            <li>
                                <a href="/CMS/pipeline/opportunities.html"><span class="iconify" data-icon="ant-design:database-filled"></span> opportunities</a>
                            </li>
                            <li>
                                <a href="/CMS/pipeline/workflows.html"><span class="iconify" data-icon="octicon:workflow-24"></span>workflows</a>
                            </li>
                            <li>
                                <a href="/CMS/pipeline/trigger.html"><span class="iconify" data-icon="mdi:connection"></span>triggers</a>
                            </li>
                            <li class="mb-5 pb-5">
                                <a href="#"><span class="iconify" data-icon="healthicons:health-worker-form-outline"></span>forms/survey</a>
                            </li>
                            <li class="logout-menu">
                                <a href="/CMS/login.html"><span class="iconify" data-icon="oi:account-logout"></span>logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
                `);
            }
            if (page == "forms") {
                $('sidebar').html(`
                    <div class="sidebar-container">
                    <div class="close-sidebar">
                        <div class="pt-3 p-2 mb-3">
                            <a href="#" id="close-sidebar">
                                <img src="/CMS/assets/images/sidebar/close-menu.png" alt="">
                            </a>
                        </div>
                        <div class="text-center text-white">
                            <img src="/CMS/assets/images/sidebar/avatar.png" alt="">
                            <h3 class="mt-3"><b>JJ Morris</b></h3>
                            <p>NEC FORMULA CAMPAIGN</p>
                        </div>
                        <ul>
                            <li>
                                <a href="/CMS/forms/crm-main-menu.html"><span class="iconify" data-icon="dashicons:admin-home"></span> main menu</a>
                            </li>
                            <li>
                                <a href="/CMS/surveys/index.html"><span class="iconify" data-icon="fluent:calendar-search-16-filled"></span> Surveys</a>
                            </li>
                            <li>
                                <a href="/CMS/pipeline/opportunities.html"><span class="iconify" data-icon="ant-design:database-filled"></span> opportunities</a>
                            </li>
                            <li>
                                <a href="/CMS/pipeline/workflows.html"><span class="iconify" data-icon="octicon:workflow-24"></span>workflows</a>
                            </li>
                            <li>
                                <a href="/CMS/pipeline/trigger.html"><span class="iconify" data-icon="mdi:connection"></span>triggers</a>
                            </li>
                            <li class="mb-5 pb-5">
                                <a href="#"><span class="iconify" data-icon="healthicons:health-worker-form-outline"></span>forms/survey</a>
                            </li>
                            <li class="logout-menu">
                                <a href="/CMS/login.html"><span class="iconify" data-icon="oi:account-logout"></span>logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
                `);
            }
            if (page == "surveys") {
                $('sidebar').html(`
                    <div class="sidebar-container">
                    <div class="close-sidebar">
                        <div class="pt-3 p-2 mb-3">
                            <a href="#" id="close-sidebar">
                                <img src="/CMS/assets/images/sidebar/close-menu.png" alt="">
                            </a>
                        </div>
                        <div class="text-center text-white">
                            <img src="/CMS/assets/images/sidebar/avatar.png" alt="">
                            <h3 class="mt-3"><b>JJ Morris</b></h3>
                            <p>NEC FORMULA CAMPAIGN</p>
                        </div>
                        <ul>
                            <li>
                                <a href="/CMS/forms/crm-main-menu.html"><span class="iconify" data-icon="dashicons:admin-home"></span> main menu</a>
                            </li>
                            <li>
                                <a href="/CMS/forms/index.html"><span class="iconify" data-icon="fluent:calendar-search-16-filled"></span> Forms</a>
                            </li>
                            <li>
                                <a href="/CMS/pipeline/opportunities.html"><span class="iconify" data-icon="ant-design:database-filled"></span> opportunities</a>
                            </li>
                            <li>
                                <a href="/CMS/pipeline/workflows.html"><span class="iconify" data-icon="octicon:workflow-24"></span>workflows</a>
                            </li>
                            <li>
                                <a href="/CMS/pipeline/trigger.html"><span class="iconify" data-icon="mdi:connection"></span>triggers</a>
                            </li>
                            <li class="mb-5 pb-5">
                                <a href="#"><span class="iconify" data-icon="healthicons:health-worker-form-outline"></span>forms/survey</a>
                            </li>
                            <li class="logout-menu">
                                <a href="/CMS/login.html"><span class="iconify" data-icon="oi:account-logout"></span>logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
                `);
            }
            if (page == "scheduling") {
                $('sidebar').html(`
                    <div class="sidebar-container">
                    <div class="close-sidebar">
                        <div class="pt-3 p-2 mb-3">
                            <a href="#" id="close-sidebar">
                                <img src="/CMS/assets/images/sidebar/close-menu.png" alt="">
                            </a>
                        </div>
                        <div class="text-center text-white">
                            <img src="/CMS/assets/images/sidebar/avatar.png" alt="">
                            <h3 class="mt-3"><b>JJ Morris</b></h3>
                            <p>NEC FORMULA CAMPAIGN</p>
                        </div>
                        <ul>
                            <li>
                                <a href="/CMS/scheduling/crm-main-menu.html"><span class="iconify" data-icon="dashicons:admin-home"></span> main menu</a>
                            </li>
                            <li>
                                <a href="/CMS/forms/index.html"><span class="iconify" data-icon="fluent:calendar-search-16-filled"></span> Forms</a>
                            </li>
                            <li>
                                <a href="/CMS/pipeline/opportunities.html"><span class="iconify" data-icon="ant-design:database-filled"></span> opportunities</a>
                            </li>
                            <li>
                                <a href="/CMS/pipeline/workflows.html"><span class="iconify" data-icon="octicon:workflow-24"></span>workflows</a>
                            </li>
                            <li>
                                <a href="/CMS/pipeline/trigger.html"><span class="iconify" data-icon="mdi:connection"></span>triggers</a>
                            </li>
                            <li class="mb-5 pb-5">
                                <a href="#"><span class="iconify" data-icon="healthicons:health-worker-form-outline"></span>forms/survey</a>
                            </li>
                            <li class="logout-menu">
                                <a href="/CMS/login.html"><span class="iconify" data-icon="oi:account-logout"></span>logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
                `);
            }
            if (page == "tag") {
                $('sidebar').html(`
                    <div class="sidebar-container">
                    <div class="close-sidebar">
                        <div class="pt-3 p-2 mb-3">
                            <a href="#" id="close-sidebar">
                                <img src="/CMS/assets/images/sidebar/close-menu.png" alt="">
                            </a>
                        </div>
                        <div class="text-center text-white">
                            <img src="/CMS/assets/images/sidebar/avatar.png" alt="">
                            <h3 class="mt-3"><b>JJ Morris</b></h3>
                            <p>NEC FORMULA CAMPAIGN</p>
                        </div>
                        <ul>
                            <li>
                                <a href="/CMS/tag/crm-main-menu.html"><span class="iconify" data-icon="dashicons:admin-home"></span> main menu</a>
                            </li>
                            <li>
                                <a href="/CMS/forms/index.html"><span class="iconify" data-icon="fluent:calendar-search-16-filled"></span> Forms</a>
                            </li>
                            <li>
                                <a href="/CMS/pipeline/opportunities.html"><span class="iconify" data-icon="ant-design:database-filled"></span> opportunities</a>
                            </li>
                            <li>
                                <a href="/CMS/pipeline/workflows.html"><span class="iconify" data-icon="octicon:workflow-24"></span>workflows</a>
                            </li>
                            <li>
                                <a href="/CMS/pipeline/trigger.html"><span class="iconify" data-icon="mdi:connection"></span>triggers</a>
                            </li>
                            <li class="mb-5 pb-5">
                                <a href="#"><span class="iconify" data-icon="healthicons:health-worker-form-outline"></span>forms/survey</a>
                            </li>
                            <li class="logout-menu">
                                <a href="/CMS/login.html"><span class="iconify" data-icon="oi:account-logout"></span>logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
                `);
            }
            $('#open-sidebar').click(function() {
                $('sidebar').fadeIn();
            })
            $('#close-sidebar').click(function() {
                $('sidebar').fadeOut();
            })
        },
        __randomNumber: () => {
            $('.random-number').each(function() {
                $(this).text(Math.floor((Math.random() * 100) + 1));
                console.log($(this).text())
            })
        },
        __toggleNotification: () => {
            $('#close-notification').click(function() {
                $('#notification').hide();
            })
            $('#show-notification').click(function() {
                $('#notification').fadeIn();
            })
        }
    }

    mockPrototypeEvent.__init();
})