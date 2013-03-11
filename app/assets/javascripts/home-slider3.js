
function Slider3 (dl)
{

    var that=this;

    that.activeIndex=0;
    that.slides_count=0;
    that.options={
        stepDelay:10,
        step:5,
        plusTitleWidth:11,
        titleWidth:41,
        slideWidth:1332-41*3,
        position:1,
        allowAuto:true,
        timeout:10000,
        size:function(){}

    };
    that.images=[];
    that.slides=[];
    that.headers=[];
    that.dl=$(dl);
    this.init= function()
    {

        that.dl.css({overflow:'hidden'});
        that.headers=that.dl.find('dt');
        that.headers.each(function(index,dt)
        {
            dt=$(dt);
            dt.addClass('spine');
            dt.addClass('spine_'+(index+1));
            if(that.options.position==index+1)
            {
                dt.addClass('active');
            }
            else if(that.options.position==index)
            {
                dt.addClass('next');
            }
            else if(that.options.position==index+2)
            {
                dt.addClass('previous');
            }
            dt.css({
                position:'absolute',
                zIndex:3,
                display:'block',
                width:'360px',
                height:'41px',
                padding:'0px 10px',
                transform:'rotate(270deg)',
                msTransformOrigin:'21px 0 0',
                textAlign:'right',
                top:'170px',//359  original
                marginLeft:'-21px'    //-21px
            });
            var div=$('<div>'+(index+1)+'</div>');
            div.addClass('index');
            div.css({
                position:'absolute',
                zIndex:2,
                display:'block',
                width:'41px',
                height:'41px',
                textAlign:'center',
                bottom:'-21px',
                left:'20px',
                transform:'rotate(90deg)',
                msTransformOrigin:'21px 0 0'
            });
            dt.append(div);


            var divActiveCorner = $('<div class="activeCorner"></div>');
            divActiveCorner.addClass('spine_'+(index+1));
            divActiveCorner.css({
                position:'absolute',
                top:'25px',
                overflow:'hidden',
                zIndex:20000
            });
            if(that.options.position==index+1)
            {
                divActiveCorner.css({display:'block'});
            }
            else
            {
                divActiveCorner.css({display:'none'});
            }

            if(that.options.position>=index+1) // prev
            {
                dt.css({left:(index)*that.options.titleWidth+'px'});
                divActiveCorner.css({left:(index+1)*that.options.titleWidth+'px'});
            }
            else if(that.options.position<index+1) // next
            {
                dt.css({left:(index*that.options.titleWidth+that.options.slideWidth)+'px'});
                divActiveCorner.css({left:((index+1)*that.options.titleWidth+that.options.slideWidth)+'px'});
            }
            dt.after(divActiveCorner);
            //divActiveCorner.next('dd');
            var dd=divActiveCorner.next('dd');
            dd.addClass('slide');
            dd.addClass('slide_'+(index+1));
            if(that.options.position==index+1)
            {
                dd.addClass('active');
            }
            dd.css({
                display:'block',
                msTransformOrigin:'50% 50% 0',
                zIndex:1,
                position:'absolute',
                height:'380px',
                width:that.options.slideWidth+'px',
                margin:'0',
                paddingLeft:'41px',
                overflow:'hidden'
            });

            if(that.options.position>=index+1) // prev
            {
                dd.css({left:(index)*that.options.titleWidth+'px'});
            }
            else if(that.options.position<index+1) // next
            {
                dd.css({left:((index-1)*that.options.titleWidth+that.options.slideWidth)+'px'});
            }
        });

    };

    this.initPosition=function()
    {
        that.headers.each(function(index,dt)
        {
            dt=$(dt);
            if(index==0)
            {
                //dt.css({marginLeft:'20px'});
            }





            if(that.activeIndex>=index) // prev, active
            {
                dt.css({left:(index)*that.options.titleWidth+'px'});
            }
            else if(that.activeIndex<index) // next
            {
                dt.css({left:(index-1)*that.options.titleWidth-11+that.options.slideWidth+'px'});
            }
        });
    }

    this.init();
    this.bindClickHandler=function()
    {
        that.headers.each(function(index,dt)
        {
            dt=$(dt);

            dt.click(function()
            {
                if(!dt.hasClass('active'))
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

                    //var new_dd_left =(i-1)*that.options.titleWidth;

                    that.slides.eq(i).animate({left:'+='+(that.options.slideWidth-that.options.titleWidth-that.options.plusTitleWidth)},500);
                }



                //var timer=new Timer();
                //timer.delay=1000/5;
                //timer.iterations_limit=5;

                //timer.arg=that;
                //timer.handler=function(){
                //    that.moveLeftBy(elements,(that.options.slideWidth-40)/5);
                //};
                //timer.start();
            }
            else if(required_index>that.activeIndex) // next  required
            {
                for(var i=that.activeIndex+1;i<=required_index;i++)
                {

                    //elements[elements.length]=that.slides.eq(i);
                    that.slides.eq(i).animate({left:'-='+(that.options.slideWidth-that.options.titleWidth-that.options.plusTitleWidth)},500);

                }


                //var timer=new Timer();
                //timer.delay=500/5;
                //timer.iterations_limit=5;

                //timer.arg=that;
                //timer.handler=function(){
                //alert(that.options.slideWidth);
                //    that.moveLeftBy(elements,(that.options.slideWidth-40)*-1/5);
                //};

                //timer.handler.call();
                //timer.start();
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