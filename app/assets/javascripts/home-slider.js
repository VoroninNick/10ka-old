
 HomeSlider=function (slider)
{

    var that=this;

    that.activeIndex=0;
    that.slides_count=0;
    that.options={
        titleWidth:29,
        slideWidth:1120-3*29,
        position:1,
        allowAuto:true,
        timeout:5000,
        speed:1000

    };
    that.images=[];
    that.slides=[];
    that.headers=[];
    that.slider=$(slider);
    that.timer_id=false;

    // Convert a css px value to int.
    that.ConvertCssPxToInt=function(cssPxValueText) {

        // Set valid characters for numeric number.
        var validChars = "0123456789.";

        // If conversion fails return 0.
        var convertedValue = 0;

        // Loop all characters of
        for (i = 0; i < cssPxValueText.length; i++) {

            // Stop search for valid numeric characters,  when a none numeric number is found.
            if (validChars.indexOf(cssPxValueText.charAt(i)) == -1) {

                // Start conversion if at least one character is valid.
                if (i > 0) {
                    // Convert validnumbers to int and return result.
                    convertedValue = parseInt(cssPxValueText.substring(0, i));
                    return convertedValue;
                }
            }
        }

        return convertedValue;
    };

    this.next=function()
    {
        if(that.activeIndex+1==that.slides.length)//last
        {
            that.showSlide(1);
        }
        else                                        //next
        {
            that.showSlide(that.activeIndex+2);
        }
    };
    this.init= function()
    {
        that.slides=that.slider.find('div.slide');
        that.slides_count=that.slides.length;
        that.activeIndex=that.options.position-1;



        that.slides.each(function(index,slide)
        {
            slide=$(slide);
            if(index==0)
            {
               // slide.find('span.title').css({marginLeft:'20px'});
            }

            if(that.activeIndex==index)
            {
                slide.addClass('active');
            }
            else if(that.activeIndex==index-1)
            {
                slide.addClass('next');
            }
            else if(that.activeIndex==index+1)
            {
                slide.addClass('previous');
            }




        });
        that.initPosition();
       if(that.options.allowAuto===true)
       {
           that.timer_id=setInterval(that.next,that.options.timeout);
       }
    };
    this.initPosition=function()
    {
        var sliderWidth=that.slider.css('width');
        sliderWidth=that.ConvertCssPxToInt(sliderWidth);
        that.options.slideWidth=sliderWidth-(that.slides.length-1)*that.options.titleWidth;
        that.slides.each(function(index,slide)
        {
            slide=$(slide);

            if(that.activeIndex>=index) // prev, active
            {
                slide.css({left:(index)*that.options.titleWidth+'px'});
            }
            else if(that.activeIndex<index) // next
            {
                slide.css({left:(index-1)*that.options.titleWidth+that.options.slideWidth+'px'});
            }
        });
    };
    this.init();
    that.slider.resize(function()
    {
        that.initPosition();
    });
    this.bindClickHandler=function()
    {
        that.slides.each(function(index,slide)
        {
            slide=$(slide);

            slide.find('span.title').click(function()
            {
                if(!slide.hasClass('active'))
                {
                    var clicked_title=$(this);
                    var new_index=clicked_title.parent().index();
                    that.showSlide(new_index+1);
                    if(that.timer_id!==false)
                        clearInterval(that.timer_id);
                    that.timer_id=setInterval(that.next,that.options.timeout);
                }
            });
        });
    };

    this.bindClickHandler();

    this.showSlide= function(pos)
    {
        var required_index=pos-1;
        if(that.activeIndex!=required_index)
        {

            /* remove active flag */

            var active_slide=that.slider.find('div.slide.active');
            active_slide.removeClass('active');
            active_slide.next().removeClass('next');
            active_slide.prev().removeClass('previous');

            var required_slide=that.slides.eq(required_index);
            required_slide=$(required_slide);
            required_slide.addClass('active');
            required_slide.next().addClass('next');
            required_slide.prev().addClass('previous');

            if(required_index<=that.activeIndex) // prev  required
            {
                var elements=[];
                for(var i=required_index+1;i<=that.activeIndex;i++)
                {
                    that.slides.eq(i).animate({left:'+='+(that.options.slideWidth-that.options.titleWidth)},that.options.speed);
                }
            }
            else if(required_index>that.activeIndex) // next  required
            {
                var elements=[];
                for(var i=that.activeIndex+1;i<=required_index;i++)
                {
                    that.slides.eq(i).animate({left:'-='+(that.options.slideWidth-that.options.titleWidth)},that.options.speed);
                }
            }






        }
        that.activeIndex=required_index;
    };
    that.moveLeftBy=function(elements,px)
    {
        $(elements).each(function(index,element){
            var currentLeft=that.ConvertCssPxToInt(element.css('left'));
            element.css({left:currentLeft+px+'px'});
        });
    };






    return this;
};