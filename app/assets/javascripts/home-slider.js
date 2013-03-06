
function Slider (slider)
{

    var that=this;

    that.activeIndex=0;
    that.slides_count=0;
    that.options={
        stepDelay:10,
        step:5,
        titleWidth:29,
        slideWidth:1035,
        position:2,
        allowAuto:true,
        timeout:10000

    };
    that.images=[];
    that.slides=[];
    that.headers=[];
    that.slider=$(slider);
    this.init= function()
    {

        that.slides=that.slider.find('div.slide');
        that.slides_count=that.slides.length;
        that.activeIndex=that.options.position-1;

        that.initPosition();


        that.slides.eq(that.activeIndex).addClass('active');
        that.slides.eq(that.activeIndex+1).addClass('next');
        that.slides.eq(that.activeIndex-1).addClass('previous');

    };

    this.initPosition=function()
    {
        that.slides.each(function(index,slide)
        {
            slide=$(slide);
            if(index==0)
            {
                slide.find('span.title').css({marginLeft:'20px'});
            }





            if(that.activeIndex>=index) // prev, active
            {
                slide.css({left:(index)*that.options.titleWidth+'px'});
            }
            else if(that.activeIndex<index) // next
            {
                slide.css({left:(index-1)*that.options.titleWidth-11+that.options.slideWidth+'px'});
            }
        });
    }

    this.init();
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
                }
            });
        });
    };

    this.bindClickHandler();

    /*this.hideSlide=function()
     {
     var active_dt=that.dl.find('dt.active');
     active_dt.removeClass('active');
     var active_dd=active_dt.next().next();
     active_dd.removeClass('active');
     active_dd.css({left:''});

     var divActiveCorner= active_dt.next();
     divActiveCorner.css({display:'none'});
     } */

    /*

     */
    this.showSlide= function(pos)
    {
        var required_index=pos-1;
        if(that.activeIndex!=required_index)
        {

            /* remove active flag */

            var active_slide=that.slides.eq(that.activeIndex);
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

                    //var new_dd_left =(i-1)*41;

                    elements[elements.length]=that.slides.eq(i);
                }



                var timer=new Timer();
                timer.delay=1000/5;
                timer.iterations_limit=5;

                timer.arg=that;
                timer.handler=function(){
                    that.moveLeftBy(elements,(that.options.slideWidth-40)/5);
                };
                timer.start();
            }
            else if(required_index>that.activeIndex) // next  required
            {
                var elements=[];
                for(var i=that.activeIndex+1;i<=required_index;i++)
                {

                    elements[elements.length]=that.slides.eq(i);


                }


                var timer=new Timer();
                timer.delay=500/5;
                timer.iterations_limit=5;

                timer.arg=that;
                timer.handler=function(){
                    //alert(that.options.slideWidth);
                    that.moveLeftBy(elements,(that.options.slideWidth-40)*-1/5);
                };

                //timer.handler.call();
                timer.start();
            }






        }
        that.activeIndex=required_index;
    };
    that.moveLeftBy=function(elements,px)
    {

        $(elements).each(function(index,element){
            element=$(element);
            var currentLeft=that.ConvertCssPxToInt(element.css('left'));
            element.css({left:currentLeft+px+'px'});
        });
    };


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

    };



    return this;
};