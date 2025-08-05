  $(document).ready(function() {
            // نمایش اطلاعات بیشتر با کلیک روی دکمه
            $('#moreInfoBtn').click(function() {
                $('#moreInfo').slideToggle();
                if ($(this).text() === 'اطلاعات بیشتر') {
                    $(this).text('بستن');
                } else {
                    $(this).text('اطلاعات بیشتر');
                }
            });
            
            // انیمیشن برای نمونه سنگ‌ها
            $('.stone-sample').hover(
                function() {
                    $(this).addClass('shadow-lg');
                },
                function() {
                    $(this).removeClass('shadow-lg');
                }
            );
            
            // اسکرول نرم برای لینک‌ها
            $('a[href^="#"]').on('click', function(event) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: $($(this).attr('href')).offset().top
                }, 800);
            });
        });